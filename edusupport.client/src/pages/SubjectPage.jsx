import React from 'react';
import { useParams } from 'react-router-dom';

const titles = {
    'filosofia': 'Filosofía',
    'historia': 'Historia',
    'ingles': 'Inglés',
    'ciencias-naturales': 'Ciencias Naturales'
};

export default function SubjectPage() {
    const { subject } = useParams();
    return (
        <div style={{ padding: '2rem' }}>
            <h1>{titles[subject]}</h1>
            <p>Contenido de {titles[subject]} en construcción.</p>
        </div>
    );
}