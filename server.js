// load express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const path = require("path");

// load sequelize models
const db = require(path.join(__dirname, "models"));

// load Handlebars template engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// helmet to be installed in post-development and from another file under security directory
// const helmet = require("helmet");
// app.use(helmet());
// CSP
// const whitelist = require(path.join(__dirname, "app", "assets", "security", "whitelist.js"));
// app.use(helmet.contentSecurityPolicy(whitelist));

// load and use routes set in the controller
const routes = require(path.join(__dirname, 'controllers', 'quantumController.js'));
app.use(routes);

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// API routing
//require(path.join(__dirname, "app", "routing", "apiRouting.js"))(app, path, fs, moment);

// set dynamic port and listen
app.set("port", process.env.PORT || 8080);
db.sequelize.sync().then(() => {
    app.listen(app.get("port"), function () {
        console.log("Listening on port " + app.get("port"));
    });
});