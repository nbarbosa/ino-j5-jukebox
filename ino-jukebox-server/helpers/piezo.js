var config = require('../config/config');
var five = require('johnny-five');
var board = new five.Board();
piezo = null;

board.on('ready', function () {
	piezo = new five.Piezo(config.PIEZO_PIN);

	module.exports = piezo;

	setInterval(function (){
		console.log('Piezo is Playing: ' + piezo.isPlaying);

		if (piezo.isPlaying === false) {
			var song = queue.getMessageSync();
			if (song !== null) {
				piezo.play(song);
			}
	    }
	}, config.QUEUE_INTERVAL_SECONDS * 1000);
});