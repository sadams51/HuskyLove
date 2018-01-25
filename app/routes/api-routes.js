// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================

var path = require("path");
var db = require("../models");
var Sequelize = require('sequelize');
var passport = require('passport')


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

  // route loads the add students page, where teachers will enter a new student into the student table
  app.post("/admin_add", function(req, res) {


    db.Students.create({

      student_Id: req.body.student_Id,
      student_Email: req.body.student_Email,
      student_Name: req.body.student_Name,
      student_Hour: req.body.student_Hour,
      student_TeacherName: req.body.student_TeacherName
    }).then(function(result) {
      res.render("admin_add", result);
    });
  });

  // route loads the add students page, where teachers will enter a new student into the student table

  app.delete("/admin_delete/:student_Email", function(req, res) {
    db.Students.destroy({
      where: {
        student_Email: req.params.student_Email
      }
    }).then(function(result) {
      res.render("admin_delete", result);
      // res.json(result);
    });
  });



};











