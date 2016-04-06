var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/app');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


app.listen(process.env.PORT || 3000);

module.exports = app;
