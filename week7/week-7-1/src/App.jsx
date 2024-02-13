import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Landing } from "./components/Landing"
import { Dashboard } from "./components/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
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
