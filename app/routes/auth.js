
var models = require("../../app/models");

var authController = require('../controllers/authcontroller.js');



module.exports = function(app, passport) {

	app.get('/student', isLoggedIn, authController.student);

	app.get('/login', authController.login);

	app.post('/login', passport.authenticate('local-login', {
			successRedirect: '/student',

			failureRedirect: '/login'
		}
	));	






//if you run the app & try to visit the dashboard & you aren't logged in, you will be 
//redirected to the sign-in page 


	// app.get('/logout', authController.logout);



	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();

		res.redirect('/student');
	}


}