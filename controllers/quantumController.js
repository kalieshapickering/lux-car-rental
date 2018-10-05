var express = require("express");

var router = express.Router();

router.get("/fleet/:name", function (req, res) {
    res.render("car-pages", {
        ics: exoticFleet
    });
});

router.get("/", function (req, res) {
    res.render("index", {
        ics: exoticFleet
    });
});
router.get("/fleet", function (req, res) {
    res.render("carrental", {
        ics: exoticFleet
    });
});

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
