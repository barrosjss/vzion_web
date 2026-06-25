export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Academy", href: "/academy" },
];

export const footerNav = {
  navigation: [
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Nosotros", href: "/nosotros" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Academy", href: "/academy" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export function isNavActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
