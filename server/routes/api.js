var express = require('express');
var router = express.Router();
var gameRouter = require('./game');

router.get('/', function(req, res, next) {
  res.json(200, {
    version: "1.0.0"
  });
});

router.use('/game', gameRouter);

router.get('/computer-move', function(req,res,next){
  res.json(200, {result: Math.floor(Math.random() * 3)});
});

module.exports = router;
