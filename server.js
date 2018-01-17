var express = require('express');
var app = express();

//passport and express-session for handling authentication
var passport = require('passport')
var session = require('express-session')
//body-parser to extract body of request & expose in JSON format
var bodyParser = require('body-parser')

//for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport 

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true}));

app.use(passport.initialize());

app.use(passport.session());


//dot-env module to handle environment variables 

var env = require('dotenv').load();

//Models 
var models = require("./models");

//Sync Database
//importing the models, then calling the sequelize sync function
models.sequelize.sync().then(function() {
	console.log("All Good. Database looks fine")
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update")
});


app.get('/', function(req, res) {
	res.send("Welcome to Passport with Sequelize");
});

app.listen(3000, function(err) {
	if (!err) 
		console.log("Site is live");
	else console.log(err)
});