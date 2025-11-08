const express = require("express");
const { Todo } = require("../mongo");
const { setAsync, getAsync } = require("../redis");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
  let oldCount = await getAsync("added");
  if (oldCount === null) {
    const all = await Todo.find({});
    oldCount = all.length;
  } else {
    oldCount = parseInt(oldCount);
  }
  await setAsync("added", oldCount + 1);
  console.log("-----all todos count========", oldCount + 1, oldCount);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  console.log("delete -------7777--9999---hhh");
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  // res.sendStatus(405); // Implement this
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const body = req.body;
  const data = req.todo;
  data.text = body.text;
  data.done = body.done;
  console.log("new data", data);
  await data.save();
  res.sendStatus(200);
  //res.sendStatus(405); // Implement this
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
