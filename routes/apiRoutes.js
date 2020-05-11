
console.log('API connection successful');

var friendData = require('../data/friends.js');


function apiRoutes(app){

  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res) {


        // Parse new friend inputs
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;


        // check the new friend entry
        var scoreComparisionArray = [];
        for (var i = 0; i < friendsData.length; i++) {

            // Check scores and sum diff
            var currentComparison = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
            }

            // Push to array
            scoreComparisionArray.push(currentComparison);
        }

        // find best match using the postion of friendsData array
        var bestMatchPosition = 0; 
        for (var i = 1; i < scoreComparisionArray.length; i++) {

            // round number
            if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
                bestMatchPosition = i;
            }

        }

        // select most recent entry
        var bestFriendMatch = friendsData[bestMatchPosition];
        
        res.json(bestFriendMatch);

        // Push the new friend to the friends data array for storage
        friendsData.push(newFriend);

    });
}

module.exports = apiRoutes;