import React, { Suspense, useContext, useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { CountContext } from "./context"
const Landing = React.lazy(() => import("./components/Landing"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path='/'
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <CountContext.Provider value={{count,setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
    </>
  )
}

function CountRenderer() {
  const {count, setCount} = useContext(CountContext)
  return <div>{count}</div>
}

function Buttons() {
  const {count, setCount} = useContext(CountContext)
  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard")
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/")
        }}
      >
        Landing page
      </button>
    </div>
  )
}

export default App
