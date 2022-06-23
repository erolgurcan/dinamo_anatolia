const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());

//DB Settings

if (process.env.NODE_ENV === "production ") {
  app.use(express.static(path.join(__dirname, "build")));
  const { Client } = require("pg");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  client.connect();
}

app.use(express.static(path.join(__dirname, "build")));

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

app.get("/get_event", (req, res) => {
    try {
      client.query("select * from events", (err, response) => {
        res.json(response.rows);
      });
    } catch (error) {
      console.log(error.message);
    }
  });

