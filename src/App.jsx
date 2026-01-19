import { Routes, Route, BrowserRouter } from 'react-router';
import ProtectedRoute from "./components/ProtectedRoute";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobList from "./pages/Jobs/JobListPage";
import JobDetailsPage from "./pages/Jobs/JobDetailsPage";
import JobApplySuccessPage from "./pages/Jobs/JobApplySuccessPage";
import LocationAssign from './pages/Loc/LocationAssign';
import ReportPage from './pages/Report';
import SettingsPage from './pages/Settings';  


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
            <Route path=":job_id" element={<JobDetailsPage />}></Route>
            <Route path=":job_id/Sucess" element={<JobApplySuccessPage />}></Route>
          </Route>
          <Route path="/locationlist" element={<LocationAssign />}></Route>
          <Route path="/reports" element={<ReportPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default MyApp;