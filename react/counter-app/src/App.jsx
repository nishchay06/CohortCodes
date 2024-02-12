import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [doneTodos, setDoneTodos] = useState([])

  function onClickHandler() {
    const title = document.getElementById("iptitle").value
    const desc = document.getElementById("ipdesc").value
    if (title && desc) {
      setTodos([
        ...todos,
        {
          title: title,
          description: desc,
          completed: false,
          id: new Date().getTime(),
        },
      ])
      document.getElementById("iptitle").value = ""
      document.getElementById("ipdesc").value = ""
    } else {
      alert("Title and Description is Required")
    }
  }

  function markAsDoneHandler(id) {
    const todo = todos.find((todo) => todo.id === id)
    setDoneTodos([...doneTodos, todo])
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  function editHandler(id) {
    const todo = todos.find((todo) => todo.id === id)
    document.getElementById("iptitle").value = todo.title
    document.getElementById("ipdesc").value = todo.description
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div>
      <div>
        <input type='text' name='title' id='iptitle' placeholder='Title' />
      </div>
      <div>
        <input type='text' name='title' id='ipdesc' placeholder='Description' />
      </div>
      <div>
        <button onClick={onClickHandler}>Add a todo</button>
      </div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          markAsDoneHandler={() => markAsDoneHandler(todo.id)}
          editHandler={() => editHandler(todo.id)}
        />
      ))}
      <h1>Done</h1>
      {doneTodos.map((todo) => (
        <DoneTodo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <button onClick={props.editHandler}>Edit</button>
      <button onClick={props.markAsDoneHandler}>Mark as Done</button>
    </div>
  )
}

function DoneTodo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
