// Require express.
// Connect express to application.
var express = require("express");
var app = express();

// Connect path middleware.
var path = require("path");

// Connect bodyparser middleware.
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connecting to public assets.
app.use("/public", express.static(path.join(__dirname + "/public")));

// Set up HBS.
app.set("view engine", "hbs");

// Farmers Market API
// var apiRouter = require("./public/js/market_api.js")

// Connect to browser.
app.get("/", function(req, res){
  res.render("index", {message: "Handlebars is the best."})
  // res.send("Browser time!");
});

// Index route for markets.
app.get("/markets", function(req,res){
    // console.log(apiRouter.sayHello())
  // Market.findAll().then(function(markets){
    // var results = apiRouter.marketResults(20001)
    res.render("markets/index", {message: "market route"})
  // })
})

// Show route for markets.
app.get("/markets/:id", function(req,res){
  res.render("markets/show", {message: "Info for farmer's market " + req.params.id + "."})
})

// Index route for vendors.
app.get("/vendors", function(req,res){
  // Vendor.findAll().then(function(vendors){
    res.render("vendors/index", {message: "List of vendors."})
  // })
})

// New route for vendors.
app.get("/vendors/new", function(req,res){
  res.render("vendors/new", {message: "Form for new vendor."})
})

// Show route for vendors.
app.get("/vendors/:id", function(req,res){
  res.render("vendors/show", {message: "Info for vendor " + req.params.id + "."})
})

// Edit route for vendors.
app.get("/vendors/:id/edit", function(req,res){
  res.render("vendors/edit", {message: "Edit form for vendor " + req.params.id + "."})
})

// Create new vendor route.
// app.post("/vendors", function(req,res){
//   Vendor.create(req.body).then(function(vendor){
//     res.json(vendor);
//   })
// })



// Port listener.
// app.listen(3000, function(){
//   console.log("Listening on port 3000.");
// });

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
 console.log("Listening on port 3000");
});