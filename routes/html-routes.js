var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('GET route on html-routes.');
});
router.post('/', function(req, res){
  res.send('POST route on html-routes.');
});

module.exports = router;
