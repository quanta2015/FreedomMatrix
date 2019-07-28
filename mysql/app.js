var db = require("./utils/db.js")


// db.update("account", {password:"qazxsw", age: 20}, {name:"liyang", age:20}, (err,ret)=>{
//   let r = {
//     data: JSON.stringify(ret.recordset),
//     count: ret.rowsAffected[0]
//   }
//   console.log(r)
// })


// db.selectPage("zip", "", "", "order by id", 3, 10, (err, ret) => {
//   let r = {
//     data: JSON.stringify(ret.recordset),
//     count: ret.rowsAffected[0]
//   }
//   console.log(r)
// })





// db.add("account",{name:'zhangsan',age:12}, (err,ret)=>{
//   let r = {
//     data: JSON.stringify(ret)
//   }
//   console.log(r)
// })


// db.del("account",{name:'tom', age:78}, (err,ret)=>{
//     let r = {
//         data: JSON.stringify(ret),
        
//     }
//     console.log(r)
// })

// db.select("account","where name like '%%'","order by name","5", (err,ret)=>{
//     let r = {
//         data: JSON.stringify(ret),
        
//     }
//     console.log(r)
// })


// db.selectAll("account", (err,ret)=>{
//     let r = {
//         data: JSON.stringify(ret),
        
//     }
//     console.log(r)
// })


