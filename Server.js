const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

//DB Settings
const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

app.listen(PORT, () => {
    console.log("Aplication started on port " + PORT);
  });
  
app.get("/test", (req, res) => {
  try {
      client.query("select * from test", (err, response) => {
      res.json(response.rows);
    });
  } catch (error) {
    console.log(error.message);
  }
});

