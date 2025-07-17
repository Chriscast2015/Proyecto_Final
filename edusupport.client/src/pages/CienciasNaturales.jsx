import React from 'react';

export default function CienciasNaturales() {
    const modules = [
        {
            title: 'Módulo 1: Fundamentos',
            description: 'Conceptos básicos introductorios',
            duration: '0:48',
            audioSrc: '/Sonidos/fundamentos.mp3',
            transcript: 'En este módulo exploramos los conceptos básicos de la biología, incluyendo células, organismos y ecosistemas...'
        },
        {
            title: 'Módulo 2: Nivel Intermedio',
            description: 'Profundización en conceptos clave',
            duration: '0:50',
            audioSrc: '/Sonidos/intermedio.mp3',
            transcript: 'Aquí analizamos la fotosíntesis, la cadena alimenticia y el ciclo del agua en detalle...'
        },
        {
            title: 'Módulo 3: Nivel Avanzado',
            description: 'Aplicaciones prácticas y casos de estudio',
            duration: '0:52',
            audioSrc: '/Sonidos/avanzado.mp3',
            transcript: 'Este módulo presenta estudios de campo, experimentos científicos y cómo aplicar el método científico...'
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
        borderLeft: '4px solid #27ae60',
        borderRadius: '5px',
    }
};