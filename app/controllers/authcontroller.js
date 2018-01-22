var exports = module.exports = {}

exports.login = function(req, res) {
	res.render('login');
}

exports.student = function(req, res) {
	res.render('student');
}	

// exports.logout = function(req, res) {
// 	req.session.destroy(function(err) {
// 		res.redirect('/');
// 	});
// }

