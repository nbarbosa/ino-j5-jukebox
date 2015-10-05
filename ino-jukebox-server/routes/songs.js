require('../helpers/piezo');
var express = require('express');
var router = express.Router();
var five = require('johnny-five');
var board = new five.Board();
var songs = require('j5-songs');


module.exports = function(app, router) {

  router.route('/songs')
    .get(function(req, res, next) {
        getSongList(function (songs) {
          res.send(songs);
        });
        
    });
  
  router.route('/songs/:songId')
    .put(function (req, res, next) {
      console.log(req.params.songId);
        queue.putMessage(songs.load(req.params.songId));
        res.sendStatus(200);
    }); 

    function getSongList(cb) {
      songs.list(function (err, tunes) {
        var songs = [];
        for (var prop in tunes) {
          var title = prop.replace(/\-/g, ' ').ucwords();
          songs.push({ id: prop, title: title });
        }
        console.log(songs);
        cb(songs);
    });
  }
};

// UCWords Polyfill
String.prototype.ucwords = function() {
  str = this.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
  function(s){
    return s.toUpperCase();
  });
}