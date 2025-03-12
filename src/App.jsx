import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './templates/Header';
import './App.css'
import './styles/display.css'
import './styles/spacing.css'
import './styles/badge.css'
import './styles/card.css'

// Utiliza React.lazy para cargar los componentes de manera diferida
const HomePage = lazy(() => import('./pages/Home.page'));

function App() {
    const theme = useTheme();

    return (
        <Router>
            <Suspense fallback={<CircularProgress />}>
                <Header
                    sx={{
                        backgroundColor: theme.palette.header.bg_color, // Color primario del tema
                        color: theme.palette.header.txt_color, // Color de texto contrastante
                    }} />
                <div
                    className='flex flex-col flex-1'
                    style={{
                        backgroundColor: theme.palette.body.bg_color, // Color de fondo del tema
                        padding: theme.spacing(2), // Espaciado del tema
                    }}
                >
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </div>
            </Suspense>
        </Router>
    );
}

export default App;
