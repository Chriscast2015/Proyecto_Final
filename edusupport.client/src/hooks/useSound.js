import { useRef, useEffect } from 'react';

const useSound = (src) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Crear el objeto Audio solo una vez
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

        // Si el audio está reproduciéndose, lo reiniciamos
        if (!audioRef.current.paused) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        // Reproducir el sonido
        audioRef.current.play().catch((err) => {
            console.error('Error al reproducir el sonido:', err);
        });
    };

    return playSound;
};

export default useSound;