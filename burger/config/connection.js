// ============================
// Dependencies 
// ============================
const mysql = require("mysql");


// ==================================
// Connect to sql burgers database
// ==================================
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});


// ======================================
// Export the connection to other files
// ======================================
module.exports = connection;

