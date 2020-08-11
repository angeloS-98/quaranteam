var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/registration", function (req, res, next) {
  res.render("layout", {title: 'Ok'});
});

module.exports = router;
