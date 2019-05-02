const express = require("express");
const app = express();

const path = require("./util/path");

// view engine
// app.set("view engine", "hbs");

// routes
app.use(express.static(path.public)); //Static

// app.get("/", (req, res) => {
//   res.render("index");
// });
// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
