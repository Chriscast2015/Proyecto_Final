// src/services/auth.js

// Usamos ruta relativa para que Vite redirija al backend
const API = '/api/auth';

/**
 * Registra un nuevo usuario.
 * Lanza un Error con el texto de la respuesta si status != 2xx.
 */
export async function register(nombre, apellido, email, password) {
    const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellido, email, password })
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Error en el registro');
    }

    return res.json();
}

/**
 * Loguea un usuario existente.
 * Lanza un Error con el texto de la respuesta si status != 2xx.
 */
export async function login(email, password) {
    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Error en el login');
    }

    return res.json();
}