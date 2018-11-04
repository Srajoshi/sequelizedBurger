// Import the model (burger.js) to use its database functions.
var express = require("express");
var router = express.Router();
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.


module.exports = function (app) {

  router.get("/", function (req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.burger.findAll()
      .then(function (burgerData) {
        console.log(burgerData);
        res.json(burgerData)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  });

  router.post("/api/burger", function (req, res) {
    // Add sequelize code for creating a post using req.body,

    db.burger.create({
        name: req.body.name,
        devoured: req.body.devoured

      }).then(function (Data) {
        console.log(Data);
        res.json(Data)
      })
      .catch(function (err) {

        console.log(err);
        res.json(err);

      })
    // then return the result using res.json
  });


  router.put("/api/burgers/:id", function (req, res) {
    const updateBurger = {
      name: req.body.name,
      devoured: req.body.devoured
    }
    db.burger.update(updateBurger, {
        where: {
          id: req.body.id
        }
      })
      .then(function (data) {
        console.log(data);
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err)
      });


  });
};