// =========================
// Dependencies
// ==========================
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;  

const app = express();

// 
app.use(express.static('./public'))
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());


// ================================
// Routes ---- NOT SURE YET IF I NEED THESE SIN THIS FILE
// ===========================================
// require('./config/connection.js')(app);
// require('./config/orm.js')(app);

// ==============================================
// Start the server to begin listening
//===============================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});


//=======================
// Exports
// ========================
module.exports = express;
module.exports = app;
module.exports = methodOverride;
module.exports = bodyParser;
