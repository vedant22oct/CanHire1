<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, Route, BrowserRouter } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";


import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
=======
import { useState } from 'react';
//import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  // s const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Candidate hire application 123</h1>
    </div>
>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
=======
import { useState } from 'react';
//import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  // s const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Candidate hire application 123</h1>
    </div>
>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
  )
}
// <ProtectedRoute/>
     
export default App;
