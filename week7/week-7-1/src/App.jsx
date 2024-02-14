import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
const Landing = React.lazy(() => import("./components/Landing"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))

function App() {
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
