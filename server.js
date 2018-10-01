// load express
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

//load Handlebars template engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
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


var exoticFleet = [{
        name: 'LAMBORGHINI AVENTADOR CONVERTIBLE',
        msrp: 450000,
        engine: 700,
        speed: 2.6,
        transmission: 'F1',
        image: 'lamborghini.jpg'
    },
    {
        name: 'LAMBORGHINI HURACAN AVIO',
        msrp: 320000,
        engine: 602,
        speed: 2.6,
        transmission: 'F1'
    },
    {
        name: 'LAMBORGHINI HURACAN CONVERTIBLE',
        msrp: 220000,
        engine: 602,
        speed: 2.6,
        transmission: 'F1'
    }, {
        name: 'BENTLEY CONTINENTAL GT CONVERTIBLE',
        msrp: 264000,
        engine: 500,
        speed: 2.6,
        transmission: 'Automatic'
    }, {
        name: 'MCLAREN 720S',
        msrp: 340000,
        engine: 710,
        speed: 2.6,
        transmission: 'F1'
    }, {
        name: 'FERRARI ITALIA 458',
        msrp: 313000,
        engine: 570,
        speed: 2.6,
        transmission: 'F1',
        image:"458.jpg"
    }

];

var suvFleet = [{
        name: 'MERCEDES-BENZ G63 BRABUS',
        msrp: 229000,
        engine: 850,
        speed: 4.5,
        transmission: 'Automatic'
    },
    {
        name: 'LAND ROVER RANGE ROVER',
        msrp: 234000,
        engine: 575,
        speed: 4.5,
        transmission: 'Automatic',
        image: 'Range-Rover-Sport.jpg'
    }
];

var luxuryFleet = [{
        name: 'ROLLS ROYCE WRAITH',
        msrp: 462000,
        engine: 624,
        speed: 4.5,
        transmission: 'Automatic'
    },
    {
        name: 'ROLLS ROYCE GHOST',
        msrp: 347000,
        engine: 562,
        speed: 4.5,
        transmission: 'Automatic'
    }

];

var sportFleet = [{
        name: 'AUDI R8',
        msrp: 220000,
        engine: 602,
        speed: 4.5,
        transmission: 'Automatic',
        image: 'R8.jpg'
    },
    {
        name: 'MERCEDES-BENZ S63',
        msrp: 160000,
        engine: 603,
        speed: 4.5,
        transmission: 'Automatic'
    }, {
        name: 'BMW M235 CONVERTIBLE',
        msrp: 80000,
        engine: 320,
        speed: 4.5,
        transmission: 'Automatic'
    }
]

app.get("/fleet/:name", function (req, res) {
    res.render("car-pages", {
        ics: exoticFleet
    });
});

app.get("/", function (req, res) {
    res.render("index", {
        ics: exoticFleet
    });
});
app.get("/fleet", function (req, res) {
    res.render("carrental", {
        ics: exoticFleet
    });
});

app.get("/contact", function (req, res) {
    res.render("contact", {
        ics: exoticFleet
    });
});

app.get("/members-club", function (req, res) {
    res.render("members-club", {
        ics: exoticFleet
    });
});

app.get("/properties", function (req, res) {
    res.render("properties", {
        ics: exoticFleet
    });
});
app.get("/faq", function (req, res) {
    res.render("faq", {
        ics: exoticFleet
    });
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