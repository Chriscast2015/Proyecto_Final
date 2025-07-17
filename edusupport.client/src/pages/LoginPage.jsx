import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/auth';
import './LoginPage.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        setError(null);

        try {
            const { token } = await login(email, pwd);
            if (token) {
                localStorage.setItem('token', token);
               
                - navigate('/');
                + navigate('/dashboard');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch {
            setError('Error en el servidor');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card" role="main" aria-labelledby="login-title">
                <h2 id="login-title">Iniciar sesión</h2>

                <form onSubmit={onSubmit} className="login-form" noValidate>
                    {error && (
                        <div className="error" role="alert" aria-live="assertive">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd">Contraseña</label>
                        <input
                            id="pwd"
                            type="password"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn"
                        onClick={() => {
                            const audio = new Audio('/Sonidos/click.mp3');
                            audio.play().catch(error => {
                                console.error("No se pudo reproducir el sonido:", error);
                            });
                        }}
                    >
                        Entrar
                    </button>
                </form>

                <p className="register-link">
                    ¿No tienes cuenta?{' '}
                    <Link
                        to="/register"
                        onClick={() => {
                            const audio = new Audio('/Sonidos/click.mp3');
                            audio.play().catch(error => {
                                console.error("No se pudo reproducir el sonido:", error);
                            });
                        }}
                    >
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}