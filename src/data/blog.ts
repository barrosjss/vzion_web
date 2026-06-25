export type BlogPost = {
  title: string;
  cat: string;
  read: string;
  date: string;
  featured?: boolean;
  author?: string;
};

export const posts: BlogPost[] = [
  {
    title: "Por qué el acoplamiento le gana al outsourcing",
    cat: "Estrategia",
    read: "5 min",
    date: "Jun 2026",
    featured: true,
    author: "Ricardo García",
  },
  {
    title: "Agentes de voz: del piloto a producción",
    cat: "IA",
    read: "7 min",
    date: "May 2026",
  },
  {
    title: "El stack mínimo para escalar una consultoría",
    cat: "Operación",
    read: "6 min",
    date: "May 2026",
  },
  {
    title: "n8n: automatiza sin tocar código",
    cat: "Automatización",
    read: "8 min",
    date: "Abr 2026",
  },
  {
    title: "GEO: cómo aparecer en las respuestas de la IA",
    cat: "SEO",
    read: "6 min",
    date: "Abr 2026",
  },
  {
    title: "Tu CRM no falla, falta proceso",
    cat: "CRM",
    read: "5 min",
    date: "Mar 2026",
  },
];

export const featuredPost = posts.find((p) => p.featured)!;
