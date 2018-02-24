// ==============================
// Dependencies
// ==============================
const connection = require("./connection.js");

const orm = {

    // function to show all the burgers in the DB
    selectAll: function (onResult) {
        const query = 'SELECT * FROM burgers';
        connection.query(query, function (err, result) {
            onResult(err, result);
            // console.log(result);        
        });
    },

    // function to insert a burger into the DB
    insertOne: function (burger_name, devoured, onResult) {
        const query = "INSERT INTO burgers SET ?";
        connection.query(query, [burger_name, devoured], function (err, result) {
            onResult(err, result);
            // console.log(result);
        })
    },
    
    updateOne: function(burger_name, devoured, id, onResult) {
        const query = 'UPDATE burgers SET ?? = ? WHERE id = ?';
        connection.query(query, [burger_name, devoured, id], function(err, result) {
            console.log(err);
            onResult(err, result);
        })
    }
    
};

// ========================
// Export orm 
// ========================
module.exports = orm;
