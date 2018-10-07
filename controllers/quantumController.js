// import express and app router
const express = require("express");
const router = express.Router();

// file system modules
const path = require("path");
const fs = require("fs");

// import JSON fleet
const fleet = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "models", "fleet.json")));
// create all as a JSON array that holds all vehicle objects without seperation by type
let all = {};
let fleet2 = {};
// parse fleet into all
Object.keys(fleet).map(type => {
    fleet[type].forEach((vehicle, i) => {
        // declaring the new key name
        all[vehicle.name.toLowerCase().replace(/ /g,'')] = vehicle;
        // dev line to modify fleet.json to hold raw names
        fleet2[type][i]
    });
});
console.log(all);

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
                // use fleet[name] and fleet[name][tech-specs]
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

// Export routes for server.js to use.
module.exports = router;