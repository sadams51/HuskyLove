var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
	var User = user; 
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
			var User = user; 

			//compares password entered with the bCrypt comparison method 
			//did we store our password with bCrypt
			var isValidPassword = function(userpass, password) {

				return bCrypt.compareSync(password, userpass);
			}

			User.findOne({
				where: {
					email: email
				}
			}).then(function(user) {
				if (!user) {

					return done(null, false, {
						message: "ID does not exist"
					});
				}

				if (!isValidPassword(user.password, password)) {
					return done(null, false, {
						message: "Incorrect password"
					});
				}

				var userInfo = user.get();
				return done(null, userinfo);

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
		done(null, user.id);
	});

	//deserialize user 
	passport.deserializeUser(function(id, done) {

		User.findById(id).then(function(user) {
			if (user) {
				done(null, user.get());
			} else {
					done(user.errors, null);
				}
		});	
	});


}		



