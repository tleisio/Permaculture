// Dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var server;


//Middlewares
//var mongoose = require('mongoose');
//var configDB = require('./config/database.js');
var morgan = require('morgan');
var ejs = require('ejs');
var bodyParser = require('body-parser');
//var gulp = require('gulp');
//var sessions = require('client-sessions');

// DB Config
//mongoose.connect(configDB.url);

// App Config
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Sessions Config
/*
app.use(sessions({
  cookieName: 'app_user_session',
  secret: 'somesessionconfigthatyoushouldchangetobesuperlongandundecipherable',
  duration: 7 * 24 * 60 * 60 * 1000, // 1 week duration
  activeDuration: 0,
  cookie: {
    ephemeral: true,
    httpOnly: false,
    secure: false
  }
}));
*/

/* ROUTES */

// Auth
/*var authRouter = express.Router();
require('./routes/routesAuth.js')(authRouter);
app.use('/', authRouter);*/

// Public
var publicRouter = express.Router();
require('./routes/routesPublic.js')(publicRouter);
app.use('/', publicRouter);

// 404 (always keep last!)
app.use(function(req,res) {
  res.render('404', {title:"Page Not Found 404"}, function(err, html) {
    if (err) { console.log(err); }
    res.send(html);
  });
})


// Start the server.
server = app.listen(port, function() {
  console.log("Server Start: " + port);
});