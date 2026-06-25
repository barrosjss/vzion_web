# Responsive — Auditoría y patrones

## Breakpoints (Tailwind)

| Prefijo | Ancho |
|---------|-------|
| `sm` | ≥640px |
| `md` | ≥768px |
| `lg` | ≥1024px |

## Patrones del proyecto

- **Padding horizontal:** solo en `Container` (`px-4 sm:px-6 lg:px-10`). Las `<section>` usan solo padding vertical.
- **Títulos:** preferir `text-[clamp(min, fluid, max)]`.
- **Grids:** siempre partir de 1 columna; añadir `sm:` / `lg:` según contenido.
- **CTAs en móvil:** `w-full sm:w-auto` en botones principales.
- **Safe area:** `viewport-fit=cover` + `env(safe-area-inset-*)` en body, header y footer.

## Componentes con lógica responsive

| Componente | Comportamiento móvil |
|------------|---------------------|
| `Header` | Menú hamburguesa `< md`; nav completa `≥ md` |
| `Hero` | Pills simplificados `< md`; órbita `≥ md` |
| `Differentiators` | Cards apiladas `< md`; tabla `≥ md` |
| `ServiceCard` | List layout: columna en xs, fila en `sm+` |
| `PageHero` | Incluye `Container`; padding vertical responsive |

## Checklist antes de merge

- [ ] Probar 320px, 375px, 768px, 1024px, 1280px
- [ ] Menú móvil abre/cierra y enlaces funcionan
- [ ] Sin scroll horizontal involuntario
- [ ] Textos largos no desbordan (usar `min-w-0`, `break-all` en emails)
- [ ] `pnpm build` exitoso
