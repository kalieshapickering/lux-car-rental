var express = require("express");

var router = express.Router();

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

// Export routes for server.js to use.
module.exports = router;
