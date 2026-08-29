# Última Sesión: Web Móvil de Recuerdos "Para papá"

## 📅 Fecha
29 de Agosto de 2026

## 🎯 Objetivo de la Sesión
Construir la primera versión de la landing web móvil emotiva "Para papá", adaptada a escaneo QR, con integración del carrusel 3D, cronología vertical, soporte multilingüe completo (Español, Inglés y Bengalí), y ajuste del ritmo de las fotos del Hero a 3.5 segundos con fundido cruzado suave y cinematográfico.

---

## 🛠️ Qué se ha hecho
1. **Calibración de Ritmo y Animación del Hero**:
   - Ajustado el tiempo de permanencia de cada foto a **3.5 segundos** para un visionado más cómodo y relajado.
   - Suavizado el fundido cruzado (*crossfade*) a **1.4 segundos** con curva `cubic-bezier(0.4, 0, 0.2, 1)`, eliminando cualquier salto brusco.
   - Calibrado el efecto Ken Burns (Zoom-In / Zoom-Out) a un deslizamiento sutil y continuo de escala del 1.0 al 1.06 a lo largo de 7 segundos con centro fijado en los rostros (`transform-origin: center 25%`).

2. **Fotos Personalizadas del Hero (`hero fotos`)**:
   - Conectadas las 5 fotos seleccionadas de la carpeta `hero fotos`.

3. **Galería 3D Carousel Interactiva (`GalleryCarousel3D.tsx`)**:
   - Carrusel 3D con perspectiva CSS real, soporte táctil (swipe), controles de giro, lightbox y reflejos.

4. **Cronología Vertical Narrativa**:
   - Flujo vertical continuo con nodos numerados `01`, `02`, `03` y fotografías verticales 4:5.

5. **Internacionalización Completa (i18nstack)**:
   - Español (ES), Inglés (EN) y Bengalí (বাংলা) con selector flotante y tipografías nativas.

---

## 📁 Archivos Modificados / Creados
- `web/src/components/Hero.tsx`, `web/src/components/Hero.css`
- `web/src/config/assets.ts`
- `web/src/components/GalleryCarousel3D.tsx`, `web/src/components/GalleryCarousel3D.css`
- `web/src/components/Timeline.tsx`, `web/src/components/Timeline.css`
- `web/src/i18n/types.ts`, `web/src/i18n/translations.ts`, `web/src/i18n/LanguageContext.tsx`
- `web/src/components/LanguageSelector.tsx`, `web/src/components/LanguageSelector.css`
- `setup.sh`, `docs/SESSION_LATEST_ES.md`, `docs/ROADMAP.md`

---

## 📌 Queda Pendiente
- Conectar las imágenes de la carpeta `cronologia` y el vídeo final `fotos para video/video_final_recuerdos_papa.mp4`.
- Despliegue en Cloudflare Pages / R2.
