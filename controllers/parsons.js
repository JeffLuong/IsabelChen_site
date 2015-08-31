var express = require('express'),
    router  = express.Router();

console.log("parsons.js is loaded...");

// PARSONS AW 10
router.get('/aw10', function(req, res) {
  res.render('parsons/aw10', {
    mainPage: false
  });
});

// PARSONS SS 10
router.get('/ss10', function(req, res) {
  res.render('parsons/ss10', {
    mainPage: false
  });
});

module.exports = router;
