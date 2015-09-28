var express = require('express');
var router = express.Router();

/* POST lobby page. */
router.post('/', function(req, res, next) {
  res.render('lobby', { title: 'Lobby', name: req.body.loginName});
});

module.exports = router;
