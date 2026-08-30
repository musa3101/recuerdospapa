# Resumen de Sesión: Migración a Vercel y Optimización Móvil

## 📅 Fecha
30 de Agosto de 2026

## 🎯 Objetivo de la Sesión
Solucionar definitivamente los problemas de pantalla negra / 403 en dispositivos móviles, migrar a una infraestructura 100% fiable para el regalo del padre (taza con QR) y optimizar la fluidez a 60/120 fps en iPhone/Safari.

---

## 🛠️ Qué se ha hecho hoy

1. **Eliminación Definitiva del Service Worker**:
   - Se reemplazó el `sw.js` por un script que se auto-desregistra y limpia las cachés antiguas que almacenaban respuestas de error 403.
   - Se añadió un script inline de seguridad en `index.html` para limpiar datos residuales en el arranque de Safari.

2. **Despliegue y Migración a Vercel**:
   - Se configuró el proyecto oficial en Vercel con el dominio: **`https://abdulhanif.vercel.app`**.
   - Se crearon las reglas de enrutamiento SPA en `vercel.json` para navegación fluida.
   - Inmune a bloqueos de operadoras e interrupciones en España.

3. **Optimización de Rendimiento y Fluidez en iPhone (60/120 fps)**:
   - **Carrusel 3D**: Se eliminó `-webkit-box-reflect` que saturaba la GPU de WebKit al duplicar texturas 3D en cada fotograma.
   - **CSS**: Se depuró `will-change` dejándolo estrictamente en `transform, opacity`.
   - **Renderizado inteligente**: Se aplicó `content-visibility: auto` a las secciones para que no consuman recursos hasta que el usuario haga scroll hacia ellas.
   - **Code Splitting**: Reducción del bundle principal a solo **16.68 kB (gzip)** dividiendo dependencias (`vendor.js` y `icons.js`).

4. **Automatización CI/CD**:
   - Flujo de GitHub Pages (`.github/workflows/deploy-gh-pages.yml`).
   - Flujo directo de Vercel (`.github/workflows/deploy-vercel.yml`).

---

## 📁 Archivos Modificados
- `web/src/styles/global.css`: Optimización de animaciones y `content-visibility`.
- `web/src/components/GalleryCarousel3D.css`: Eliminación de `box-reflect` y aceleración por hardware.
- `web/src/config/assets.ts`: Resolución dinámica de rutas base para assets.
- `web/vite.config.ts`: División de chunks (`manualChunks`) y compatibilidad móvil.
- `web/vercel.json`: Reglas de reescritura SPA para Vercel.
- `.github/workflows/deploy-gh-pages.yml`: Despliegue automatizado en GitHub Pages.
- `.github/workflows/deploy-vercel.yml`: Despliegue automatizado en Vercel.
- `docs/SESSION_LATEST_ES.md`: Registro de la sesión.
- `docs/ROADMAP.md`: Actualización de tareas y estado del proyecto.

---

## 🐛 Problemas Solucionados
- **Pantalla negra / 403 recurrente**: Eliminado el almacenamiento de respuestas erróneas en el Service Worker.
- **Bloqueos de red en `.pages.dev`**: Migrado a Vercel con entrega global sin cortes de operadoras.
- **Lag y tirones en iPhone**: Eliminada la sobrecarga de rasterizado en la GPU de Safari móvil.

---

## ⏳ Qué queda pendiente
- Generar el código QR con **QRCode Monkey** usando la URL definitiva y mandarlo a imprimir en la taza.

---

## 🌐 Enlaces en Producción
- **URL Oficial (Recomendada para la taza)**: [https://abdulhanif.vercel.app](https://abdulhanif.vercel.app)
- **GitHub Pages (Respaldo)**: [https://musa3101.github.io/recuerdospapa/](https://musa3101.github.io/recuerdospapa/)
- **Servidor local de desarrollo**: `http://localhost:3000/`
