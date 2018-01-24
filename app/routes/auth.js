
var models = require("../../app/models");

var authController = require('../controllers/authcontroller.js');


module.exports = function(app, passport) {

	app.get('/admin',authController.admin);

    app.get('/admin_add', authController.admin_add);

	app.get('/student', isLoggedIn, isAdmin, authController.student);
	app.get('/admin', isLoggedIn, authController.admin);
	app.get('/admin_add', isLoggedIn, authController.admin_add);	

	app.get('/login', authController.login);

	app.post('/login', passport.authenticate('local-login', {

			successRedirect: '/student',
			failureRedirect: '/login'
		}));

	app.post('/admin_add', passport.authenticate('local-admin_add', {
        successRedirect: '/admin_add',
        failureRedirect: '/admin'
		}));	

//if you run the app & try to visit the dashboard & you aren't logged in, you will be 
//redirected to the sign-in page 

// 	app.get('/student', isLoggedIn, authController.student);

	// app.get('/logout', authController.logout);

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/student');
	}

	function isAdmin(req, res, next) {
		console.log(req.user);
		if (req.user.student_Email === "huskey_admin@bvnw.edu")  {
		res.redirect('/admin');
		} else {
		next();
		}
	}

}