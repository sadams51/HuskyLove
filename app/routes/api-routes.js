// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================

var path = require("path");
var db = require("../models");
var Sequelize = require('sequelize');


// // Routes
// // =============================================================
module.exports = function(app) {

  //student get and post routes
  app.get("/student/get/:id", function(req, res) {
    db.Dogs.findOne({
      where:  {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

//student get and post routes

  app.get("/student/puppy1/:geno", function(req, res) {
    db.Dogs.findOne({
      where:  Sequelize.where(
        Sequelize.cast(Sequelize.col('genoType'), 'BINARY'), {$like: req.params.geno})
    }).then(function(results) {
      res.json(results);
    });
  });

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


  // route loads the add students page, where teachers will enter a new student into the student table
  app.get("/add", function(req, res) {
    res.render("admin_add");
  });








