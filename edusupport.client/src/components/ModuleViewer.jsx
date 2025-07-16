import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSound from '../hooks/useSound';
import { Howl, Howler } from 'howler'; // �Aseg�rate de tener Howler.js instalado: npm install howler

export default function ModuleViewer() {
    const { subjectSlug, moduleId } = useParams();
    const navigate = useNavigate();
    // RUTA DE AUDIO: Aseg�rate de que '/Sonidos/click.mp3' sea la ruta correcta a tu archivo de audio.
    // Si tus sonidos est�n en wwwroot/audio, la ruta ser�a '/audio/click.mp3'
    const playClick = useSound('/Sonidos/click.mp3');
    // RUTA DE AUDIO: Aseg�rate de que '/Sonidos/success.mp3' sea la ruta correcta a tu archivo de audio.
    // Si tus sonidos est�n en wwwroot/audio, la ruta ser�a '/audio/success.mp3'
    const playSuccess = useSound('/Sonidos/success.mp3');

    const [moduleContent, setModuleContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado para Howler.js
    const soundRef = useRef(null); // Usa una ref para persistir la instancia de Howl
    const animationFrameRef = useRef(null); // Para el bucle de requestAnimationFrame

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0);
    const [transcriptVisible, setTranscriptVisible] = useState(true); // Valor predeterminado a visible

    useEffect(() => {
        const fetchModuleContent = async () => {
            setLoading(true);
            setError(null);
            // Limpiar el sonido anterior si existe y la animaci�n
            if (soundRef.current) {
                soundRef.current.unload();
                soundRef.current = null;
                cancelAnimationFrame(animationFrameRef.current);
            }
            setIsPlaying(false);
            setCurrentTime(0);
            setTotalDuration(0);

            try {
                // --- PUNTO DE INTEGRACI�N: Obtener contenido del m�dulo de tu API de ASP.NET Core ---
                // Descomenta las siguientes l�neas cuando tu backend est� listo para servir los datos
                // const response = await fetch(/api/subjects/${subjectSlug}/modules/${moduleId});
                // if (!response.ok) {
                //     throw new Error(HTTP error! status: ${response.status});
                // }
                // const fetchedContent = await response.json();

                // --- LLAMADA A LA API DE PRUEBA (para probar sin backend a�n) ---
                const fetchedContent = await new Promise(resolve => {
                    setTimeout(() => {
                        const mockContents = {
                            'filosofia-1': {
                                name: 'M�dulo 1: Introducci�n al Pensamiento',
                                // RUTA DE AUDIO: Aseg�rate de que esta ruta sea correcta y el archivo exista en wwwroot/audio/
                                // Si tus sonidos est�n en public/Sonidos, la ruta ser�a '/Sonidos/SoundHelix-Song-1.mp3'
                                audioUrl: '/audio/SoundHelix-Song-1.mp3',
                                transcript: 'Este es el primer p�rrafo de la transcripci�n. Aqu� se explica la introducci�n al pensamiento filos�fico. La filosof�a busca entender la realidad, el conocimiento y la existencia humana. \n\nContin�a con el segundo p�rrafo. Los grandes pensadores como S�crates, Plat�n y Arist�teles sentaron las bases de la filosof�a occidental. Sus ideas a�n resuenan en el mundo moderno. \n\nFinalmente, este es el tercer p�rrafo. Es importante reflexionar sobre estos conceptos para desarrollar un pensamiento cr�tico y una comprensi�n m�s profunda del mundo que nos rodea. La filosof�a no es solo una disciplina acad�mica, sino una forma de vida.'
                            },
                            'historia-1': {
                                name: 'M�dulo 1: Civilizaciones Antiguas',
                                audioUrl: '/audio/SoundHelix-Song-2.mp3', // RUTA DE AUDIO: Aseg�rate de que esta ruta sea correcta y el archivo exista en wwwroot/audio/
                                transcript: 'La historia de las civilizaciones antiguas es fascinante. Comenzamos con Mesopotamia y el desarrollo de la escritura cuneiforme.'
                            },
                            'ingles-1': {
                                name: 'M�dulo 1: Vocabulario B�sico',
                                audioUrl: '/audio/SoundHelix-Song-3.mp3', // RUTA DE AUDIO: Aseg�rate de que esta ruta sea correcta y el archivo exista en wwwroot/audio/
                                transcript: 'Aprende las palabras b�sicas en ingl�s. Hola, adi�s, por favor, gracias.'
                            },
                            'ciencias-naturales-1': {
                                name: 'M�dulo 1: Ecolog�a y Medio Ambiente',
                                audioUrl: '/audio/SoundHelix-Song-4.mp3', // RUTA DE AUDIO: Aseg�rate de que esta ruta sea correcta y el archivo exista en wwwroot/audio/
                                transcript: 'La ecolog�a es el estudio de los ecosistemas. Entender el medio ambiente es crucial para nuestro futuro.'
                            }
                            // A�ade m�s contenido de prueba para otros m�dulos seg�n sea necesario
                        };
                        resolve(mockContents[moduleId] || null);
                    }, 700);
                });


                if (fetchedContent) {
                    setModuleContent(fetchedContent);
                    const newSound = new Howl({
                        src: [fetchedContent.audioUrl],
                        html5: true, // Importante para la transmisi�n de archivos grandes
                        volume: 1.0, // Volumen predeterminado
                        onend: () => {
                            setIsPlaying(false);
                            setCurrentTime(0); // Reiniciar al inicio cuando termine
                            cancelAnimationFrame(animationFrameRef.current);
                            // Opcionalmente, puedes llamar a handleMarkCompleted() aqu� autom�ticamente
                            // handleMarkCompleted();
                        },
                        onplay: () => {
                            setIsPlaying(true);
                            animationFrameRef.current = requestAnimationFrame(step); // Iniciar la actualizaci�n de tiempo
                        },
                        onpause: () => setIsPlaying(false),
                        onstop: () => setIsPlaying(false),
                        onload: () => {
                            setTotalDuration(newSound.duration());
                            // Si quieres que se reproduzca autom�ticamente al cargar
                            // newSound.play();
                        },
                        onloaderror: (id, err) => console.error('Error de carga de audio:', err),
                        onplayerror: (id, err) => console.error('Error de reproducci�n de audio:', err)
                    });
                    soundRef.current = newSound; // Almacenar la instancia de Howl en la ref
                } else {
                    setError('Contenido del m�dulo no encontrado.');
                }
            } catch (err) {
                setError('Error al cargar el contenido del m�dulo.');
                console.error('Error fetching module content:', err);
            } finally {
                setLoading(false);
            }
        };

        if (subjectSlug && moduleId) {
            fetchModuleContent();
        }

        // Limpieza al desmontar el componente
        return () => {
            if (soundRef.current) {
                soundRef.current.unload(); // Descarga el sonido de la memoria
            }
            cancelAnimationFrame(animationFrameRef.current); // Detiene el bucle de animaci�n
        };
    }, [subjectSlug, moduleId]); // Se vuelve a ejecutar el efecto si subjectSlug o moduleId cambian

    const step = () => {
        if (soundRef.current && soundRef.current.playing()) { // Usa soundRef.current.playing() para verificar el estado de reproducci�n de Howler
            setCurrentTime(soundRef.current.seek());
            animationFrameRef.current = requestAnimationFrame(step);
        }
    };

    const handlePlayPause = () => {
        playClick();
        if (soundRef.current) {
            if (isPlaying) {
                soundRef.current.pause();
            } else {
                soundRef.current.play();
            }
            // setIsPlaying(!isPlaying); // Howler.js onplay/onpause manejan esto
        }
    };

    const handleRewind = () => {
        playClick();
        if (soundRef.current) {
            soundRef.current.seek(Math.max(0, soundRef.current.seek() - 10)); // Retroceder 10 segundos
            setCurrentTime(soundRef.current.seek());
        }
    };

    const handleForward = () => {
        playClick();
        if (soundRef.current) {
            soundRef.current.seek(Math.min(totalDuration, soundRef.current.seek() + 10)); // Avanzar 10 segundos
            setCurrentTime(soundRef.current.seek());
        }
    };

    const handleTimelineClick = (e) => {
        playClick();
        if (soundRef.current && totalDuration > 0) {
            const timeline = e.currentTarget;
            const clickX = e.clientX - timeline.getBoundingClientRect().left;
            const percentage = clickX / timeline.offsetWidth;
            const newSeek = totalDuration * percentage;
            soundRef.current.seek(newSeek);
            setCurrentTime(newSeek);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return ${ minutes }:${ remainingSeconds < 10 ? '0' : '' }${ remainingSeconds }; // Corregido: se a�aden las comillas invertidas
    }; // Se elimina el punto y coma extra

    const handleToggleTranscript = () => {
        playClick();
        setTranscriptVisible(!transcriptVisible);
    };

    const handleMarkCompleted = async () => {
        playSuccess();
        // --- PUNTO DE INTEGRACI�N: Llamar a la API de ASP.NET Core para marcar el m�dulo como completado ---
        // Descomenta las siguientes l�neas cuando tu backend est� listo
        // try {
        //     const response = await fetch(/api/subjects/modules/${moduleId}/complete, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         // body: JSON.stringify({ userId: someUserId }) // si necesitas enviar informaci�n del usuario
        //     });
        //     if (!response.ok) {
        //         throw new Error('No se pudo marcar el m�dulo como completado.');
        //     }
        //     alert('�M�dulo marcado como completado!');
        //     navigate(/subjects/${subjectSlug}); // Redirigir de vuelta al detalle de la materia
        // } catch (err) {
        //     console.error('Error al marcar el m�dulo como completado:', err);
        //     alert('Error al marcar el m�dulo como completado.');
        // }

        // --- COMPLETADO DE PRUEBA (para probar sin backend a�n) ---
        alert('�M�dulo marcado como completado! (Simulaci�n)');
        navigate(/subjects/${ subjectSlug }); // Redirigir de vuelta al detalle de la materia
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <p>Cargando contenido del m�dulo...</p>
                {/* Puedes a�adir un spinner aqu� */}
            </div>
        );
    }

    if (error) {
        return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    if (!moduleContent) {
        return <div className="text-center py-8 text-gray-500">Contenido del m�dulo no disponible.</div>;
    }

    return (
        <section id="module-detail" className="p-4">
            <div className="flex items-center mb-6">
                <button
                    id="back-to-subject"
                    className="bg-blue-600 text-white p-2 rounded-full mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out"
                    aria-label="Volver a la materia"
                    onClick={() => { playClick(); navigate(/subjects/${subjectSlug}); }}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h2 id="module-title" className="text-2xl font-bold text-gray-800">{moduleContent.name}</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div id="audio-player" className="mb-6">
                    <div className="audio-timeline h-2 bg-gray-200 rounded-full cursor-pointer overflow-hidden relative" onClick={handleTimelineClick}>
                        <div className="audio-progress bg-blue-600 h-full rounded-full absolute top-0 left-0" style={{ width: ${(currentTime / totalDuration) * 100 || 0}% }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span id="current-time">{formatTime(currentTime)}</span>
                        <span id="total-time">{formatTime(totalDuration)}</span>
                    </div>
                    <div className="audio-controls flex justify-center gap-4 mt-4">
                        <button id="rewind" className="audio-btn p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200" aria-label="Retroceder 10 segundos" onClick={handleRewind}>
                            <i className="fas fa-backward text-xl"></i>
                        </button>
                        <button id="play-pause" className="audio-btn p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200" aria-label={isPlaying ? "Pausar" : "Reproducir"} onClick={handlePlayPause}>
                            <i className={fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl} id="play-icon"></i>
                        </button>
                        <button id="forward" className="audio-btn p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200" aria-label="Avanzar 10 segundos" onClick={handleForward}>
                            <i className="fas fa-forward text-xl"></i>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4 mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Transcripci�n</h3>
                    <button id="toggle-transcript" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200" onClick={handleToggleTranscript}>
                        <i className="fas fa-file-alt mr-2"></i>{transcriptVisible ? 'Ocultar transcripci�n' : 'Mostrar transcripci�n'}
                    </button>
                </div>

                <div id="transcript" className={${transcriptVisible ? '' : 'hidden'} p-4 bg-gray-100 rounded-md max-h-80 overflow-y-auto text-gray-700 leading-relaxed}>
{
    moduleContent.transcript.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-2">{paragraph}</p>
    ))
}
                </div >
            </div >

    <div className="mt-8 text-center">
        <button id="mark-completed" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200" onClick={handleMarkCompleted}>
            <i className="fas fa-check mr-2"></i>Marcar como completado
        </button>
    </div>
        </section >
    );
}