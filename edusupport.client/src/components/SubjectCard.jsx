import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCard.css';

export default function SubjectCard({ title, to, icon, description }) {
    return (
        <Link to={to} className="subject-card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
}