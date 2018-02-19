// =========================
// Dependencies
// ==========================
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();



// ================================
// Routes
// ===========================================
// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);



//=======================
// Exports
// ========================
module.exports = express;
module.exports = methodOverride;
module.exports = bodyParser;
