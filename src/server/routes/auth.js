var express = require('express');
var uuid = require('node-uuid');
var jwt  = require('jsonwebtoken');
var router = express.Router();

var config = require('../config')();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
	console.log(req.body);
	var userData = req.body;
	db.User.findAll({
	  where: {
	    email: userData.email,
	    password: userData.password
	  }
	}).then(function(user) {
		console.log(user)
		if(user.length == 0){
			res.json({error:"Error de autenticacion, el usuario y password son incorrectos"});
		}else{

			var token = jwt.sign(user[0].dataValues, config.secret_key, {
	          expiresInMinutes: 1440 // expires in 24 hours
	        });

			res.json({
	          success: true,
	          token: token
	        });		

		}
	}).catch(function(error) {
  		res.json(error);
  	});;
});	

router.post('/singup',function(req,res, next){
	var userData = req.body;
	db.User.create({email:userData.email,name:userData.name,password:userData.password,role:userData.role})
	.then(function(user){

		var token = jwt.sign(user, config.secret_key, {
          expiresInMinutes: 1440 // expires in 24 hours
        });

		res.json({
          success: true,
          token: token
        });

	}).catch(function(error) {
  		res.json(error);
  	});
});

router.post('/test', function(request, response){
  console.log(request.body.MyKey);
  console.log(request.body);      // your JSON
  response.json(request.body);    // echo the result back
});

module.exports = router;