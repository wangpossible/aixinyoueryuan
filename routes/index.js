var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '双沟镇爱心幼儿园',active:'active' });
});

module.exports = router;
