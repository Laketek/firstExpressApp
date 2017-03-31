var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/meh', function(req, res, next) {
  res.render('meh');
});

router.get('/Signin', function(req, res, next) {
  res.render('signin');
});

module.exports = router;
