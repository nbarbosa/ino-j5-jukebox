var express = require('express');

module.exports = function(app, piezo) {

    var router = express.Router();
    
    require('../routes/songs')(app, router, piezo);
  
    app.use(router);

};