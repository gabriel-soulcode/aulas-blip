import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function login(credentials) {
        const response = await axios.post("http://localhost:8080/auth", credentials);
        const { token } = response.data;
        localStorage.setItem("token", token);
        const decode = jwtDecode(token);
        setAuthenticatedUser(decode);
    }

    function logout() {
        localStorage.clear();
        setAuthenticatedUser(null);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!!token) {
            const decode = jwtDecode(token);
            setAuthenticatedUser(decode);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
