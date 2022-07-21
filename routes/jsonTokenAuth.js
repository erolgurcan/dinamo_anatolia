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

    const user = client.query(
      "select * from users where  user_email = " + "'" + email + "';"
    );

    console.log(user);
    
    if (user.rows.length > 0) {
      console.log(user.rows.length);
      res.status(401).send("User already exists");
      return;
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const cryptedPassword = await bcrypt.hash(password, salt);

    client.query(
      "INSERT INTO users(user_name, user_email, user_password) values($1, $2, $3)",
      [name, email, cryptedPassword]
    );
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
