import React from 'react';

export default function CienciasNaturales() {
    const modules = [
        {
            title: 'Módulo 1: Fundamentos',
            description: 'Conceptos básicos introductorios',
            duration: '0:48',
            audioSrc: '/Sonidos/fundamentos.mp3',
            transcript: 'Describe las funciones básicas del cuerpo humano: cerebro, corazón, pulmones, piel y músculos, destacando su importancia.'
        },
        {
            title: 'Módulo 2: Nivel Intermedio',
            description: 'Profundización en conceptos clave',
            duration: '0:50',
            audioSrc: '/Sonidos/intermedio.mp3',
            transcript: 'Explica la importancia de los ecosistemas, la biodiversidad y cómo los seres humanos interactúan con el medio ambiente.'
        },
        {
            title: 'Módulo 3: Nivel Avanzado',
            description: 'Aplicaciones prácticas y casos de estudio',
            duration: '0:52',
            audioSrc: '/Sonidos/avanzado.mp3',
            transcript: 'Enfatiza el papel vital del agua y la energía solar en los seres vivos, promoviendo la conciencia ambiental.'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Ciencias Naturales</h1>
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
        background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
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
        borderLeft: '4px solid #3ec9a7',
        borderRadius: '5px',
        color: '#dcdcdc',
    },
};
