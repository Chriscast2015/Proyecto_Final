import React from 'react';

export default function Historia() {
    const modules = [
        {
            title: 'M�dulo 1: Edad Antigua',
            description: 'Civilizaciones cl�sicas y sus legados',
            duration: '1:10',
            audioSrc: '/Sonidos/historia1.mp3',
            transcript: 'Estudiamos Egipto, Grecia y Roma, y c�mo sus estructuras sociales y pol�ticas influenciaron el mundo moderno...'
        },
        {
            title: 'M�dulo 2: Edad Media',
            description: 'Feudalismo, religi�n y cultura medieval',
            duration: '1:04',
            audioSrc: '/Sonidos/historia2.mp3',
            transcript: 'Exploramos el sistema feudal, las cruzadas y el papel de la Iglesia en la vida cotidiana...'
        },
        {
            title: 'M�dulo 3: Edad Moderna y Contempor�nea',
            description: 'Revoluciones, guerras y globalizaci�n',
            duration: '1:02',
            audioSrc: '/Sonidos/historia3.mp3',
            transcript: 'Desde la Revoluci�n Francesa hasta la Segunda Guerra Mundial y el mundo globalizado actual...'
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