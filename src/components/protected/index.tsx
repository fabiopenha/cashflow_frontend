import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Protected = () => {

    const loggedIn = localStorage.getItem('page_local');

    return loggedIn ? <Outlet /> : <Navigate to='/login'/>;
}