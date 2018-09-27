module.exports = setStatics = function (appMod, pathMod) {
    var vFileNames = [
        "audir8",
        "bentley",
        "bmwm235",
        "g63",
        "lamborghiniconvertible",
        "lamborghinihuracanavio",
        "mclaren",
        "rangerover",
        "rollsroyceghost",
        "rollsroycewraith",
        "s63"
    ]
    var rFileNames = [
        "about",
        "carrental",
        "contact",
        "faq",
        "membersclub",
        "news",
        "policy",
        "properties",
        "venue"
    ]
    function setStaticRoute(route, fileName) {
        appMod.get(route, function (req, res) {
            res.sendFile(pathMod.join(__dirname, "..", "pages", fileName + ".html"));
            res.end();
        });
    }
    // vehicle routes
    vFileNames.forEach(function(vehicle) {
        setStaticRoute("/vehicles/" + vehicle, vehicle);
    });
    // other pages routes
    rFileNames.forEach(function(name) {
        setStaticRoute("/" + name, name);
    });
    // index route
    setStaticRoute("*", "index");
}