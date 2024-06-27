const mysql = require('mysql2');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // your mysql username
    password: 'sudhanshu@480000',    // your mysql password
    database: 'ccms'   // your mysql database name
});