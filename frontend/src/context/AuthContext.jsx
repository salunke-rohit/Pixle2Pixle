import axios from 'axios'
import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import httpStatus from "http-status";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        // ...
    };

    const handleLogin = async (username, password) => {
        // ...
        router("/");   // or router("/home")
    };

    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};