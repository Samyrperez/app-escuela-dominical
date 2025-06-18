import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from '../src/context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';
import App from './App.jsx';
import { AlumnosProvider } from './context/AlumnosContext.jsx';
import { BuscadorProvider } from './context/BuscadorContext.jsx';
import { NotificacionesProvider } from './context/NotificacionesContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AlumnosProvider>
          <BuscadorProvider>
            <NotificacionesProvider>
              <App />
            </NotificacionesProvider>
          </BuscadorProvider>
        </AlumnosProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
