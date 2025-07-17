// src/hooks/useSound.jsx
const useSound = (src) => {
    const playSound = () => {
        try {
            const audio = new Audio(src);
            audio.preload = 'auto';
            audio.play().catch(err => {
                console.error('No se pudo reproducir el sonido:', err);
            });
        } catch (err) {
            console.error('Error general al reproducir el sonido:', err);
        }
    };

    return playSound;
};

export default useSound;
