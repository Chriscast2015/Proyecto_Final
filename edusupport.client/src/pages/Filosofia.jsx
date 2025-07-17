import React from 'react';

export default function Filosofia() {
    const modules = [
        {
            title: 'Módulo 1: Introducción a la Filosofía',
            description: 'Explora los orígenes del pensamiento filosófico',
            duration: '1:41',
            audioSrc: '/Sonidos/filosofia1.mp3',
            transcript: 'Introduce el concepto de filosofía como amor al saber, mencionando a pensadores como Sócrates y su enfoque en preguntas fundamentales.'
        },
        {
            title: 'Módulo 2: Ética y Moral',
            description: 'Reflexiona sobre el bien y el mal',
            duration: '1:22',
            audioSrc: '/Sonidos/filosofia2.mp3',
            transcript: 'Analiza cómo el pensamiento crítico ayuda en la toma de decisiones, la ética y el autoconocimiento.'
        },
        {
            title: 'Módulo 3: Filosofía Contemporánea',
            description: 'Ideas modernas y corrientes actuales',
            duration: '1:29',
            audioSrc: '/Sonidos/filosofia3.mp3',
            transcript: 'Motiva a reflexionar sobre preguntas profundas, demostrando que todos pueden filosofar en la vida cotidiana.'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Filosofía</h1>
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
        borderLeft: '4px solid #8e44ad',
        borderRadius: '5px',
        color: '#dcdcdc',
    }
};
