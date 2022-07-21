const router = require("express").Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(
      "select * from users where  user_email = " + "'" + email + "';"
    );
    client.query(
      "select * from users where  user_email = " + "'" + email + "';",
      (err, response) => {
        res.json(response.rows);
      }
    );

    // client.query("select * from users where  user_email = " + "'" + email + "';" ,  (err, response) => {
    //     res.json(response.rows);
    //   });
  } catch (error) {}
});

module.exports = router;
