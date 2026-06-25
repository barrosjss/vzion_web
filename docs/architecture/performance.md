# Performance — Optimizaciones

## Implementado

| Área | Qué hace |
|------|----------|
| **Fuentes self-hosted** | `@fontsource/*` — sin request bloqueante a Google Fonts |
| **Imágenes** | `BrandImage` + `astro:assets` → WebP automático (~60KB PNG → ~1KB) |
| **Prefetch** | Links internos precargados al entrar en viewport |
| **HTML** | `compressHTML: true` |
| **CSS** | `inlineStylesheets: auto` + minify |
| **Lazy load** | Imágenes decorativas con `loading="lazy"` |
| **LCP** | Logo hero/header con `fetchpriority="high"` |
| **Animaciones** | `prefers-reduced-motion` desactiva spin/float |
| **Below-fold** | `content-visibility: auto` en secciones home |
| **JS** | Menú móvil en módulo separado (~2KB), sin duplicar en cada página |
| **Favicon** | SVG ligero en lugar de PNG 61KB |

## Componentes

- `BrandImage.astro` — siempre usar en lugar de `<img src="/brand/...">`
- Pesos de fuente cargados: 400, 500, 600, 700 (sans) y 400, 500, 600 (mono)

## Comandos

```bash
pnpm build       # Genera dist/ + sitemap-index.xml
pnpm lighthouse  # Build + auditoría Lighthouse local
pnpm preview     # Preview del build
```

## SEO

- `public/robots.txt` → apunta a `sitemap-index.xml`
- Sitemap generado en build vía `@astrojs/sitemap` (`astro.config.mjs`)
- URL canónica: `https://vzion.studio` (debe coincidir con `src/data/site.ts`)

## CI (GitHub Actions)

Workflow `.github/workflows/ci.yml`:

1. **Build** — `pnpm install` + `pnpm build` + verifica sitemap
2. **Lighthouse** — audita `dist/` con umbrales en `lighthouserc.json`

Umbrales actuales:

| Categoría | Nivel | Mínimo |
|-----------|-------|--------|
| Performance | warn | 85% |
| Accessibility | error | 90% |
| Best practices | warn | 90% |
| SEO | error | 90% |

Audita 4 páginas clave: `/`, `/servicios/`, `/contacto/`, `/nosotros/`.

Para correr localmente (requiere Chrome instalado):

```bash
pnpm lighthouse
```

## Checklist Lighthouse

- [ ] LCP < 2.5s en 4G
- [ ] Sin render-blocking de fonts.googleapis.com
- [ ] Imágenes en formato moderno (WebP)
- [ ] `prefers-reduced-motion` respetado

## Futuro (opcional)

- `@astrojs/sitemap` para SEO
- Service Worker / PWA si se necesita offline
- Comprimir `public/brand/` legacy o eliminar si ya no se usa
