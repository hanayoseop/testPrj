export {};
const mysql = require("mysql2");
let db;

try {
    db = mysql.createConnection({
        user: "rite",
        password: "1q2w3e4r",
        host: "218.155.53.116",
        // host: "127.0.0.1",
        port: "3306",
        database: "rite",
    });
} catch (err) {
    console.error(err);
}

module.exports = db;
