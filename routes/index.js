var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var count = 1;
router.get('/module1',function(req,res){
    res.render('module1',{title:'module1',count:count++});
    console.log('~~~~~~~~~~~~~~~~~~:'+count);
});

module.exports = router;
