// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================

var path = require("path");
var db = require("../models");


// // Routes
// // =============================================================
module.exports = function(app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // root redirects to login.  
//   app.get("/", function(req, res) {
//     //res.redirect(path.join(__dirname, "../public/login.html"));
//   });


//   // index route loads view.html
//   app.get("/login", function(req, res) {
//     //res.sendFile(path.join(__dirname, "../public/login.html"));

//   });

//   // index route loads view.html
//   app.get("/student", function(req, res) {
//     //res.sendFile(path.join(__dirname, "../public/student.html"));
//   });


  // cms route loads cms.html
  app.get("/admin", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/admin.html"));
    db.Students.findAll({

    }).then(function(result) {
      // response.json(result);
      var hbsObject = { 
        Students: result
      };
      // res.json(hbsObject);
      res.render("admin", hbsObject);
    });
    
  });

};











