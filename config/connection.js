var mysql = require("mysql");

var arvinsConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "quantum"
};

var con = mysql.createConnection(arvinsConfig);

con.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
});

module.exports = con;