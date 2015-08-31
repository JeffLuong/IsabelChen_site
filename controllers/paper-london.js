var express = require('express'),
    router  = express.Router();

console.log("paper-london.js is loaded...");

// PAPER LONDON AW 15
router.get('/aw15', function(req, res) {
  res.render('paper-london/aw15');
});

// PAPER LONDON RESORT 15
router.get('/resort15', function(req, res) {
  res.render('paper-london/resort15');
});

// PAPER LONDON SS 15
router.get('/ss15', function(req, res) {
  res.render('paper-london/ss15');
});

// PAPER LONDON AW 14
router.get('/aw14', function(req, res) {
  res.render('paper-london/aw14');
});

// PAPER LONDON SS 14
router.get('/ss14', function(req, res) {
  res.render('paper-london/ss14');
});

// PAPER LONDON AW 14 PHONE
router.get('/aw14-phone', function(req, res) {
  res.render('paper-london/aw14-phone');
});

// PAPER LONDON AW 15 PHONE
router.get('/aw15-phone', function(req, res) {
  res.render('paper-london/aw15-phone');
});

module.exports = router;
