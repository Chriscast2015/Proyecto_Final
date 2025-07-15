// src/hooks/useSound.js
import { useRef, useEffect } from 'react';

const useSound = (src) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Creamos el Audio con la ruta tal cual (public/Sonidos/)
        audioRef.current = new Audio(src);
        audioRef.current.preload = 'auto';
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [src]);

    const playSound = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
            console.error('Error al reproducir el sonido:', err);
        });
    };

    return playSound;
};

export default useSound;