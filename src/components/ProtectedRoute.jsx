<<<<<<< HEAD
<<<<<<< HEAD
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

       
=======
=======
>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
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

<<<<<<< HEAD
>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
=======
>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
export default ProtectedRoute;