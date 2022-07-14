const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");
const { Client } = require("pg");
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

if ( process.env.NODE_ENV === "production" ) {

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  
  client.connect();

}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

console.log(process.env.NODE_ENV);

// DB Settings

app.listen(PORT, () => {
  console.log("Aplication started on port " + PORT);
  console
});

// app.get("/test", (req, res) => {
//   try {
//     client.query("select * from test", (err, response) => {
//       res.json(response.rows);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

app.get("/get_event", (req, res) => {
    try {
      client.query("select * from events", (err, response) => {
        res.json(response.rows);
      });
    } catch (error) {
      console.log(error.message);
    }
  });


  
app.get("/get_players", (req, res) => {
  try {
    client.query("select * from players", (err, response) => {
      res.json(response.rows);
    });
  } catch (error) {
    console.log(error.message);
  }
});

