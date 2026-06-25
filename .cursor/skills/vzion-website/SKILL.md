---
name: vzion-website
description: Desarrollar y mantener el sitio web corporativo de VZION (Astro). Usar al añadir páginas, secciones, copy comercial, componentes UI o cambios de marca en vzion_web.
---

# VZION Website Skill

## Cuándo usar

- Nuevas páginas o secciones del sitio VZION
- Cambios de copy comercial o servicios
- Componentes UI o design system
- SEO y meta tags

## Flujo

1. Leer `docs/knowledge/business-model.md` y `docs/knowledge/brand-voice.md`
2. Verificar arquitectura en `docs/architecture/overview.md`
3. Editar datos en `src/data/` antes que componentes
4. Componer con `ui/` + `sections/`
5. Ejecutar `pnpm build`

## Mensaje central (no alterar sin aprobación)

> «Nosotros somos el equipo que tú necesitas para que tu servicio funcione. Tú llevas la visión, nosotros ponemos la operación.»

## Archivos de referencia

| Archivo | Propósito |
|---------|-----------|
| `src/data/pitch.ts` | Pitch y diferenciadores |
| `src/data/services.ts` | Catálogo servicios |
| `src/data/site.ts` | Meta, contacto, SEO |
| `src/layouts/BaseLayout.astro` | Layout global |

## Checklist pre-entrega

- [ ] Copy alineado con tono de marca
- [ ] Sin emails de equipo en UI pública
- [ ] Tokens de color, no hex sueltos
- [ ] `pnpm build` exitoso
