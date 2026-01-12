
import { Routes, Route, BrowserRouter } from 'react-router';
import reactLogo from './assets/react.svg'
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobList from "./pages/Jobs/JobListPage";
import JobDetailsPage from "./pages/Jobs/JobDetailsPage";



import './App.css'

function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
          <Route path="/joblist">
            <Route index element={<JobList />}></Route>
            <Route path=":jobid" element={<JobDetailsPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default MyApp;