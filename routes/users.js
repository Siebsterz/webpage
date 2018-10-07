var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//subroute
router.get('/details', function(req, res, next) {
  res.send('lmao');
});

module.exports = router;
