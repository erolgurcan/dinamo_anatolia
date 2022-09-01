const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
  console.log("Aplication started on port " + PORT);
});

