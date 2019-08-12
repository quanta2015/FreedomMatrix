const mysql = require('mysql');
const config = require("./conf.js")
const pool = mysql.createPool(config); 

var prepareParm = (obj, nl, vl, el)=> {
  for(let key in obj) {
    let val = obj[key]
    console.log('typeof(val).............'+ typeof(val))
    nl.push(key)
    if (typeof(val)==='string') {
      vl.push(`'${val}'`)
      el.push(`${key}='${val}'`)
    }else if (val instanceof Array) {
      vl.push(`'${val.join('|')}'`)
      el.push(`${key}='${val}'`)
    }else{
      vl.push(`${val}`)
      el.push(`${key}=${val}`)
    }
  }
}



var selectPage = async (table, whereSql, orderSql, pageIndex=1, size=10, cb)=>{
  pool.getConnection((err, conn)=>{
    if (err) {
      console.log('Connect error', err )
    } else {
      let sql = `select * from ${table} ${whereSql} ${orderSql} limit ${(pageIndex-1)*size}, ${size}`
      conn.query(sql,  ( err, rows) => {
        if ( err ) {
          console.log('SQL error', err )
        } else {
          cb( err, rows )
        }
        conn.release()
      })
    }
  })
};




var select = async (table, where, order, limit, cb)=>{
  pool.getConnection((err, conn)=>{
    if (err) {
      console.log('Connect error', err )
    } else {
      let sql = `select * from ${table} ${where} ${order} ${limit}`
      conn.query(sql,  ( err, rows) => {
        if ( err ) {
          console.log('SQL error', err )
        } else {
          cb( err, rows )
        }
        conn.release()
      })
    }
  })
};

var selectAll = async (table, cb)=>{
  pool.getConnection((err, conn)=>{
    if (err) {
      console.log('Connect error', err )
    } else {
      let sql = `select * from ${table}`
      conn.query(sql, ( err, rows) => {
        if ( err ) {
          console.log('SQL error', err )
        } else {
          cb( err, rows )
        }
        conn.release()
      })
    }
  })
};


var del = async (table, where, cb)=>{
  pool.getConnection((err, conn)=>{
    if (err) {
      console.log('Connect error', err )
    } else {
      let whereSql  = []
      prepareParm(where,[],[],whereSql)
      whereSql = whereSql.join(' and ')
      let sql = `delete from ${table} where ${whereSql}`
      console.log(sql)
      conn.query(sql, ( err, rows) => {
        if ( err ) {
          console.log('SQL error', err )
        } else {
          cb( err, rows )
        }
        conn.release()
      })
    }
  })
};


var add = async (table, params, cb)=>{
  pool.getConnection((err, conn)=>{
    if (err) {
      console.log('Connect error', err )
    } else {
      let fieldList = []
      let valList = []
      prepareParm(params,fieldList,valList,[])
      sql = `insert into ${table} (${fieldList.join(',')}) values(${valList.join(',')})`;
      console.log(sql)
      conn.query(sql, ( err, rows) => {
        if ( err ) {
          console.log('SQL error', err )
          cb( err, { code: 1, msg: '数据添加失败！' } )
        } else {
          cb( err, { code: 0, msg: '数据添加成功！', rows:rows} )
        }
        conn.release()
      })
    }
  })
};


var querySQL = async (sql, cb)=>{
  var conn = mysql.createConnection(config);
  conn.query(sql, function (err, ret, fields) {
    if ( err ) {
      console.log('SQL error', err )
      cb( err, { code: 1, msg: '保存失败！'} )
    } else {
      cb( err, { code: 0, msg: '保存成功！'} )
    }
    conn.end();
  });
};

var procedureSQL = async (sql, params, cb)=>{
  var conn = mysql.createConnection(config);
  conn.query(sql, params, function (err, ret, fields) {
    if ( err ) {
      console.log('SQL error', err )
      cb( err, ret )
    } else {
      cb( err, ret[0])
    }
    conn.end();
  });
};


// var update = async (table, update, where, cb)=> {
//   await conn;
//   try{
//     let updateList = []
//     let whereList  = []
//     let ps = new mssql.PreparedStatement(pool);
//     prepareParms(ps, update, [], [], updateList)
//     prepareParms(ps, where, [], [],  whereList)
//     let updateSql = updateList.join(',')
//     let whereSql  = whereList.join(' and ')
//     let sql = `update ${table} set ${updateSql} where ${whereSql}`;
    
//     prepareExec(ps, sql, "", cb)
//   }catch(err){
//     console.error('SQL error', err);
//   }
// };




// var querySql = async (sql, params, cb)=>{
//   try{
//     let ps = new mssql.PreparedStatement(pool);
//     prepareParms(ps, params, [], [], [])
//     prepareExec(ps, sql, params, cb)
//   }catch(err){
//     console.error('SQL error', err);
//   }
// };




// var selectPage = async (table, whereSql, params, orderSql, index=0, size=10, cb)=>{
//   await conn;
//   try{
//     var ps = new mssql.PreparedStatement(pool);
//     sql = `select top(${size}) * from ${table} ${whereSql}  where id not in ( select top ${(index-1)*size} id from ${table} ) ${orderSql}`;
//     console.log(sql);
//     prepareParms(ps, params, [], [], [])
//     prepareExec(ps, sql, params, cb)
//   }catch(err){
//     console.error('SQL error', err);
//   }
// };


exports.select     = select;
exports.selectAll  = selectAll;
exports.selectPage = selectPage;
exports.querySQL   = querySQL;
exports.add        = add;
exports.procedureSQL     = procedureSQL;
exports.del        = del;
exports.prepareParm= prepareParm;