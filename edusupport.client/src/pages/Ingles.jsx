import React from 'react';

export default function Ingles() {
    const modules = [
        {
            title: 'Módulo 1: Vocabulario Básico',
            description: 'Palabras esenciales para la comunicación',
            duration: '1:05',
            audioSrc: '/Sonidos/ingles1.mp3',
            transcript: 'Aprenderás saludos, números, colores y frases comunes para iniciar conversaciones...'
        },
        {
            title: 'Módulo 2: Gramática Fundamental',
            description: 'Estructura del idioma inglés',
            duration: '0:58',
            audioSrc: '/Sonidos/ingles2.mp3',
            transcript: 'Estudiaremos tiempos verbales, pronombres, preposiciones y cómo formar oraciones correctamente...'
        },
        {
            title: 'Módulo 3: Comprensión Auditiva',
            description: 'Mejora tu habilidad para entender el inglés hablado',
            duration: '1:10',
            audioSrc: '/Sonidos/ingles3.mp3',
            transcript: 'Escucharás diálogos reales, conversaciones cotidianas y ejercicios de pronunciación...'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Inglés</h1>
            <div style={styles.grid}>
                {modules.map((mod, index) => (
                    <div key={index} style={styles.card}>
                        <h2>{mod.title}</h2>
                        <p>{mod.description}</p>
                        <p><strong>Duración:</strong> {mod.duration}</p>
                        <audio controls style={styles.audio}>
                            <source src={mod.audioSrc} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        <div style={styles.transcript}>
                            <h3>Transcripción</h3>
                            <p>{mod.transcript}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#2c3e50',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    audio: {
        width: '100%',
        marginTop: '1rem',
    },
    transcript: {
        marginTop: '1rem',
        backgroundColor: '#ecf0f1',
        padding: '1rem',
        borderLeft: '4px solid #2980b9',
        borderRadius: '5px',
    }
};