const express = require("express");
const bodyParser = require("body-parser"); // body-parser import
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // form data ke liye

// GET request
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// POST request
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);  // String -> Number
  var num2 = Number(req.body.num2);  // String -> Number

  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);  // String -> Number
  var height = parseFloat(req.body.height);  // String -> Number

  var bmi =weight/(height*height) ;
  res.send("The result of the calculator BMI is: " +bmi);
});

// Server start
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
