
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
  )
}
export default App;
