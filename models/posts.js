const path = require("path");

// load sequelize connection
const Sequelize = require("sequelize");
const sequelize = require(path.join(__dirname, "..", "config", "connection"));

