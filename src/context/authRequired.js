import React from 'react'
import { useAuth } from './auth'
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
    let auth = useAuth()

    let isLogged = auth.user;

    if (!isLogged) {
        return <Navigate to={"/login"} />;
    }
    return children;


}

export default AuthRequired