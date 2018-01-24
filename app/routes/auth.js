
var models = require("../../app/models");

var authController = require('../controllers/authcontroller.js');



module.exports = function(app, passport) {

	app.get('/student', isLoggedIn, authController.student);

	app.get('/login', authController.login);

	app.post('/login', passport.authenticate('student-login', {
			successRedirect: '/student', 
		//=========================================//
			//add to this: 
				//function(req, res) {
					// res.redirect('/students/' + req.user.username);
				//});	
		//==========================================//

			failureRedirect: '/login',
		}
	));	


	// app.get('/logout', authController.logout);




	// app.post('/login', passport.authenticate('admin-login', {
	// 	successRedirect: '/admin',

	// 	failureRedirect: '/login'
	// }
	// ));	
	


//if you run the app & try to visit the dashboard & you aren't logged in, you will be 
//redirected to the sign-in page 






	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();

		res.redirect('/student');
	}


}


