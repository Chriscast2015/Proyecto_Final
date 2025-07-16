import React from 'react';

export default function Ingles() {
    const modules = [
        {
            title: 'M�dulo 1: Vocabulario B�sico',
            description: 'Palabras esenciales para la comunicaci�n',
            duration: '1:05',
            audioSrc: '/Sonidos/ingles1.mp3',
            transcript: 'Aprender�s saludos, n�meros, colores y frases comunes para iniciar conversaciones...'
        },
        {
            title: 'M�dulo 2: Gram�tica Fundamental',
            description: 'Estructura del idioma ingl�s',
            duration: '0:58',
            audioSrc: '/Sonidos/ingles2.mp3',
            transcript: 'Estudiaremos tiempos verbales, pronombres, preposiciones y c�mo formar oraciones correctamente...'
        },
        {
            title: 'M�dulo 3: Comprensi�n Auditiva',
            description: 'Mejora tu habilidad para entender el ingl�s hablado',
            duration: '1:10',
            audioSrc: '/Sonidos/ingles3.mp3',
            transcript: 'Escuchar�s di�logos reales, conversaciones cotidianas y ejercicios de pronunciaci�n...'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Ingl�s</h1>
            <div style={styles.grid}>
                {modules.map((mod, index) => (
                    <div key={index} style={styles.card}>
                        <h2>{mod.title}</h2>
                        <p>{mod.description}</p>
                        <p><strong>Duraci�n:</strong> {mod.duration}</p>
                        <audio controls style={styles.audio}>
                            <source src={mod.audioSrc} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        <div style={styles.transcript}>
                            <h3>Transcripci�n</h3>
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