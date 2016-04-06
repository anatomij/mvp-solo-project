// var express = require('express');
// var mongoose = require('mongoose');
// var handler = require('./handlers/userHandler.js');
// var util = require('./handlers/utility');
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser')
// var session = require('express-session')
//
// var app = express();
// app.use(express.static(__dirname + '/../client/'));
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/blackjack');
//
// // app.get('/', function(request, response) {
// //   response.render('../client/blackjack.html')
// // });
//
// app.use(bodyParser.json());
// app.use(cookieParser('shhhh, very secret'));
// app.use(session({
//   secret: 'vodka cat',
//   resave: false,
//   saveUninitialized: true
// }))
// app.get('/', util.checkUser, handler.renderIndex);
//
// app.get('/login', handler.loginUserForm);
// app.post('/login', handler.loginUser);
// app.get('/logout', handler.logoutUser);
//
// app.get('/signup', handler.signupUserForm);
// app.post('/signup', handler.signupUser);
//
// app.listen(process.env.PORT || 3000);
var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "shortly"
mongoose.connect('mongodb://heroku_j7864rxh:f2c91390tdmbbkl7dd6askeb0a@ds015700.mlab.com:15700/heroku_j7864rxh');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(process.env.PORT || 3000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
