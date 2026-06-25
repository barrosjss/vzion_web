# VZION Web

Sitio corporativo de [VZION](https://vzion.io) — socio operativo flexible para consultores y estrategas B2B.

## Stack

- [Astro](https://astro.build) 7
- TypeScript (strict)
- Tailwind CSS 4

## Inicio rápido

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción + sitemap |
| `pnpm preview` | Preview del build |
| `pnpm lighthouse` | Build + auditoría Lighthouse local |

## Documentación

- **Agentes IA:** [`AGENTS.md`](./AGENTS.md)
- **Arquitectura:** [`docs/architecture/`](./docs/architecture/)
- **Know-how empresa:** [`docs/knowledge/`](./docs/knowledge/)

## Estructura

```
src/
├── components/ui/       # Design system
├── components/sections/ # Bloques de página
├── data/                # Contenido tipado
├── layouts/             # Layouts
└── pages/               # Rutas
```

## Desarrollo con IA

El repo incluye reglas en `.cursor/rules/` y skill en `.cursor/skills/vzion-website/` para Cursor y Claude.
