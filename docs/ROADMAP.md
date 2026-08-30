# Roadmap del Proyecto: Web de Recuerdos "Para papá"

## ✅ Tareas Completadas
- [x] **Despliegue y migración oficial a Vercel**: `https://abdulhanif.vercel.app` (infraestructura rápida e inmune a bloqueos de operadoras).
- [x] **Resolución definitiva de pantalla negra y 403**: Eliminado el Service Worker que cacheaba respuestas erróneas.
- [x] **Optimización de fluidez en iPhone/Safari (60/120 fps)**: Eliminado `-webkit-box-reflect`, depurado `will-change` y code-splitting a 16.6 kB.
- [x] **Renderizado inteligente**: Implementado `content-visibility: auto` para carga diferida de secciones pesadas.
- [x] **Respaldo en GitHub Pages**: CI/CD configurado en `.github/workflows/deploy-gh-pages.yml`.
- [x] **Flujo CI/CD para Vercel**: `.github/workflows/deploy-vercel.yml`.
- [x] **Carrusel 3D Cinemático**: Capas 3D con aceleración por hardware y soporte táctil fluido.
- [x] **Cuadrícula 109 Fotos SPA**: Modal sin recargas con historial nativo de Safari (`pushState` / `popstate`).
- [x] **Vídeo Full HD 1080×1920**: Controles accesibles, skip $\pm 10\text{ s}$ y doble toque táctil.
- [x] **Sobre vintage fotorrealista**: Sello de cera, solapas 3D y dedicatoria desplegable.
- [x] **Selector de idiomas y localización completa**: Español, Inglés y Bengalí (`i18nstack`).
- [x] **Full Responsive**: Probado y validado en iOS (iPhone/iPad) y Android.

---

## ⏳ Tareas en Progreso
- Ninguna. Proyecto 100% operativo y optimizado en producción.

---

## 🚀 Próximas Mejoras Opcionales
1. **Generación del QR**: Crear el QR en QRCode Monkey con `https://abdulhanif.vercel.app` y mandarlo a imprimir en la taza para papá.
2. **Dominio Propio (Opcional)**: Vincular un dominio `.es` / `.com` si la familia lo solicita a futuro.
