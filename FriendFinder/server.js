// Dependencies
// ======================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
// ==================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Static files
// ========================================
app.use(express.static('app/public'));

// Routes
// ===========================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start the server to begin listening
//===============================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});






