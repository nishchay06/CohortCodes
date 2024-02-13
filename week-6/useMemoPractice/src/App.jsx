import { useState, useMemo } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [inputVal, setInputVal] = useState(0)

  let sum = useMemo(() => {
    return ((inputVal)*(inputVal+1))/2
  }, [inputVal])

  function inputHandler(m) {
    setInputVal(parseInt(m.target.value))
  }
  return (
    <>
      <input onChange={inputHandler} />
      <div>Sum is {sum}</div>
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </>
  )
}

export default App
