var express = require('express');
var router = express.Router();

/* GET ranking page. */
router.get('/ranking', function(req, res, next) {
  res.render('ranking', { title: 'Scoop', viewName: 'ranking'});
});

router.get('/index/:id', function(req, res, next) {
    res.render('index', {output: req.params.id});
});

router.post('/index/submit', function(req, res, next) {
    var id = req.body.nameID;
    res.redirect('/index/' + id);
});

module.exports = router;
