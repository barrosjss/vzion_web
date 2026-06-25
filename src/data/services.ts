export type Service = {
  id: string;
  n: string;
  title: string;
  tag: string;
  desc: string;
  long: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "crm",
    n: "01",
    title: "CRM & Automatización",
    tag: "Operación conectada",
    desc: "Conectamos tus herramientas y automatizamos el seguimiento para que ningún lead se enfríe.",
    long: "Instalamos y configuramos tu CRM, integramos tus canales y construimos los flujos que hacen que la operación funcione sola.",
    items: ["GoHighLevel, Kommo, Clientify", "Flujos con n8n", "Integraciones Meta + Google", "Pipelines y seguimiento"],
  },
  {
    id: "agentes",
    n: "02",
    title: "Agentes de IA",
    tag: "Atención 24/7",
    desc: "Agentes de chat y voz que atienden, califican y agendan por ti, a toda hora.",
    long: "Diseñamos agentes que hablan como tu marca, se conectan a tu CRM y escalan a un humano cuando hace falta.",
    items: ["Agentes de chat (WhatsApp, web)", "Agentes de voz", "Agentes a medida (Claude)", "Entrenamiento y handoff"],
  },
  {
    id: "desarrollo",
    n: "03",
    title: "Desarrollo & Producto",
    tag: "De idea a MVP",
    desc: "Sitios, plataformas y MVPs construidos para crecer.",
    long: "Desde una landing hasta un producto a medida o un MVP AI-forward, con un equipo full-stack que entrega de verdad.",
    items: ["Web a medida y WordPress", "Frontend React / Angular", "Backend Node, Supabase, Python", "MVPs AI-forward"],
  },
  {
    id: "pauta",
    n: "04",
    title: "Pauta & Performance",
    tag: "Crecimiento medible",
    desc: "Campañas que se miden, se optimizan y traen clientes.",
    long: "Estrategia y gestión de pauta en Meta y Google, con foco en retorno real y no en métricas de vanidad.",
    items: ["Meta Ads", "Google Ads", "Estrategia de pauta", "Optimización por datos"],
  },
  {
    id: "branding",
    n: "05",
    title: "Branding & Contenido",
    tag: "Marca que se siente",
    desc: "Identidad y contenido que hacen que tu marca conecte.",
    long: "Branding, piezas para redes, video y community management para una presencia consistente en cada canal.",
    items: ["Identidad y branding", "Diseño para redes", "Edición de video", "Community management"],
  },
  {
    id: "seo",
    n: "06",
    title: "SEO & GEO",
    tag: "Visibilidad real",
    desc: "Que te encuentren — en Google y en la IA.",
    long: "SEO técnico y de contenido más GEO para los nuevos buscadores generativos. Visibilidad donde tu cliente busca hoy.",
    items: ["SEO técnico y de contenido", "GEO (IA generativa)", "Google My Business", "Search Console & GA4"],
  },
  {
    id: "data",
    n: "07",
    title: "Data & BI",
    tag: "Decisiones con evidencia",
    desc: "Una sola vista de toda tu operación.",
    long: "Dashboards de BI, analítica y medición para que decidas con evidencia y no con intuición.",
    items: ["Dashboards BI", "Análisis de datos", "Tag Manager & GA4", "Reportes de operación"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export const stack = [
  "GoHighLevel",
  "Kommo",
  "Clientify",
  "Meta Ads",
  "Google Ads",
  "n8n",
  "React",
  "Node.js",
  "Supabase",
  "Python",
  "Figma",
  "Claude",
  "WordPress",
  "GA4",
];

export const orbitNodes = [
  { label: "web_&_producto", active: true, x: 0, y: -176 },
  { label: "crm_&_automatización", active: true, x: 322, y: -96 },
  { label: "data_&_bi", active: false, x: 322, y: 104 },
  { label: "pauta_&_performance", active: true, x: 0, y: 180 },
  { label: "agentes_de_ia", active: false, x: -322, y: 104 },
  { label: "branding_&_contenido", active: true, x: -322, y: -96 },
];
