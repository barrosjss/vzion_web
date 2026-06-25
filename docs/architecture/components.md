# Componentes — Guía rápida

## Jerarquía

```
pages/*.astro
  └── layouts/BaseLayout.astro
        ├── layout/Header.astro
        ├── sections/*.astro
        │     └── ui/*.astro
        └── layout/Footer.astro
```

## Crear una nueva section

1. Archivo en `src/components/sections/MiSection.astro`
2. Importar `Section`, `Container`, componentes `ui/` según necesidad
3. Leer datos de `src/data/` — no inline copy de negocio
4. Añadir a la página correspondiente

## Props comunes

### BaseLayout

- `title` — Título de página (opcional)
- `description` — Meta description
- `noIndex` — `true` para páginas no indexables

### Button

- `href` — Si existe, renderiza `<a>`; si no, `<button>`
- `variant` — `primary | secondary | ghost | outline`
- `size` — `sm | md | lg`

### Section

- `id` — Anchor para navegación
- `variant` — `default | muted | accent`
- `padding` — `sm | md | lg`

## Index de sections actuales

| Section | ID anchor | Propósito |
|---------|-----------|-----------|
| Hero | — | Landing principal |
| Problem | `#propuesta` | Problema + propuesta |
| Differentiators | `#diferenciadores` | Tabla comparativa |
| Services | `#servicios` | Grid de capacidades |
| CTA | — | Cierre con contacto |

Footer usa `#contacto`.
