var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public/assets"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
var routes = require("./controllers/item_controller.js");
app.use(routes);
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});








// require("dotenv").config();
// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// module.exports = app;