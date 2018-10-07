const path = require("path");
const fs = require("fs");
const mysql = require("mysql2");
const envFilename = "kalisenv.json";
let config;
if (fs.existsSync(path.join(__dirname, envFilename))) {
    config = JSON.parse(fs.readFileSync(path.join(__dirname, envFilename)));
}

const Sequelize = require("sequelize");
module.exports = sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});