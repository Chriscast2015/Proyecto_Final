// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();

    const logout = () => {
        // 1) Eliminar el token de Local Storage
        localStorage.removeItem('token');
        // 2) Redirigir al login
        nav('/login', { replace: true });
    };

    return (
        <header style={headerStyle}>
            <button onClick={logout} style={btnStyle}>
                Cerrar sesión
            </button>
        </header>
    );
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
    background: '#f8f9fa',
    borderBottom: '1px solid #ddd'
};

const btnStyle = {
    background: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer'
};