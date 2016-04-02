var BearerStrategy = require('passport-http-bearer').Strategy
var jwt  = require('jsonwebtoken');
//var DBReservas = require('../utils/DBReservas.js')();
var config = require('../config')();
var db = require('../models');
var BluebirdPromise = require('bluebird');

// expose this function to our app using module.exports
module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {

        db.User.findAll({where:{
        	id:id
        }}).then(function(user) {
			if(user.length==0){
				console.log(error); 
			}else{
				done(null, user);
			}

		});

    });

	passport.use(
	    new BearerStrategy(
	        function(token, done) {

			    jwt.verify(token, config.secret_key, function(err, decoded) {      
			      if (err) {
					return done(null, false);  
			      } else {
					//Verify if user exists on database. If no exist the token validations fails.
					 db.User.findAll({where:{
					 	id:decoded.id,
					 	email:decoded.email,
					 	role:decoded.role
					 }}).then(function(result){	
					 	if(result.length>0){
					 		return done(null, decoded, { scope: 'all' });
					 	}else{
							return done(null, false); 
					 	}
					 	
					 }).catch(function(error){
					 	return done(null, false);  
					 });

			      }
			    });

	        }
	    )
	);

};