import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Subjects from './pages/Subjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/stud" element={<Students />} />
        <Route path="/sub" element={<Subjects />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
