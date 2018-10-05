// import express and app router
const express = require("express");
const router = express.Router();

// file system modules
const path = require("path");
const fs = require("fs");

// import JSON fleet
const fleet = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "models", "fleet.json")));
// create all as a JSON array that holds all vehicle objects without seperation by type
let all = [];
// parse fleet into all
Object.keys(fleet).map(type => all = all.concat(fleet[type]));

// optional vehicle parameter to access either all or fleet[name]
router.get("/fleet/:name?", function (req, res) {
    if (req.params.name) {
        res.render("car-pages", {
            // ...render car-pages with fleet[name]
            ics: fleet[req.params.name]
        });
    } else {
        // otherwise render all cars
        res.render("car-pages", {
            ics: all
        });
    }
    // TODO: else...
    // TODO: ...render all
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

// Export routes for server.js to use.
module.exports = router;