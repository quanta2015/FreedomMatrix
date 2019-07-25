var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser')
var moment = require('moment');
var cors = require('cors')
var exphbs = require('express-handlebars');
var url = require('url')
var db = require("./db/db")
// var jwt= require('jsonwebtoken')
// var formidable = require('formidable'); 

// const configFile = `${__dirname}/data/config.json`
// const config = JSON.parse(fs.readFileSync(configFile,'utf-8'))



var port = 1080;
var secret = 'bizsecret';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/')));

// app.set('view engine', 'html');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var __projdir = path.resolve(__dirname,'./');

var hbs = exphbs.create({
  partialsDir: 'views/',
  layoutsDir: "views/layouts/",
  defaultLayout: 'layout',
  extname: '.hbs'
});

app.engine('hbs', hbs.engine);

app.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/index.html');
});


app.post('/user/reg', function(req, res, next) {
  let data = req.body
  console.log(data)

  // 1. construct data to sql
  // 2. insert into database
  let {}  = data
  let expList = []
  for(let i=1;i<data.count+1;i++) {
    let item = {}
    item[`proj_name`] = data[`proj_name_${i}`]
    item[`date_from`] = data[`date_from_${i},date_to_${i}`][0]
    item[  `date_to`] = data[`date_from_${i},date_to_${i}`][1]
    item[`work_lang`] = data[`work_lang_${i}`]
    item[`work_role`] = data[`work_role_${i}`]
    item[`work_proj`] = data[`work_proj_${i}`]
    item[`work_detl`] = data[`work_detl_${i}`]
    expList.push(item)
  }

  let account = {
    email:data.email,
    pwd:data.pwd,
    name_kj:data.name_kj,
    name_kn:data.name_kn,
    birth:data.birth,
    phone:data.phone,
    pers_type:data.pers_type,
    work_area:data.work_area,
    work_time:data.work_time,
    work_mony:data.work_mony,
    work_type:data.work_type
  }

  let sqlList   = []
  let fieldList = []
  let valList   = []
  let table     = "account"

  db.prepareParm(account,fieldList,valList,[])
  let sql = `insert into ${table} (${fieldList.join(',')}) values(${valList.join(',')})`
  sqlList.push(sql)

  table  = "exp"
  for(let i=0;i<expList.length;i++) {
    fieldList = []
    valList   = []
    table  = "exp"
    db.prepareParm(expList[i],fieldList,valList,[])
    sql = `insert into ${table} (${fieldList.join(',')}) values(${valList.join(',')})`
    sqlList.push(sql)
  }

  sql = sqlList.join(';') + ';'
  console.log(sql)

  db.querySQL(sql, (err,ret)=>{
    if (ret.code == 0) {
      res.status(200).json({
        code: 200,
        msg: '保存成功'
      })
    }else{
      res.status(500).json({
        code: -1,
        msg: '保存失败',
        data: null,
      })
    }
  })

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.set('port', port);
var httpServer = http.createServer(app);
httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);



function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}
