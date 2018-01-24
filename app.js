var express = require('express');
var app = express();

//passport and express-session for handling authentication
var passport = require('passport')
var session = require('express-session')
//body-parser to extract body of request & expose in JSON format
var bodyParser = require('body-parser')
//dot-env module to handle environment variables 
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

var authController = require('./app/controllers/authcontroller.js');



var routes = require("./app/routes/api-routes.js")(app);


//for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport 

//session secret
app.use(session({ secret: 'husky love', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
//persistent login sessions
app.use(passport.session());

//For Handlebars

app.set('views', './app/views')
app.engine('handlebars', exphbs({

	defaultLayout: 'main',
	layoutsDir: "./app/views/layouts/",
	extname: '.handlebars'


}));
app.set('view engine', 'handlebars');



app.get('/', function(req, res) {
	res.render('login');
});


app.use(express.static('public'));


//Models 
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies 
require('./app/config/passport/passport.js')(passport, models.Students);

//Sync Database
//importing the models, then calling the sequelize sync function
models.sequelize.sync().then(function() {
	console.log("All Good. Database looks fine")
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update")
});



app.listen(3000, function(err) {
	if (!err) 
		console.log("Site is live");
	else console.log(err)
});