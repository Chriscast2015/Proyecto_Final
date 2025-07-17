import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import './RegisterPage.css';

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
        <div className="register-container">
            <div className="register-card" role="main" aria-labelledby="register-title">
                <h2 id="register-title">Registro</h2>
                <form onSubmit={handleSubmit} className="register-form" noValidate>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            id="apellido"
                            type="text"
                            placeholder="Ingresa tu apellido"
                            value={apellido}
                            onChange={e => setApellido(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
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
                            placeholder="Crea una contraseña"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    {error && (
                        <div className="error" role="alert" aria-live="assertive">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn">
                        Crear cuenta
                    </button>
                </form>
            </div>
        </div>
    );
}
