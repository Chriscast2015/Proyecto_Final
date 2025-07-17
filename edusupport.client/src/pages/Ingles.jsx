import React from 'react';

export default function Ingles() {
    const modules = [
        {
            title: 'Módulo 1: Vocabulario Básico',
            description: 'Palabras esenciales para la comunicación',
            duration: '1:05',
            audioSrc: '/Sonidos/ingles1.mp3',
            transcript: 'Enseña saludos básicos y presentaciones en inglés ("Hello", "How are you?", "My name is...").'
        },
        {
            title: 'Módulo 2: Gramática Fundamental',
            description: 'Estructura del idioma inglés',
            duration: '0:58',
            audioSrc: '/Sonidos/ingles2.mp3',
            transcript: 'Presenta vocabulario de colores y su uso en oraciones simples ("The sky is blue").'
        },
        {
            title: 'Módulo 3: Comprensión Auditiva',
            description: 'Mejora tu habilidad para entender el inglés hablado',
            duration: '1:10',
            audioSrc: '/Sonidos/ingles3.mp3',
            transcript: 'Cubre frases para describir rutinas diarias ("I wake up", "I go to school") y cómo expresar la hora.'
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
        fontFamily: "'Jost', sans-serif",
        background: 'linear-gradient(to bottom, #1c1c2b, #2f2f55, #3e3e66)',
        minHeight: '100vh',
        color: '#f2e8c4',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#f2e8c4',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    card: {
        background: 'rgba(255, 255, 255, 0.08)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
        color: '#f2e8c4',
        backdropFilter: 'blur(4px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    audio: {
        width: '100%',
        marginTop: '1rem',
    },
    transcript: {
        marginTop: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '1rem',
        borderLeft: '4px solid #3498db', // azul suave, color ligado al inglés y comunicación
        borderRadius: '5px',
        color: '#e8f1ff',
    }
};
