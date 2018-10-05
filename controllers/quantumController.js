// import express and app router
const express = require("express");
const router = express.Router();

// file system modules
const path = require("path");
const fs = require("fs");

// import JSON fleet
const fleet = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "models", "fleet.json")));
const all = [];
// TODO: continue this so that it works
Object.keys(fleet).map(type => all.concat(fleet[type]));
console.log(all);

console.log(all);
router.get("/fleet/:name?", function (req, res) {
    console.log(req.params.name);
    res.render("car-pages", {
        ics: fleet[req.params.name]
    });
});

// root handlebar will be modified to show case all vehicles by joining keys of fleet object
router.get("/", function (req, res) {
    res.render("index", {
        ics: fleet
    });
});
// router.get("/fleet", function (req, res) {
//     res.render("carrental", {
//         ics: exoticFleet
//     });
// });

router.get("/contact", function (req, res) {
    res.render("contact", {
        ics: exoticFleet
    });
});

router.get("/members-club", function (req, res) {
    res.render("members-club", {
        ics: exoticFleet
    });
});

router.get("/properties", function (req, res) {
    res.render("properties", {
        ics: exoticFleet
    });
});
router.get("/faq", function (req, res) {
    res.render("faq", {
        ics: exoticFleet
    });
});

// Export routes for server.js to use.
module.exports = router;