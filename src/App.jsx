import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <ProtectedRoute/>
      <h1> Candidate hire application 123</h1>
      </div>
    </>
  )
}

export default App;
