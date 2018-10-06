const path = require("path");
const fs = require("fs");
const mysql = require("mysql2");
let config;
if (fs.existsSync(path.join(__dirname, "arvinsenv.json"))) {
    config = JSON.parse(fs.readFileSync(path.join(__dirname, "arvinsenv.json")));
}

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});