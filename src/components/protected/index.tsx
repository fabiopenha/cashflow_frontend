import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { Outlet } from "react-router-dom";

export const Protected = () => {

    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>;
}