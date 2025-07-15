import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import SubjectPage from './pages/SubjectPage';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1) Raíz: siempre login */}
                <Route path="/" element={<LoginPage />} />

                {/* 2) Páginas públicas */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* 3) Dashboard protegido */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/* 4) Página de materia protegida */}
                <Route
                    path="/subjects/:subject"
                    element={
                        <PrivateRoute>
                            <SubjectPage />
                        </PrivateRoute>
                    }
                />

                {/* 5) Catch-all redirige a "/" */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}