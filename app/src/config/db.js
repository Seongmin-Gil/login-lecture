const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "pass",
    database: "login_test",
});

db.connect();

module.exports = db;