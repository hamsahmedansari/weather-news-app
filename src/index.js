const express = require("express");
const hbs = require("hbs");
const app = express();

const path = require("./util/path");

// view engine
app.set("views", path.template + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(path.template + "/partials");
// routes
app.use(express.static(path.public)); //Static

app.get("/", (req, res) => {
  res.render("index");
});
// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
