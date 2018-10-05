const mysql = require("mysql");
const fs = require("fs");
const path = require("path");
// config declared using let depending on environment
let config;

// add
if (fs.existsSync(path.join(__dirname, "arvinsenv.json"))) {
    config = JSON.parse(fs.readFileSync(path.join(__dirname, "arvinsenv.json")));
}
const con = mysql.createConnection(config);

con.connect(function(err) {
    if (err) throw err.stack;
    console.log("Connected with thread ID " + con.threadId);
});

module.exports = con;