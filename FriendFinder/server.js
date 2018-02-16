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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })


// // Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));

// Routes
// ===========================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start the server to begin listening
//===============================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






