var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Favour Duruji-Moses' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Favour Duruji-Moses - Contact' });
});

module.exports = router;
