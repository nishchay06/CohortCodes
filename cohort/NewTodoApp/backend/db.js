const mongoose = require("mongoose")
// mongodb+srv://nishchay:siwalik3431@cluster0.ymaacac.mongodb.net/todos

mongoose.connect(
  "mongodb+srv://nishchay:siwalik3431@cluster0.ymaacac.mongodb.net/todos"
)

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
  todo: todo,
}
