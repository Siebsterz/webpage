var express = require('express');
var router = express.Router();

/* GET ranking page. */
router.get('/ranking', function(req, res, next) {
  res.render('ranking', {title: 'Scoop', viewName: 'ranking', success: req.session.success, error: req.session.errors});
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
    //check vilidity
    req.check('playerName', 'invalid name: min. length is 2 characters').isLength({min: 2});

    var error = req.validationErrors();
        if(error) {
            req.session.errors = error;
            req.session.success = false;
        }
        else {
            req.session.success = true;
        }
        res.redirect('/ranking')
});

module.exports = router;
