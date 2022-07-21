const router = require("express").Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(email);
  } catch (error) {}
});
