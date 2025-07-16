import React from 'react';
import SubjectCard from '../components/SubjectCard';
import useSound from '../hooks/useSound'; // Asegúrate de que la ruta sea correcta
import './Dashboard.css';

export default function Dashboard() {
    // 🔊 Hook para reproducir el sonido al hacer clic
    const playClick = useSound('/Sonidos/click.mp3');

    
    const subjects = [
        {
            title: 'Filosofía',
            to: '/subjects/filosofia',
            icon: '🧠',
            description: 'Explora el pensamiento humano',
            onClick: playClick
        },
        {
            title: 'Historia',
            to: '/subjects/historia',
            icon: '🏰',
            description: 'Viaja a través del tiempo',
            onClick: playClick
        },
        {
            title: 'Inglés',
            to: '/subjects/ingles',
            icon: '📚',
            description: 'Domina el idioma global',
            onClick: playClick
        },
        {
            title: 'Ciencias Naturales',
            to: '/subjects/ciencias-naturales',
            icon: '🔬',
            description: 'Descubre la naturaleza',
            onClick: playClick
        }
    ];

    return (
        <div className="dashboard-container">
            <div className="saludo-suave">
                <p>Bienvenido de nuevo 👋</p>
            </div>

            <h1>Panel de Materias</h1>
            <div className="subjects-grid">
                {subjects.map(sub => (
                    <SubjectCard key={sub.to} {...sub} />
                ))}
            </div>
        </div>
    );

}