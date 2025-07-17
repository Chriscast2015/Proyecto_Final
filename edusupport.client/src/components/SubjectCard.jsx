import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubjectCard.css';

export default function SubjectCard({ title, to, icon, description, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) onClick();     // 🔊 Reproduce el sonido
        navigate(to);               // 🔗 Navega a la página
    };

    return (
        <div className="subject-card" onClick={handleClick} role="button" tabIndex={0}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
