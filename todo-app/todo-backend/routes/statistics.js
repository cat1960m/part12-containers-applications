const express = require("express");
const { getAsync } = require("../redis");
const router = express.Router();

/* GET todos count. */
router.get("/", async (_, res) => {
  const count = await getAsync("added");
  res.send({ added_todos: count });
});

module.exports = router;
