import React from 'react';

export default function Filosofia() {
    const modules = [
        {
            title: 'Módulo 1: Introducción a la Filosofía',
            description: 'Explora los orígenes del pensamiento filosófico',
            duration: '1:41',
            audioSrc: '/Sonidos/filosofia1.mp3',
            transcript: 'Este módulo aborda los primeros filósofos griegos y cómo surgieron las preguntas fundamentales sobre la existencia...'
        },
        {
            title: 'Módulo 2: Ética y Moral',
            description: 'Reflexiona sobre el bien y el mal',
            duration: '1:22',
            audioSrc: '/Sonidos/filosofia2.mp3',
            transcript: 'Aquí se analizan teorías éticas como el utilitarismo, el deber moral y la ética de la virtud...'
        },
        {
            title: 'Módulo 3: Filosofía Contemporánea',
            description: 'Ideas modernas y corrientes actuales',
            duration: '1:29',
            audioSrc: '/Sonidos/filosofia3.mp3',
            transcript: 'Se estudian pensadores como Sartre, Foucault y Habermas, y sus aportes al pensamiento moderno...'
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