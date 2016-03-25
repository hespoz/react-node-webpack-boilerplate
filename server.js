var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http'); 
var passport = require('passport');

var routes = require('./src/server/routes/index');
//var users = require('./routes/users');
//var auth = require('./routes/auth');

var config = require('./src/server/config')();
//var db = require('./models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/server/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public'));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/client/public')));

//require('./config/passport')(passport);

app.use('/', routes);
//app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


http.createServer(app).listen(process.env.PORT || config.port, function() {
	console.log(path.join(__dirname, 'public'));
  console.log('\nExpress server listening on port ' + config.port);
});


module.exports = app;