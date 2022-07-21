const router = require("express").Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");
const { default: userEvent } = require("@testing-library/user-event");
const { response } = require("express");

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
       console.log(response.rows);
      }
    );
   
    if (response.rows.length !== 0 ){
        res.status(401).send("User already exists");
        return;
    };

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const cryptedPassword = await bcrypt.hash(password, salt);

    client.query("INSERT INTO users(user_name, user_email, user_password) values($1, $2, $3)", [name, email, cryptedPassword] )

  } catch (error) {}
});

module.exports = router;
