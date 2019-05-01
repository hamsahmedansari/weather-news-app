const express = require("express");
const app = express();

const path = require("./util/path");

// routes
app.use(express.static(path.public)); //Static


// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
