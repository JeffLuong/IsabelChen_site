const express            = require('express');
const server             = express();
const expressLayouts     = require('express-ejs-layouts');
const paperController    = require('./controllers/paper-london.js');
const parsonsController  = require('./controllers/parsons.js');
const paintingController = require('./controllers/painting.js');
const morgan             = require('morgan');

const PORT = process.env.PORT || 3000;

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
server.use('/painting', paintingController);

// LANDING PAGE
server.get('/', function(req, res) {
  res.render('home.ejs', {
      mainPage: true
    });
});

server.listen(PORT, function() {
  console.log("Server up and running");
});
