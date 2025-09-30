const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Default items
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  // Pass day + items to EJS
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (item && item.trim() !== "") {
    items.push(item); // Add new item
  }
  res.redirect("/"); // Reload page to show updated list
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
