import React from 'react';

export default function Historia() {
    const modules = [
        {
            title: 'Módulo 1: Edad Antigua',
            description: 'Civilizaciones clásicas y sus legados',
            duration: '1:10',
            audioSrc: '/Sonidos/historia1.mp3',
            transcript: 'Explora los primeros habitantes del Ecuador, como los Valdivia, Quitus y Cañaris, y cómo los incas influyeron en la región antes de la llegada de los españoles.'
        },
        {
            title: 'Módulo 2: Edad Media',
            description: 'Feudalismo, religión y cultura medieval',
            duration: '1:04',
            audioSrc: '/Sonidos/historia2.mp3',
            transcript: 'Relata la llegada de los españoles, la colonización y la lucha por la libertad que culminó en la Batalla de Pichincha (1822), dando paso a la independencia.'
        },
        {
            title: 'Módulo 3: Edad Moderna y Contemporánea',
            description: 'Revoluciones, guerras y globalización',
            duration: '1:02',
            audioSrc: '/Sonidos/historia3.mp3',
            transcript: 'Repasa la formación del Ecuador como país independiente, sus regiones geográficas, cultura y logros históricos hasta la actualidad.'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Historia</h1>
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
        borderLeft: '4px solid #e67e22', // tono naranja para representar historia/cultura
        borderRadius: '5px',
        color: '#dcdcdc',
    }
};
