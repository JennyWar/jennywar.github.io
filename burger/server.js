// ==========================
// Dependencies
// ==========================

// require npm express package
const express = require('express');
// require npm method override package
const methodOverride = require('method-override');
// require npm body-parser package
const bodyParser = require('body-parser');
// require express-handlebars package
const exphbs = require("express-handlebars");
// get the plan routes from the burgers_controller.js file
const planRoutes = require('./controllers/burgers_controller.js');
  
// Store the express package in a variable
const app = express();
const PORT = process.env.PORT || 3000;


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Handlebars Engine Setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve up the static assets
app.use(express.static('public'));

// Include the plan routes from the controller
app.use(planRoutes);


// ==============================================
// Start the server to begin listening
//===============================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
