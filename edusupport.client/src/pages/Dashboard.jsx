// src/pages/Dashboard.jsx
import React from 'react';
import SubjectCard from '../components/SubjectCard';
import useSound from '../hooks/useSound';
import { useAuth } from '../context/useAuth';      // ① Importa el hook
import './Dashboard.css';
import Chatbot from '../components/Chatbot';

export default function Dashboard() {
    const playClick = useSound('/Sonidos/click.mp3');
    const { user, logout } = useAuth();             // ② Desestructura logout

    const subjects = [
        {
            title: 'Filosofía',
            to: '/pages/filosofia.jsx',
            icon: '🧠',
            description: 'Explora el pensamiento humano',
            onClick: playClick
        },
        {
            title: 'Historia',
            to: '/pages/Historia.jsx',
            icon: '🏰',
            description: 'Viaja a través del tiempo',
            onClick: playClick
        },
        {
            title: 'Inglés',
            to: '/pages/Ingles.jsx',
            icon: '📚',
            description: 'Domina el idioma global',
            onClick: playClick
        },
        {
            title: 'Ciencias Naturales',
            to: '/pages/CienciasNaturales.jsx',
            icon: '🔬',
            description: 'Descubre la naturaleza',
            onClick: playClick
        }
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="saludo-suave">
                    <p>Bienvenido, {user?.firstName || 'Usuario'} 👋</p>
                </div>
                {/* ③ Botón de Cerrar sesión */}
                <button
                    className="logout-btn"
                    onClick={() => {
                        const audio = new Audio('/Sonidos/click.mp3');
                        audio.play().catch(error => {
                            console.error("No se pudo reproducir el sonido:", error);
                        });
                        // Llama a la función original `logout` después de reproducir el sonido
                        logout();
                    }}
                    aria-label="Cerrar sesión"
                >
                    ⬅️ Cerrar sesión
                </button>
            </header>

            <h1>Panel de Materias</h1>
            <div className="subjects-grid">
                {subjects.map(sub => (
                    <SubjectCard key={sub.to} {...sub} />
                ))}
            </div>

            {/* Chatbot flotante */}
            <Chatbot />
        </div>
    );
}