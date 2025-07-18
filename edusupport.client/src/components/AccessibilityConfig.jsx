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
                <button className="close-btn" onClick={onClose}>✖</button>
            </div>

            <p className="accessibility-subtitle">Tamaño de texto</p>

            <div className="accessibility-options">
                {['normal', 'grande', 'extra'].map((size) => (
                    <button
                        key={size}
                        className={`size-btn ${selected === size ? 'selected' : ''}`}
                        onClick={() => handleChange(size)}
                    >
                        {size === 'normal' ? 'Normal' : size === 'grande' ? 'Grande' : 'Extra grande'}
                    </button>
                ))}
            </div>
        </div>
    );
}