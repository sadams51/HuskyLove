var passport = require('passport');
var models = require("../../app/models");

var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

	app.get('/login', authController.login);

	app.post('/login', passport.authenticate('local-login', {
			successRedirect: '/',

			failureRedirect: '/login'
		}
	));
}