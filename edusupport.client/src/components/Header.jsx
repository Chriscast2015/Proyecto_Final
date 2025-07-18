// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout(); // Usa la funci�n logout del AuthProvider
        navigate('/login', { replace: true });
    };

    // Estilos en l�nea
    const headerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem',
        background: '#f8f9fa',
        borderBottom: '1px solid #ddd',
    };

    const btnStyle = {
        background: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };
    console.log("Usuario actual:", user);
    return (
        <header style={headerStyle}>
            {user && ( // Solo muestra el bot�n si el usuario est� autenticado
                <button
                    onClick={() => {
                        const audio = new Audio('/Sonidos/click.mp3');
                        audio.play().catch(error => {
                            console.error("No se pudo reproducir el sonido:", error);
                        });
                        // Llama a la funci�n original handleLogout despu�s de reproducir el sonido
                        handleLogout();
                    }}
                    style={btnStyle}
                    onMouseOver={(e) => e.target.style.background = '#c82333'}
                    onMouseOut={(e) => e.target.style.background = '#dc3545'}
                >
                    Cerrar sesi�n
                </button> >
            )}
        </header>
    );
}