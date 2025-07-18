import React, { useEffect, useState } from 'react';
//import jwt_decode from 'jwt-decode/build/jwt-decode.esm.js';
//import jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const data = jwtDecode(token);
            setUser({
                id: data.sub,
                email: data.email,
                firstName: data.Nombre,
                lastName: data.Apellido
            });
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
}