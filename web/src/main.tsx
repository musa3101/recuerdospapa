import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err: any) {
    console.error('Fatal initialization error:', err);
    rootElement.innerHTML = `
      <div style="min-height:100vh;background:#110F0D;color:#F8F5EE;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;text-align:center;font-family:sans-serif;">
        <h1 style="color:#D4AF37;font-size:1.8rem;margin-bottom:1rem;">Para Papá</h1>
        <p style="color:#C8BDAF;margin-bottom:1.5rem;">Cargando la experiencia familiar...</p>
        <button onclick="window.location.reload(true)" style="background:#D4AF37;color:#110F0D;border:none;border-radius:12px;padding:0.8rem 1.8rem;font-weight:bold;cursor:pointer;">Recargar</button>
      </div>
    `;
  }
}

