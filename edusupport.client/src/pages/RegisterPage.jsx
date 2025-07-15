// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

export default function RegisterPage() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);

        try {
            // Asegúrate de actualizar tu servicio `register`
            // para que acepte (nombre, apellido, email, pwd)
            const { token } = await register(nombre, apellido, email, pwd);
            if (token) {
                localStorage.setItem('token', token);
                navigate('/login');
            }
        } catch (err) {
            setError(err.message || 'Error al registrar');
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    required
                    minLength={3}
                    aria-label="Nombre"
                />

                <label htmlFor="apellido">Apellido</label>
                <input
                    id="apellido"
                    type="text"
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                    required
                    minLength={3}
                    aria-label="Apellido"
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    aria-label="Correo electrónico"
                />

                <label htmlFor="pwd">Contraseña</label>
                <input
                    id="pwd"
                    type="password"
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                    required
                    aria-label="Contraseña"
                />

                {error && (
                    <p role="alert" style={{ color: 'red' }}>
                        {error}
                    </p>
                )}

                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    );
}