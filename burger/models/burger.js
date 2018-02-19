// =========================
// Dependencies
// ==========================
const orm = require('../config/orm.js');

const burger = {
    selectAll: function (onResult) {
        orm.selectAll(function(err, res) {
            onResult(err, res);
            console.log(res);
        });
    },
    insertOne: function(burger_name, devoured, onResult) {
        orm.insertOne(burger_name, devoured, function(err, res) {
            onResult(err, res);
            console.log(res);
        })
    }
}


// ==================
// Exports
// ==================
module.exports = burger;