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


// ======================================
// Export the connection to other files
// ======================================
module.exports = connection;

