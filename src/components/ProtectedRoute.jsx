
import { Navigate, Outlet } from "react-router";
import Layout from "./Layout";
import { useSelector } from "react-redux";

function ProtectedRoute() {
    const { userDetails } = useSelector(state => state.user)
  if (!userDetails.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <Layout><Outlet /></Layout>
    )
}
     
/*return <Layout><Outlet /></Layout>
    if (!userDetails.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
       // <Layout><Outlet /></Layout>
    )*/

       

export default ProtectedRoute;