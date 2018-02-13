// require npm path package
// ====================
const path = require('path');

// Routes
// ==========================================
module.exports = function(app) {
    // route the user to the home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    // routes the user to the survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // If no matching route is found then default the user to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};








