# Arquitectura — Visión general

## Stack estandarizado

| Capa | Tecnología | Versión |
|------|------------|---------|
| Framework | Astro | 7.x |
| Lenguaje | TypeScript | strict |
| Estilos | Tailwind CSS | 4.x (@tailwindcss/vite) |
| Package manager | pnpm | ≥9 |
| Imágenes | astro:assets + WebP | via `BrandImage` |
| Fuentes | Google Fonts (Inter) | — |
| Deploy | Estático (Astro SSG) | — |

**No añadir** React/Vue/Svelte salvo necesidad explícita (islands). Priorizar componentes `.astro` para rendimiento.

## Estructura de directorios

```
src/
├── components/
│   ├── ui/           # Primitivos reutilizables (Button, Card, Container…)
│   ├── layout/       # Header, Footer
│   └── sections/     # Bloques de página (Hero, Services…)
├── data/             # Contenido tipado (site, pitch, services, navigation)
├── layouts/          # BaseLayout.astro
├── lib/              # Utilidades (cn, helpers)
├── pages/            # Rutas file-based
└── styles/
    ├── global.css    # Tailwind + base styles
    └── tokens.css    # Design tokens (@theme)
docs/
├── knowledge/        # Know-how empresa (negocio, marca, equipo)
└── architecture/     # Decisiones técnicas
```

## Principios

1. **Contenido en `src/data/`** — No hardcodear copy de negocio en componentes.
2. **UI atómica** — Sections componen UI primitives; no duplicar estilos.
3. **Un layout base** — SEO, fonts y estructura global en `BaseLayout.astro`.
4. **SSG por defecto** — Páginas estáticas salvo que se requiera SSR.
5. **Español** — `lang="es"`, copy en `docs/knowledge/` y `src/data/`.

## Flujo para nuevas páginas

1. Añadir ruta en `src/pages/`
2. Usar `BaseLayout` con `title` / `description` props
3. Componer con `sections/` existentes o crear nueva section
4. Actualizar `src/data/navigation.ts` si va al menú
5. Documentar en este directorio si hay decisión arquitectónica nueva

## Comandos

```bash
pnpm dev      # Desarrollo
pnpm build    # Build producción
pnpm preview  # Preview del build
```
