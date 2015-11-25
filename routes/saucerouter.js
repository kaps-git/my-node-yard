var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Sauce Home Page');
  res.render('sauce');
});


router.get('/key/:user', function(req, res, next) {
  var username = req.params.user;
  console.log('User name : ' + username );
  var db = req.db;
  var collection = db.get('saucedata');

  //EXAMPLE CODE : Display Record as JSON on webpage
  collection.findOne({'user' : username}, function(err, doc){
  	//res.send(doc);
  	res.render('sauce', {data : doc});
  });
});

router.get('/keys', function(req, res, next) {
  console.log('Getting all users');
  var db = req.db;
  var collection = db.get('saucedata');

  //EXAMPLE CODE : Display Record as JSON on webpage
  collection.find({}, {}, function(err, doc){
  	res.render('sauce', {data : doc});
  });
});



module.exports = router;