const express = require("express")
const cors = require("cors")
const { todoData, completedData } = require("./types")
const { todo } = require("./db")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  if (todoData.safeParse({ title, description }).success) {
    // store it in db
    await todo.create({
      title: title,
      description: description,
      completed: false,
    })
    res.status(200).json({
      msg: "Todo successfully created!!!",
    })
  } else {
    res.status(411).json({
      msg: "You sent the wrong inputs!!",
    })
  }
})

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find()
    res.status(200).json({ todos: todos })
  } catch (err) {
    console.error("Error fetching todos:", err)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.put("/completed", async (req, res) => {
  const id = req.body.id
  if (completedData.safeParse({ id }).success) {
    await todo.updateOne({ _id: id }, { $set: { completed: true } });
    res.status(200).json({
      msg: "Todo Completed!!",
    })
  } else {
    res.status(411).json({
      msg: "You sent the wrong inputs!!",
    })
  }
})

app.listen(3000)
