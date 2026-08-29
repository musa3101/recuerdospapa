# Roadmap del Proyecto: Web de Recuerdos "Para papá"

## ✅ Tareas Completadas
- [x] **Resolución definitiva de cuelgue en iPhone/Safari**: Eliminado el desbordamiento de memoria GPU WebKit originado por `will-change: filter`.
- [x] **Auto-despliegue CI/CD automático**: Flujo con GitHub Actions y Cloudflare Git que compila y despliega en Cloudflare Pages en cada `git push` a `main`.
- [x] **Blindaje Móvil (iOS/Android)**: `ErrorBoundary`, rutas absolutas (`base: '/'`), `target: 'es2020'` y compatibilidad GPU en Safari.
- [x] **Solución a caché de iPhone / Safari**: Inclusión de directivas `_headers` para entrega inmediata de `index.html` actualizado.
- [x] **Limpieza de Cloudflare**: Eliminado el Worker sobrante y centralizado todo en Cloudflare Pages.
- [x] **Optimización integral de 109 fotos**: Miniaturas automáticas a 480px, ahorro del 92% de RAM y carga en alta resolución bajo demanda.
- [x] **Carrusel 3D Cinemático**: Capas 3D con `preserve-3d`, ordenación matemática de `z-index`, sombras doradas y soporte táctil fluido.
- [x] **Cuadrícula 109 Fotos SPA**: Modal sin recargas con historial nativo de Safari (`pushState` / `popstate`) y bloqueo de scroll de fondo.
- [x] **Hero emocional y Botón Galería**: Tipografía editorial fluida, carrusel de fondo y botón "GALERÍA" con scroll suave.
- [x] **Fondos cálidos y dinámicos**: Transición de tonos espresso, carbón y sepia con halos dorados entre secciones.
- [x] **Vídeo Full HD 1080×1920**: Controles accesibles, skip $\pm 10\text{ s}$ y doble toque táctil.
- [x] **Sobre vintage fotorrealista**: Sello de cera, solapas 3D y dedicatoria desplegable.
- [x] **Cierre emotivo limpio**: Fotografía familiar 100% visible sin recuadros opacos y dedicatoria al pie.
- [x] **Selector de idiomas flotante**: Banderas reales (🇪🇸, 🇬🇧, 🇧🇩) y menú compacto tipo glassmorphism.
- [x] **Localización completa (`i18nstack`)**: Traducciones culturales y adaptativas en Español, Inglés y Bengalí.
- [x] **Full Responsive (iPhone y Android)**: Unidades `100dvh`, `clamp()`, `env(safe-area-inset)` y rendimiento a 60/120 fps.
- [x] **Validación y Funcionamiento Móvil Verificado**: Comprobado en dispositivos móviles reales (iOS / iPhone y Android).
- [x] **Despliegue oficial en Cloudflare Pages**: `https://abdulhanif.pages.dev`.

---

## ⏳ Tareas en Progreso
- Ninguna tarea activa pendiente. Proyecto finalizado y verificado.

---

## 🚀 Próximas Mejoras Opcionales
1. **Dominio Personalizado**: Asignar un dominio propio (.com / .es) en Cloudflare si se requiere en el futuro.
2. **Cloudflare R2**: Bucket de almacenamiento si se incorporan más vídeos pesados.
