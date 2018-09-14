var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/store", function (req, res) {
    db.Store.findAll({}).then(function (dbStore) {
      res.json(dbStore);
    });
  });

  // Create a new example
  app.post("/api/game", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // code to select one item from store
  app.get("/api/store/:id", function (req, res) {
    db.Store.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbStore) {
      console.log(dbSore);
      res.json(dbStore);
    });
  });

  // we need to delete item once bought
  // Delete an example by id
  app.delete("/api/store/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};