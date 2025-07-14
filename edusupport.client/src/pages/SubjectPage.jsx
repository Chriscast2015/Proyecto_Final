import React from 'react';
import { useParams } from 'react-router-dom';

const titles = {
    'filosofia': 'Filosof�a',
    'historia': 'Historia',
    'ingles': 'Ingl�s',
    'ciencias-naturales': 'Ciencias Naturales'
};

export default function SubjectPage() {
    const { subject } = useParams();
    return (
        <div style={{ padding: '2rem' }}>
            <h1>{titles[subject]}</h1>
            <p>Contenido de {titles[subject]} en construcci�n.</p>
        </div>
    );
}