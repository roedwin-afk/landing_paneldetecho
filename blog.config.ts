import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 5,
  defaultLayout: 'magazine',
  locale: 'es',

  theme: {
    accent: '#d4500a',     // Naranja terracota (--color-accent)
    background: '#f4f3ef', // Fondo claro cálido (--color-bg)
    surface: '#ffffff',    // Superficies y tarjetas puras (--color-surface)
    text: '#0e1012',       // Color de texto primario (--color-text)
    muted: '#4a5260',      // Texto secundario suavizado (--color-text-soft)
    mutedLight: '#8a939f', // Texto desvanecido/metadatos (--color-text-muted)
    border: '#d0d5dc',     // Bordes finos de separación (--color-border)
    black: '#0e1012',      // Color oscuro base (--color-primary)
    white: '#ffffff',      // Blanco puro (--color-white)
    fontHeading: '"Barlow Condensed", sans-serif', // Tipografía de encabezados
    fontBody: '"Barlow", sans-serif',              // Tipografía del cuerpo
    fontMono: 'monospace',
    fontDisplay: '"Barlow Condensed", sans-serif',  // Tipografía display del Hero
    containerMax: '1200px',                         // Ancho máximo del contenedor
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      // Estilos de paginación mapeados a los componentes de botón del CSS
      paginationBtnBg: '#ffffff',          // Fondo blanco como un .btn-ghost inicial
      paginationBtnText: '#0e1012',        // Texto primario oscuro
      paginationBtnHoverBg: '#0e1012',     // Hover fuerte emulando al .btn-secondary
      paginationBtnHoverText: '#ffffff',   // Texto blanco en hover
      paginationActiveBg: '#d4500a',       // Estado activo usando el acento naranja (.btn-primary)
      paginationActiveText: '#ffffff',     // Texto blanco para contraste con el naranja
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});