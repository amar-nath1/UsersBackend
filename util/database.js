
const sql=require('mysql2')
const pool=sql.createPool({
    host:'localhost',
    user:'root',
    password:'Admin@123',
    database:'bookingdb'
})

module.exports=pool.promise()