var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {
	app.get('/signin', authController.signin);

	app.post('/signin', passport.authenticate('local-signup', {
			successRedirect: '/dashboard',

			failureRedirect: '/signup'
		}
	));
}