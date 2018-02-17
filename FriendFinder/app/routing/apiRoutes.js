// Require the friends.js file
// ===================================
const friends = require('../data/friends.js');

// Routes
// =================================

module.exports = function(app) {

    // GET route to get all possible friends in JSON
    //==============================================
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    
    // POST route to submit the users data in JSON format to the server
    // ========================================================
    app.post('/api/friends', function (req, res) {

        // This object is used to hold the closest match for the user    
        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // We will take the user's survey results and parse the data
        const userData = req.body;
        const userName = userData.name;
        const userPhoto = userData.photo;
        const userScores = userData.scores;

        // variable to help calculate the difference betweent the users scores and other scores
        const totalDifference = 0;

        // loop through all fo the friend possibilities
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseFloat(userScores[j]) - parseFloat(userScores[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {
                   bestMatch.name = friends[i].name;
                   bestMatch.photo = friends[i].photo;
                   bestMatch.friendDifference = totalDifferenc;e
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    });
}
