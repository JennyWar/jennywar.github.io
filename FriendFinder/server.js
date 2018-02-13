// require npm packages
// ======================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());