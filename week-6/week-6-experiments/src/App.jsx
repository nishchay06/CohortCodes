import { useEffect, useState } from "react"
import "./App.css"
function App() {
  const [todos, setTodos] = useState([])
  const path = "https://sum-server.100xdevs.com/todos"

  function getData(path) {
    fetch(path).then((res) => {
      res
        .json()
        .then((newTodos) => {
          setTodos(newTodos.todos)
        })
        .catch((err) => {
          console.log(err)
          setTodos([])
        })
    })
  }

  useEffect(() => {
    getData(path)
    // setInterval(() => getData(path), 3000)
  }, [])
  return (
    <>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}
export default App
