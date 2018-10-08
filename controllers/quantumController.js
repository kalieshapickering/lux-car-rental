// import express and app router
const express = require("express");
const app = express();
// install body-parser as middleware
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// file system modules
const path = require("path");
const fs = require("fs");

const db = require(path.join(__dirname, "..", "models"));

// import JSON fleet
const fleet = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "models", "fleet.json")));
// create all as a JSON array that holds all vehicle objects without seperation by type
let all = {};
// parse fleet into all
Object.keys(fleet).map(type => {
    fleet[type].forEach((vehicle) => {
        // declaring the new key name
        all[vehicle.raw] = vehicle;
        // dev line to modify fleet.json to hold raw names
    });
});

// optional vehicle parameter to access either all or fleet[name]
router.get("/fleet/:name?", function (req, res) {
    // if name is defined
    if (req.params.name) {
        // if this name is inside the object
        if (fleet[req.params.name]) {
            // render that class' fleet
            res.render("carrental", {
                cars: fleet[req.params.name]
            });
        } else if (Object.keys(all).includes(req.params.name)) {
            // res.render("tech-specs", {
                // use all[req.params.name]
            // });
        } else {
            // otherwise, redirect to /fleet/exotic
            res.redirect("/fleet/exotic");
        }
        // else, redirect to /fleet/exotic
    } else {
        // else change the url to /fleet/exotic
        res.redirect("/fleet/exotic");
    }
});

router.get("/", function (req, res) {
    res.render("index", {
        ics: all
    });
});

router.get("/contact", function (req, res) {
    res.render("contact", {
        ics: fleet
    });
});

router.get("/members-club", function (req, res) {
    res.render("members-club", {
        ics: fleet
    });
});

router.get("/properties", function (req, res) {
    res.render("properties", {
        ics: fleet
    });
});
router.get("/faq", function (req, res) {
    res.render("faq", {
        ics: fleet
    });
});

// API route
router.post("/api/rentme", function(req, res) {
    console.log(req.body);
    db.posts.create({
        req_loc: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        vehicle: req.body.vehicle,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    }).then((client) => {
        console.log(client);
        // temporarily ending post request
        // will send back a more sophisticated response when the corresponding view is created
        res.end();
    });
});

// Export routes for server.js to use.
module.exports = router;