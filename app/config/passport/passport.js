var bCrypt = require('bcrypt-nodejs');

var Students = require("../../models/students.js");

module.exports = function(passport, students) {
	var User = Students; 
	var LocalStrategy = require('passport-local').Strategy;


	passport.use('local-login', new LocalStrategy(

		{
			usernameField: 'student_Email',
			passwordField: 'student_Id',
			passReqToCallback: true
		},




		function(req, student_Email, password, done) {
			console.log("are we here");
			console.log(student_Email);
			var User = Students; 

			//compares password entered with the bCrypt comparison method 
			//did we store our password with bCrypt
			var isValidPassword = function(userpass, password) {

				return bCrypt.compareSync(password, userpass);
			}

			User.findOne({
				where: {
					email: student_Email
				}
			}).then(function(user) {
				if (!user) {

					return done(null, false, {
						message: "ID does not exist"
					});
				}

				if (!isValidPassword(user.student_Id, password)) {
					return done(null, false, {
						message: "Incorrect password"
					});
				}

				var UserInfo = user.get();
				return done(null, UserInfo);

			}).catch(function(err) {
				console.log("Error:", err);

				return done(null, false, {
					message: "Something went wrong with your Login"
				});
			});

		}

	));	







	//serialize 
	passport.serializeUser(function(user, done) {
		done(null, Students.student_Id);
	});

	//deserialize user 
	passport.deserializeUser(function(id, done) {

		User.findById(student_Id).then(function(user) {
			if (user) {
				done(null, user.get());
			} else {
					done(user.errors, null);
				}
		});	
	});


}		



