// load express
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

//load Handlebars template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // install helmet 
// const helmet = require("helmet");
// app.use(helmet());

// CSP temporarily disabled for development
// const whitelist = require(path.join(__dirname, "app", "assets", "security", "whitelist.js"));
// app.use(helmet.contentSecurityPolicy(whitelist));

// // install body-parser as middleware
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// load other modules
//const moment = require("moment");


var fleet = [
    {name: 'lamborghini', price: 2500, deposit: 10000},
    {name:'Bentley', price: 1000, deposit: 5000}
]

app.get("/fleet/:name", function(req, res) {
    res.render("car-pages", {ics: fleet});
  });

  app.get("/", function(req, res) {
    res.render("index", {ics: fleet});
  });
  app.get("/fleet", function(req, res) {
    res.render("carrental", {ics: fleet});
  });

  app.get("/contact", function(req, res) {
    res.render("contact", {ics: fleet});
  });

  app.get("/members-club", function(req, res) {
    res.render("members-club", {ics: fleet});
  });

  app.get("/properties", function(req, res) {
    res.render("properties", {ics: fleet});
  });  
  app.get("/faq", function(req, res) {
    res.render("faq", {ics: fleet});
  });

  //load app contents
  app.use(express.static('views/images')); 
  app.use(express.static('views/css')); 
  
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
