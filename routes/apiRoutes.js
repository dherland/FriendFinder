
console.log('API connection successful');

var friendData = require('../data/friends.js');

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(friendData);
  })
  

  app.post('/api/friends', function(req, res) {
    var newFriendsScore = req.body.scores;
    var scoreArr = [];

    for(var i=0;i<friendData;i++){
      var difference = 0;
      for(var j=0;j=newFriendsScore.length;j++){
        difference += (Math.abs(parseInt(friendData[i].scores[j] - parseInt(newFriendsScore[j]))));
      }
      scoreArr.push(difference);
    }

    for(var i=0;i<scoreArr.length;i++){
      if(scoreArr[i] <= scoreArr[bestMatch]){
        bestMatch = i;
      }
    

    var bestFriend =friendData[bestMatch];
    res.json(bestFriend);

    friendData.push(req.body);
      }
    });
  }

