import React from 'react';
import SubjectCard from '../components/SubjectCard';
import './Dashboard.css';

export default function Dashboard() {
    const subjects = [
        {
            title: 'Filosofía',
            to: '/subjects/filosofia',
            icon: '🧠',
            description: 'Explora el pensamiento humano'
        },
        {
            title: 'Historia',
            to: '/subjects/historia',
            icon: '🏰',
            description: 'Viaja a través del tiempo'
        },
        {
            title: 'Inglés',
            to: '/subjects/ingles',
            icon: '📚',
            description: 'Domina el idioma global'
        },
        {
            title: 'Ciencias Naturales',
            to: '/subjects/ciencias-naturales',
            icon: '🔬',
            description: 'Descubre la naturaleza'
        }
    ];

    return (
        <div className="dashboard-container">
            <h1>Panel de Materias</h1>
            <div className="subjects-grid">
                {subjects.map(sub => (
                    <SubjectCard key={sub.to} {...sub} />
                ))}
            </div>
        </div>
    );
}