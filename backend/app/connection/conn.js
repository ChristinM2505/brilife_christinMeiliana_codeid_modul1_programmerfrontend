var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "christin",
  password: "root123",
  database: "db_keluarga_berencana"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;