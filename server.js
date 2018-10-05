// load express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const path = require("path");

//load Handlebars template engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// // install helmet 
const helmet = require("helmet");
app.use(helmet());

// CSP temporarily disabled for development
// const whitelist = require(path.join(__dirname, "app", "assets", "security", "whitelist.js"));
// app.use(helmet.contentSecurityPolicy(whitelist));

// // install body-parser as middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// load and use routes set in the controller
var routes = require(path.join('.', 'controllers', 'quantumController'));
app.use(routes);

//load app contents
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/javascript'));

// route static resources
//app.use(express.static(path.join(__dirname, "app")));

// API routing
//require(path.join(__dirname, "app", "routing", "apiRouting.js"))(app, path, fs, moment);
// static routing
//require(path.join(__dirname, "app", "routing", "staticRouting.js"))(app, path);

// set dynamic port
app.set("port", process.env.PORT || 8080);

// listen to port
app.listen(app.get("port"), function () {
    console.log("Listening on port " + app.get("port"));
});