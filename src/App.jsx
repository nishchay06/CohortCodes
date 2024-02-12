import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
  //     setTodos(response.data.todos)
  //   })
  // }, [])
  return (
    <>
      {/* {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })} */}
      <GetTodo id={5} />
    </>
  )
}

function GetTodo({ id }) {
  const [todo, setTodo] = useState({})
  useEffect(() => {
    const path = "https://sum-server.100xdevs.com/todo?id=" + id
    axios.get(path).then((response) => {
      setTodo(response.data.todo)
    })
  }, [])
  return (
    <>
      <Todo title={todo.title} description={todo.description} />
    </>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  )
}

export default App
