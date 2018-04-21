var express = require('express');
var router = express.Router();

var JSONdb = require('simple-json-db');
var db = new JSONdb('./db.json');

function findGame(games, gameId) {
  return games.find(function(game) {
    return game.id === gameId;
  });
}

function uniqueId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};

/* GET all games. */
router.get('/', function(req, res) {
  res.json(db.get('games'))
});

router.get('/:gameId', function(req, res){
  var games = db.JSON().games;
  var gameId = parseInt(req.params.gameId, 10);

  res.json(findGame(games, gameId));
});

router.post('/', function(req,res){
  var games = db.JSON().games;
  if (!req.body.id) {
    req.body.id = uniqueId();
  }
  games.push(req.body);
  db.JSON({"games": games});
  db.sync();

  res.json(201,"I've added your game");
});

module.exports = router;
