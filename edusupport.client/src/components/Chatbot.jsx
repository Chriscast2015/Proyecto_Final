// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

export default function Chatbot() {
    const [mensajes, setMensajes] = useState([]);
    const [open, setOpen] = useState(false);
    const scrollRef = useRef();

    // Menú reducido
    const menuPreguntas = [
        'Ubicación',
        '¿Cómo loguearse?',
        '¿Cómo registrarse?',
        '¿Qué materias hay?',
        'Contactos',
        'Soporte técnico'
    ];

    // Saludo inicial
    useEffect(() => {
        const saludo =
            '👋 Hola, soy Luna. Selecciona una opción del menú para obtener información.';
        setMensajes([{ tipo: 'bot', texto: saludo }]);
    }, []);

    // Auto-scroll
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensajes]);

    // Generar respuesta
    const responder = (texto) => {
        switch (texto) {
            case 'Ubicación':
                return '📍 EduSupport es 100% en línea, accesible desde cualquier dispositivo.';
            case '¿Cómo loguearse?':
                return '🔐 Ve a "Login" e introduce tu correo y contraseña.';
            case '¿Cómo registrarse?':
                return '✍️ Haz clic en "Register", completa el formulario y confirma tu email.';
            case '¿Qué materias hay?':
                return '📚 Ofrecemos Filosofía, Historia, Inglés y Ciencias Naturales.';
            case 'Contactos':
                return '📞 Alex Montero: 0987157159\n📞 Christian Castro: 0983946002';
            case 'Soporte técnico':
                return '🛠️ daniel.feijoo@uisek.edu.ec\n🛠️ jose.escobar@uisek.edu.ec';
            default:
                return '🤖 Selecciona una opción válida del menú.';
        }
    };

    // Manejar click en menú
    const enviarMensaje = (texto) => {
        const respuesta = responder(texto);
        setMensajes(prev => [
            ...prev,
            { tipo: 'usuario', texto },
            { tipo: 'bot', texto: respuesta }
        ]);
    };

    // Mostrar/ocultar chat
    const toggleChat = () => setOpen(o => !o);

    return (
        <>
            {!open && (
                <button
                    className="chatbot-toggle"
                    onClick={toggleChat}
                    aria-label="Abrir chat"
                >
                    💬
                </button>
            )}

            {open && (
                <div className="chatbot">
                    <div className="chatbot-header">
                        <h4>Asistente Virtual</h4>
                        <button
                            className="chatbot-close-btn"
                            onClick={toggleChat}
                            aria-label="Cerrar chat"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Menú de opciones */}
                    <div className="chatbot-menu">
                        {menuPreguntas.map((item, idx) => (
                            <button key={idx} onClick={() => enviarMensaje(item)}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Área de mensajes */}
                    <div className="chatbot-messages">
                        {mensajes.map((m, i) => (
                            <p key={i} className={m.tipo}>
                                <strong>{m.tipo === 'usuario' ? 'Tú' : 'Luna'}:</strong> {m.texto}
                            </p>
                        ))}
                        <div ref={scrollRef} />
                    </div>
                </div>
            )}
        </>
    );
}