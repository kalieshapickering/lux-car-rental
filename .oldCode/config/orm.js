const path = require("path");
const con = require(path.join(__dirname, "connection"));

con.query("SHOW COLUMNS FROM posts", function(err, data) {
    if (err) throw err;
    console.log(data);
});