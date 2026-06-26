import type { Lesson } from "../types";

export const generalLessons: Lesson[] = [
  {
    id: "temario",
    n: "01",
    title: "Temario del curso",
    duration: "10 min",
    summary: "Ruta completa: Python base, funciones, POO, Streamlit y FastAPI.",
    slides: [
      {
        variant: "cover",
        eyebrow: "Python FCA",
        title: "Temario",
        subtitle: "Fundamentos de Python — material oficial del curso",
      },
      {
        variant: "content",
        title: "Unidad 1 — Fundamentos",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "¿Qué es Python?",
              "Tipos de datos de Python",
              "Variables",
              "Sentencias de control",
            ],
          },
        ],
      },
      {
        variant: "content",
        title: "Unidad 2 — Intermedio",
        blocks: [
          {
            type: "list",
            style: "check",
            items: ["Funciones", "Proyectos", "Programación Orientada a Objetos", "Archivos, JSON y SQLAlchemy"],
          },
        ],
      },
      {
        variant: "content",
        title: "Unidades 3, 4 y 5 — Aplicaciones",
        blocks: [
          {
            type: "cards",
            items: [
              { icon: "📊", title: "Unidad 3", text: "Streamlit — dashboards interactivos." },
              { icon: "⚡", title: "Unidad 4", text: "FastAPI — APIs REST." },
              { icon: "🗄️", title: "Unidad 5", text: "FastAPI y bases de datos." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "libro-python",
    n: "02",
    title: "Book — Introducción al curso",
    duration: "15 min",
    summary:
      "Este repositorio es la continuación práctica de tu formación en Lógica de Programación.",
    slides: [
      {
        variant: "cover",
        eyebrow: "General · Python FCA",
        title: "Programación con Python",
        subtitle: "De los diagramas de flujo al código que se ejecuta",
      },
      {
        variant: "content",
        title: "¿Qué encontrarás aquí?",
        blocks: [
          {
            type: "paragraph",
            text: "Este repositorio es la continuación práctica de tu formación en Lógica de Programación. Si ya sabes diagramar y pensar algorítmicamente, aquí aprenderás a darle vida a esas ideas utilizando uno de los lenguajes más potentes y elegantes del mundo: Python.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Cada módulo combina teoría en slides, videos de apoyo y actividades en clase.",
          },
        ],
      },
      {
        variant: "content",
        title: "Ruta del curso",
        blocks: [
          {
            type: "list",
            style: "numbered",
            items: [
              "Fundamentos — instalación, entorno y primer print(\"Hola Mundo\")",
              "Datos primitivos — int, float, str, bool y conversión de tipos",
              "Variables y strings — asignación, input(), f-strings",
              "Estructuras de datos — listas, tuplas, diccionarios y conjuntos",
              "Sentencias de control — if/elif/else, for, while y proyectos",
            ],
          },
        ],
      },
      {
        variant: "summary",
        title: "Antes de empezar",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "Revisa la guía de instalación en el siguiente tema",
              "Ten a mano el patio de juegos para probar código en clase",
              "Las clases en escritorio se navegan con flechas ← →",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "instalar-python",
    n: "03",
    title: "Instalar Python en Windows",
    duration: "10 min",
    summary: "Video: descarga, instalación y verificación en terminal.",
    format: "video",
    slides: [
      {
        variant: "content",
        eyebrow: "General · Configuración",
        title: "Instalar Python en Windows",
        subtitle: "Descarga desde python.org, marca «Add to PATH» y verifica con python --version",
        blocks: [
          {
            type: "imagePlaceholder",
            label: "Video: Instalar Python en Windows",
            note: "Sube el ID de YouTube del video del curso para reemplazar este marcador.",
          },
          {
            type: "list",
            style: "numbered",
            items: [
              "Entra a python.org/downloads y descarga la versión estable",
              "En el instalador, activa «Add python.exe to PATH»",
              "Abre CMD o PowerShell y ejecuta: python --version",
              "Opcional: instala VS Code y la extensión Python",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "patio-juegos",
    n: "04",
    title: "Patio de Juegos (Playground)",
    duration: "5 min",
    summary: "Entorno online para probar bloques de código en clase.",
    slides: [
      {
        variant: "cover",
        eyebrow: "General · Herramientas",
        title: "Patio de Juegos",
        subtitle: "Prueba código sin instalar nada en tu equipo",
      },
      {
        variant: "content",
        title: "¿Para qué sirve?",
        blocks: [
          {
            type: "paragraph",
            text: "Esta web pueden utilizarla para probar los distintos bloques de código que estaremos viendo, ya sea como ejemplo de los temas presentados o directamente para realizar las actividades en clase.",
          },
          {
            type: "cards",
            items: [
              {
                icon: "▶",
                title: "online-python.com",
                text: "Editor en el navegador — copia, ejecuta y captura pantalla para entregas.",
              },
              {
                icon: "🎮",
                title: "trinket.io/python3",
                text: "Alternativa con interfaz amigable para principiantes.",
              },
            ],
          },
          {
            type: "callout",
            variant: "tip",
            text: "En las actividades de Sentencias de Control usarás el playground para resolver ejercicios sin configurar un IDE.",
          },
        ],
      },
    ],
  },
];
