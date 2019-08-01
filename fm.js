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
var jwt= require('jsonwebtoken')

// var formidable = require('formidable'); 

// const configFile = `${__dirname}/data/config.json`
// const config = JSON.parse(fs.readFileSync(configFile,'utf-8'))

const clone = (e) =>{ return JSON.parse(JSON.stringify(e))}

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
  res.sendFile(__dirname + '/index.html');
});

app.post('/apply/query', function(req, res) {
  var {id} = req.body
  let sql = `CALL FUNC_GET_APPLY(?)`;
  db.procedureSQL(sql,id,(err,ret)=>{
      if (err) {
        res.status(500).json({
          code: -1,
          msg: '获取apply失败',
          data: null,
        })
      }else{
        res.status(200).json({
          code: 200,
          msg: '获取apply成功',
          data: ret
        })
      }
  })
})


app.post('/fav/query', function(req, res) {
  var {id} = req.body
  let sql = `CALL FUNC_GET_FAV(?)`;
  db.procedureSQL(sql,id,(err,ret)=>{
      if (err) {
        res.status(500).json({
          code: -1,
          msg: '获取fav失败',
          data: null,
        })
      }else{
        res.status(200).json({
          code: 200,
          msg: 'fav',
          data: ret
        })
      }
  })
})
  


app.post('/user/login', function(req, res) {
  var {email, pwd} = req.body
  token = jwt.sign({ email: email, pwd: pwd }, secret);
  
  let where = `where email='${email}' and pwd = '${pwd}'`
  db.select('account',where,'','', (err,ret)=>{
    let account = ret[0]
    if (ret.length > 0) {
      where = `where pid=${account.id}`
      db.select('exp',where,'','', (err,exp)=>{
          // let exp = eret
          
          res.status(200).json({
            code: 200,
            msg: '登录成功',
            data: {token: token, user: account, exp: clone(exp)}
          })
      })
    }else{
      res.status(500).json({
        code: -1,
        msg: '登录失败',
        data: null,
      })
    }
  })
})



app.post('/user/reg', function(req, res, next) {
  let data = req.body

  // init account data
  let account = {
    email:data.email,
    pwd:data.pwd,
    name_kj:data.name_kj,
    name_kn:data.name_kn,
    birth:data.birth,
    phone:data['input-number-phone'],
    pers_type:data.pers_type,
    work_area:data['select-multiple-work_area'],
    work_time:data['select-multiple-work_time'],
    work_mony:data.work_mony,
    work_type:data['select-multiple-work_type']
  }

  let sqlList   = []
  let fieldList = []
  let valList   = []

  // insert account table
  db.add('account',account, (err,ret)=>{
    if (ret.code == 0) { 
      

      if (data.count>0) {
        // exp data
        let expList = []
        for(let i=1;i<data.count+1;i++) {
          let item = {}
          item[`pid`] = ret.rows.insertId
          item[`proj_name`] = data[`proj_name_${i}`]
          item[`date_from`] = data[`date_from_${i},date_to_${i}`][0]
          item[  `date_to`] = data[`date_from_${i},date_to_${i}`][1]
          item[`work_lang`] = data[`select-multiple-work_lang_${i}`]
          item[`work_role`] = data[`select-multiple-work_role_${i}`]
          item[`work_proj`] = data[`select-multiple-work_proj_${i}`]
          item[`work_detl`] = data[`work_detl_${i}`]
          expList.push(item)
        }

        // create exp sql
        for(let i=0;i<expList.length;i++) {
          fieldList = []
          valList   = []
          db.prepareParm(expList[i],fieldList,valList,[])
          sql = `insert into exp (${fieldList.join(',')}) values(${valList.join(',')})`
          sqlList.push(sql)
        }
        sql = sqlList.join(';') + ';'

        // insert account table
        db.querySQL(sql, (err,ret)=>{
          if (ret.code == 0) { 
            token = jwt.sign({ email: account.email, pwd: account.pwd }, secret);
            res.status(200).json({
              code: 200,
              msg: '保存成功',
              data: {token: token, user: account, exp: expList}
            })
          }else{
            res.status(500).json({ code: -1, msg: '保存失败', data: null })
          }
        })
      }else{
        token = jwt.sign({ email: account.email, pwd: account.pwd }, secret);
        res.status(200).json({
          code: 200,
          msg: '保存成功',
          data: {token: token, user: account, exp: []}
        })
      }
    }else{
      res.status(500).json({ code: -1, msg: '保存失败', data: null })
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
