import React, { useState } from 'react';
import AccessibilityConfig from './AccessibilityConfig';
import './TextSizeButton.css';

export default function TextSizeButton({ setFontSize }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="text-size-toggle"
                onClick={() => setOpen((o) => !o)}
                aria-label="Configuración de texto"
            >
                🅰️
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