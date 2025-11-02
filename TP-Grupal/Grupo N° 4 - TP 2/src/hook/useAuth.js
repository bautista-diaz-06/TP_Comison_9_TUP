import { login } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "../router/HomePage.routes";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
                    const res = await login(credentials);
            const userData = res.find(item => item.email === credentials.email && 
                item.password === credentials.password);

           if(!userData){
            throw new Error("Credenciales invalidas");
           }

            // Guardar usuario en el estado y localStorage
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            
            navigate(HOME);
                    
                } catch (err) {
                    setError(err.message);
                }
            };
            return { user, error, handleLogin };
        };