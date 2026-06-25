# VZION Web

Instrucciones para Claude Code y asistentes en terminal.

## Contexto

Proyecto web corporativo de VZION — socio operativo as-a-service para consultores B2B.

## Lectura obligatoria

1. `AGENTS.md` — Reglas y estructura del repo
2. `docs/knowledge/business-model.md` — Modelo de negocio
3. `docs/architecture/overview.md` — Arquitectura técnica

## Stack

- Astro 7, TypeScript strict, Tailwind CSS 4
- **pnpm** como package manager (no npm ni yarn)
- Componentes `.astro` (sin React salvo necesidad)
- Contenido tipado en `src/data/`

## Convenciones

- Copy en español; datos de negocio en `src/data/`
- UI: reutilizar `src/components/ui/`
- Build debe pasar: `pnpm build`

## No hacer

- Añadir dependencias innecesarias
- Hardcodear contenido comercial en JSX/Astro
- Exponer emails del equipo en páginas públicas
- Usar npm o yarn en lugar de pnpm
