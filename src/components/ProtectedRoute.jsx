import { createContext, useContext, useReducer } from 'react';
import { Navigate, Outlet } from "react-router";
import { useGlobalState } from "../context/global.context";
import Layout from "./Layout";

function ProtectedRoute(props) {
    const { state } = useGlobalState();
    if (state.userDetails.isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <Layout>{props.children}</Layout>
    )
}

export default ProtectedRoute;