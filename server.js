// load express
var express = require("express");
var app = express();

// install body-parser as middleware
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load other modules
var path = require("path");
var moment = require("moment");

// route static resources
app.use(express.static(path.join(__dirname, "app")));

// API routing

// Static routing
require(path.join(__dirname, "app", "routing", "staticRouting.js"))(app, path);
// Set dynamic port
app.set("port", process.env.PORT || 8080);

// Listen to port
app.listen(app.get("port"), function() {
    console.log("Listening on port " + app.get("port"));
})