var express = require('express');
var router = express.Router();

/* GET ranking page. */
router.get('/ranking', function(req, res, next) {
  res.render('ranking', { title: 'Scoop' });
});

module.exports = router;
