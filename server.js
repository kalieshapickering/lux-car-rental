// load express
const express = require("express");
const app = express();

// install helmet 
const helmet = require("helmet");
/* helmet security modules enabled by default:
DNS Prefetch Control
Frameguard to prevent clickjacking
hidePoweredBy to remove powered by framework header
hsts to enforce strict transport security
ieNoOpen turns on X-Download options to prevent execution of client-side script when downloaded HTML files are opened in IE8
noSniff prevents clients from sniffing MIME types
xssFilter prevents cross-scripting attacks

Modules disabled by default:
contentSecurityPolicy, manually enabled to set security policy in post headers
hpkp can be enabled to pin a client's public key to its web server
noCache disables client-side caching
referrerPolicy hides header of referring link
Content Security Policy Header -- Manually enabled */
app.use(helmet({
    contentSecurityPolicy: true
}));

// install body-parser as middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load other modules
const path = require("path");
const moment = require("moment");
const fs = require("fs");

// route static resources
app.use(express.static(path.join(__dirname, "app")));

// API routing
require(path.join(__dirname, "app", "routing", "apiRouting.js"))(app, path, fs, moment);
// static routing
require(path.join(__dirname, "app", "routing", "staticRouting.js"))(app, path);

// set dynamic port
app.set("port", process.env.PORT || 8080);

// listen to port
app.listen(app.get("port"), function () {
    console.log("Listening on port " + app.get("port"));
});