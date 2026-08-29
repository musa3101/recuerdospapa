# Última Sesión: Web Móvil de Recuerdos "Para papá"

## 📅 Fecha
29 de Agosto de 2026

## 🎯 Objetivo de la Sesión
Construir la primera versión de la landing web móvil emotiva "Para papá", adaptada a escaneo QR, con integración del carrusel 3D, cronología vertical, soporte multilingüe completo (Español, Inglés y Bengalí), y conexión de las 5 fotos reales de la carpeta `hero fotos` con transiciones dinámicas Ken Burns cada 2.8 segundos.

---

## 🛠️ Qué se ha hecho
1. **Fotos Personalizadas del Hero (`hero fotos`)**:
   - Integradas las 5 fotografías seleccionadas por el usuario para el fondo del Hero.
   - Configurado el ciclo de rotación a **2.8 segundos** (~2-3s) con transiciones suaves de Zoom-In y Zoom-Out (efecto Ken Burns calibrado).

2. **Rediseño del Hero y Prioridad Visual a las Fotos**:
   - Todo el bloque de texto y el botón animado (`uiverse-conic-btn`) ubicados en la parte inferior para que los rostros en el centro y parte superior queden 100% visibles y destacados.

3. **Galería 3D Carousel Interactiva (`GalleryCarousel3D.tsx`)**:
   - Carrusel 3D con perspectiva CSS real, soporte de deslizamiento táctil (swipe), controles de giro, lightbox y reflejos.

4. **Cronología Vertical Narrativa**:
   - Flujo vertical continuo con nodos numerados `01`, `02`, `03` y fotografías verticales 4:5.

5. **Internacionalización Completa (i18nstack)**:
   - Español (ES), Inglés (EN) y Bengalí (বাংলা) con selector flotante y tipografías nativas.

---

## 📁 Archivos Modificados / Creados
- `web/src/config/assets.ts`
- `web/src/components/Hero.tsx`, `web/src/components/Hero.css`
- `web/public/assets/images/hero/` (5 fotografías de portada)
- `web/src/components/GalleryCarousel3D.tsx`, `web/src/components/GalleryCarousel3D.css`
- `web/src/components/Timeline.tsx`, `web/src/components/Timeline.css`
- `web/src/i18n/types.ts`, `web/src/i18n/translations.ts`, `web/src/i18n/LanguageContext.tsx`
- `web/src/components/LanguageSelector.tsx`, `web/src/components/LanguageSelector.css`
- `setup.sh`, `docs/SESSION_LATEST_ES.md`, `docs/ROADMAP.md`

---

## 📌 Queda Pendiente
- Despliegue en Cloudflare Pages / R2.
