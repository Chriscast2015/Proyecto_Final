import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

// 1. Certificado de desarrollo
const baseFolder =
    env.APPDATA
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = 'edusupport.client';
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
}

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    const result = child_process.spawnSync(
        'dotnet',
        ['dev-certs', 'https', '--export-path', certFilePath, '--format', 'Pem', '--no-password'],
        { stdio: 'inherit' }
    );
    if (result.status !== 0) {
        throw new Error('Could not create certificate.');
    }
}

// 2. Detectar URL/puerto de la API
const target =
    env.ASPNETCORE_HTTPS_PORT
        ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
        : env.ASPNETCORE_URLS
            ? env.ASPNETCORE_URLS.split(';')[0]
            : 'https://localhost:7254';

// 3. Configuración Vite
export default defineConfig({
    plugins: [reactPlugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath)
        },
        port: 55757,
        proxy: {
            '^/weatherforecast': {
                target,
                changeOrigin: true,
                secure: false
            },
            '^/api': {
                target,
                changeOrigin: true,
                secure: false
            }
        }
    }
});