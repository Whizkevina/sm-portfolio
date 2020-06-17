var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Favour Duruji-Moses' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Form' });
});

router.get('/beyond-the-hurt', function (req, res, next) {
	/* body... */
	res.render('beyond-the-hurt', { title: 'Beyond the Hurt'})
})

module.exports = router;
