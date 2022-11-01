var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/profile', function(req, res) {
  res.send('user Profile');
})

module.exports = router;
