const zod = require("zod")

// {title : string , desc : string}
const todoData = zod.object({
  title: zod.string(),
  description: zod.string(),
})

// {id : string}
const completedData = zod.object({
  id: zod.string(),
})

module.exports = {
  todoData: todoData,
  completedData: completedData
}
