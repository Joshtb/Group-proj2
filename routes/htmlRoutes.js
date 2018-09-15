var db = require("../models");

var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id

  //the diffrent routes for diffrent screens in the game 
  app.get("/game", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/game.html"));
  });

  app.get("/fight1", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/fights/fight1.html"));
  });

  app.get("/fight2", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/fights/fight2.html"));
  });

  app.get("/fight3", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/fights/fight3.html"));
  });

  app.get("/fight4", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/fights/fight4.html"));
  });

  app.get("/boss", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/fights/bossFight.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("", function (req, res) {
    res.render("404");
  });
};

app.get("/store/:id", function (req, res) {
  db.Example.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbExample) {
    res.render("example", {
      example: dbExample
    });
  });
});