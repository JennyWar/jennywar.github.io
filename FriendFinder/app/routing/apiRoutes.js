// Require the friends.js file
// ===================================
const friends = require('../data/friends.js');

// Routes
// =================================

module.exports = function(app) {

    // GET route to get all possible friends in JSON
    //==============================================
    app.get("/api/friends", function (req, res) {
        res.send(friends)
    });
    
    // POST route to submit the users data in JSON format to the server
    // ========================================================
    app.post("/api/friends", function (req, res) {

        const newFriend = req.body;
        

        if (newFriend.length < 5) {

            reservations.push(newReservation);

        } else {
            waitlist.push(newReservation);
            var waitlisted = true;
        }
        //passes into the jquery post
        res.json(argument);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.

}