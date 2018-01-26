var models = require("../../app/models");
var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

	app.get('/admin', isLoggedIn, authController.admin);	

	app.get('/student', isLoggedIn, exportUser, isAdmin, authController.student);

	app.get('/student/add', isLoggedInAdd, authController.admin);	

	app.get('/admin_add', isLoggedIn, authController.admin_add);	

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

	function isLoggedInAdd(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/student/add');
	}

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/student');
	}

	function isAdmin(req, res, next) {
		if (req.user.student_Email === "husky_admin@bvnw.edu")  {
		res.redirect('/admin');
		} else {
		next();
		}
	}
	
	function exportUser(req, res, next) {
		if (req.isAuthenticated())
		newEmail = req.user.student_Email;
		exports.newEmail = newEmail;
		next();
	}

}


