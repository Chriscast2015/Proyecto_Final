import React, { useState } from 'react';
import AccessibilityConfig from './AccessibilityConfig';
import './TextSizeButton.css';

export default function TextSizeButton({ setFontSize }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="text-size-toggle"
                onClick={() => {
                    const audio = new Audio('/Sonidos/click.mp3');
                    audio.play().catch(error => {
                        console.error("No se pudo reproducir el sonido:", error);
                    });
                    // Call the original function to toggle the text size settings
                    setOpen((o) => !o);
                }}
                aria-label="Configuración de texto"
            >
                🔤
            </button>

            {open && (
                <AccessibilityConfig
                    onClose={() => setOpen(false)}
                    setFontSize={setFontSize}
                />
            )}
        </>
    );
}