// ==========================
// Dependencies
// ==========================
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


// ===========================
// Routes
// ===========================

// Use handlebars to render the main index.html page with all the burgers
router.get('/', function(req, res) {
    
    burger.selectAll(function(req,res) {

        if (err) {return res.status(500).end(); }

        res.render('index', {burgers: data });
    });
});


// Add a new burger
router.post('/burgers', function(req, res) {

    // call the model that creates a new burger
    burger.insertOne(req.body.burger, function(err, data) {

        if (err) {return res.status(500).end(); }

        res.json({ id: data.insertId });
    });
});


// Update a burger
router.put('/burgers/:id', function(req, res) {

    burger.updateOne(req.body.burger_name, req.params.id, function(err, data) {

        if (err) {return res.status(500).end(); }
        // If not rows were changed, than id didn't exist so a 404 error will be displayed
        if (data.changedRows ===0) {

            return res.status(404).end();
        }

        res.status(200).end();
    })
});


// =====================
// Export to other files
// =====================
module.exports = router;