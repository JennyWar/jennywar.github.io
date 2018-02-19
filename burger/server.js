// ==========================
// Dependencies
// ==========================
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
  

// Store the express package in a variable
const app = express();

// Serve static files in the public folder 
app.use(express.static(process.cwd() + './public'));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());


// ==========================
// Express-Handlebars
// ==========================
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// ================================
// Set up Router
// ===========================================
// const router = require('./controllers/burgers_controllers.js');
// app.use('/', router);

// ==============================================
// Start the server to begin listening
//===============================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
