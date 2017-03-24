var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/meh.ejs', function(req, res, next) {
  res.render('meh');
});
module.exports = router;
