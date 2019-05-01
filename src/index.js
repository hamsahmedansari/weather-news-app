const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("testing");
});

// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
