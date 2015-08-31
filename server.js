var express            = require('express'),
    server             = express(),
    ejs                = require('ejs'),
    expressLayouts     = require('express-ejs-layouts'),
    paperController    = require('./controllers/paper-london.js'),
    parsonsController  = require('./controllers/parsons.js'),
    morgan             = require('morgan');

var PORT = process.env.PORT || 3000;

// MORGAN ERROR DETECTION
server.use(morgan('short'));

// VIEWS + LAYOUTS
server.set('views', './views');
server.set('view engine', 'ejs');
server.use(expressLayouts);

// STATIC FILES
server.use(express.static("./public"));

// CONTROLLERS
server.use('/paper-london', paperController);
server.use('/parsons', parsonsController);

// LANDING PAGE
server.get('/', function(req, res) {
  res.render('home.ejs', {
      mainPage: true
    });
});

server.listen(PORT, function() {
  console.log("Server up and running");
});
