import { Navigate, Outlet } from "react-router";
import { useGlobalState } from "../context/global.context";
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

export default ProtectedRoute;