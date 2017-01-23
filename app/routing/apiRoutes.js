var path = require('path');
var drinksArray = require('./../data/friends.js');

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

var friendscores = [];
for (var i=0; i<drinksArray.length; i++) {
    friendscores.push(drinksArray[i].score);
}

module.exports = function(app){
    app.post('/api/friends', function(req, res) {
        var matchscores = [];
        var matches = [];
        var userscore = eval(req.body.scores.toString().replace(/,/g,'+'));
        for (var i=0; i<friendscores.length; i++) {
            matchscores[i] = Math.abs(userscore-friendscores[i]);
        }
        for (var i=0; i<matchscores.length; i++) {
            if (matchscores.min() == matchscores[i]) {
                matches.push(friends[i]);
            }
        }
        if (matches.length = 1) {
            console.log(matches);
            res.json(matches[0]);
        }
        else {
            res.json(matches[Math.floor(matches.length * Math.random())]);
        }
    });
}