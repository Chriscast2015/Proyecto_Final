import React, { useState } from 'react';
import './AccessibilityConfig.css';

export default function AccessibilityConfig({ onClose, setFontSize }) {
    const [selected, setSelected] = useState('normal');

    const handleChange = (size) => {
        setSelected(size);
        setFontSize(size);
    };

    return (
        <div className="accessibility-modal">
            <div className="accessibility-header">
                <h3>Configuración de Accesibilidad</h3>
                <button
                    className="close-btn"
                    onClick={() => {
                        const audio = new Audio('/Sonidos/click.mp3');
                        audio.play().catch(error => {
                            console.error("No se pudo reproducir el sonido:", error);
                        });
                        // Call the original onClose function after playing the sound
                        onClose();
                    }}
                >
                    ✖
                </button>
            </div>

            <p className="accessibility-subtitle">Tamaño de texto</p>

            <div className="accessibility-options">
                {['normal', 'grande', 'extra'].map((size) => (
                    <button
                        key={size}
                        className={`size-btn ${selected === size ? 'selected' : ''}`}
                        onClick={() => {
                            const audio = new Audio('/Sonidos/click.mp3');
                            audio.play().catch(error => {
                                console.error("No se pudo reproducir el sonido:", error);
                            });
                            // Call the original handleChange function after playing the sound
                            handleChange(size);
                        }}
                    >
                        {selected === size && (
                            <span aria-hidden="true" style={{ marginRight: '0.5rem' }}>✔️</span>
                        )}
                        {size === 'normal' ? 'Normal' : size === 'grande' ? 'Grande' : 'Extra grande'}
                    </button>
                ))}
            </div>
        </div>
    );
}