import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [id, setId] = useState(1)

  function clickHandler(buttonId) {
    setId(buttonId)
  }
  return (
    <>
      <Button id={1} onClick={clickHandler} />
      <Button id={2} onClick={clickHandler} />
      <Button id={3} onClick={clickHandler} />
      <Button id={4} onClick={clickHandler} />
      <Button id={5} onClick={clickHandler} />
      <GetTodo id={id} />
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
  }, [id])
  return (
    <>
      <Todo title={todo.title} description={todo.description} />
    </>
  )
}

function Button({ id, onClick }) {
  return (
    <button style={{ margin: 5 }} onClick={() => onClick(id)}>
      {id}
    </button>
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
