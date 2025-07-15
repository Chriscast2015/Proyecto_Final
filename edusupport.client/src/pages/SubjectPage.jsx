import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSound from '../hooks/useSound'; // Asegúrate que la ruta sea correcta

const titles = {
    'filosofia': 'Filosofía',
    'historia': 'Historia',
    'ingles': 'Inglés',
    'ciencias-naturales': 'Ciencias Naturales'
};

export default function SubjectPage() {
    const { subject } = useParams();
    const title = titles[subject] || 'Materia desconocida';

    // 🔊 Reproducir sonido al cargar la página
    const playClickSound = useSound('/Sonidos/click.mp3');

    useEffect(() => {
        playClickSound();
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{title}</h1>
            <p>Contenido de {title} en construcción.</p>
        </div>
    );
}