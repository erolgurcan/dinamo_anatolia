const router = require("express").Router();
const authorization = require("../middleware/authorization");
const connectionString =  process.env.DATABASE_URL ;
const { Client } = require("pg");

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

router.get("/standingTable", authorization, async (req, res) => {
  try {
    const { league } = req.body;
    const user = await client.query(
      "select * from standing_table where league = " + "'" + league + "'"
    );
    res.json(user.rows);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/leagues", authorization, async (req, res) => {
  try {
    const result = await client.query(
      "select distinct(league) from standing_table "
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
