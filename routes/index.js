var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sightPresent', function(req, res, next) {

  res.render('sightPresent'); 
});

module.exports = router;
