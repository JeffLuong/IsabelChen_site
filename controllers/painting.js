var express = require('express'),
    router  = express.Router();

console.log("painting.js is loaded...");

router.get('/index', function(req, res) {
  res.render('painting/index', {
    mainPage: false
  });
});

module.exports = router;
