const mysql = require("mysql");
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Start the server to begin listening
//===============================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});


module.exports = connection;
