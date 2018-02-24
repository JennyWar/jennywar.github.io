// =========================
// Dependencies
// ==========================
const orm = require('../config/orm.js');


const burger = {
    
    selectAll: function (onResult) {
        orm.selectAll('burgers', onResult);
    },

    insertOne: function(burger_name, onResult) {
        orm.insertOne('burgers', 'burger', burger_name, onResult); 
    },

    updateOne: function(burger_name, devoured, id, onResult) {
        orm.updateOne('burgers', 'burger', burger_name, devoured, id, onResult);
    }
}


// ==================
// Exports
// ==================
module.exports = burger;