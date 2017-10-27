var friendData = require("../data/friends.js");

var path = require('path');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

  	  var input = req.body;

  	  var scores = input.scores;

  	  var name = '';
  	  var photo = '';

  	  var totalDifference = 10000;

  	  for (var i = 0; i < 10; i++) {
  	  	var difference = 0;
  	  	for (var j = 0; j < 10; j++) {
  	  		difference += Math.abs(friendData[i].scores[j] - scores[j]);
  	  		console.log(difference);
  	  	}

  	  	if (difference < totalDifference) {
  	  		totalDifference = difference;
  	  		name = friendData[i].name;
  	  		photo = friendData[i].photo;
  	  	}
  	  }

      friendData.push(req.body);
      res.json({
      	name: name,
      	photo: photo
      });

  });

  app.get("/api/clear", function() {
    friendData = [];

    console.log(friendData);
  });
};
