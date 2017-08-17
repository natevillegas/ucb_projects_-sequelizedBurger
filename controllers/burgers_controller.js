var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.Burger.findAll().then(function(data){
    res.render("index.handlebars", {burger: data});
  })
});

router.post("/", function(req, res) {
  burger.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;
  burger.Burger.update({
    devoured: true
  },
  {where: {
    id: burgerID
  }
  }).then(function(data){
    res.redirect("/burgers");
  });
});
// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.deleteOne(condition, function() {
//     res.redirect("/");
//   });
// });
// Export routes for server.js to use.
module.exports = router;