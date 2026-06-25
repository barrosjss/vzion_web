# Design System — VZION Web

Basado en el handoff corporativo (`VZION.dc.html`).

## Tokens (`src/styles/tokens.css`)

| Token | Valor | Uso |
|-------|-------|-----|
| `brand` | `#F7941D` | CTAs, acentos, labels activos |
| `bg` | `#0F0E0C` | Fondo página |
| `bg-footer` | `#0A0908` | Footer |
| `text` | `#F2EDE4` | Texto principal |
| `text-muted` | `#A89F92` | Párrafos secundarios |

## Tipografía

- **Sans:** Hanken Grotesk — títulos y cuerpo
- **Mono:** JetBrains Mono — labels (`//`, `[ 01 ]`), navegación, tags

## Componentes UI

| Componente | Uso |
|------------|-----|
| `Button` | primary (naranja), secondary, ghost, mono |
| `Eyebrow` | `[ 01 ] sección` |
| `MonoLabel` | `// stack que...` |
| `ServiceCard` | grid (home) o list (servicios) |
| `ProjectCard` | portafolio |
| `TeamCard` | equipo |
| `BlogCard` | blog |
| `PageHero` | hero de páginas internas |
| `Container` | ancho máximo 1280px |

## Utilidades

- `.vz-grain` — textura de grano (layout)
- `.vz-grid-mask` — grid con máscara radial (orbit hero)
- `.animate-vz-float`, `.animate-vz-spin`, `.animate-vz-pulse`

## Assets

Logos en `public/brand/` — usar `brand` de `src/data/site.ts`.
