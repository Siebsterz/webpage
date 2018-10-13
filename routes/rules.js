var express = require('express');
var router = express.Router();

/* GET rules page. */
router.get('/rules', function(req, res, next) {
  res.render('rules', { title: 'Scoop', viewName: 'rules'});
});

module.exports = router;
