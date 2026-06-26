import type { Lesson } from "../types";

export const generalLessons: Lesson[] = [
  {
    id: "instalar-python",
    n: "01",
    title: "Instalar Python en Windows",
    duration: "10 min",
    summary: "Video: descarga, instalación y verificación en Windows.",
    format: "video",
    slides: [
      {
        variant: "content",
        eyebrow: "General · Windows",
        title: "Instalar Python en Windows",
        subtitle: "Guía en video para descargar Python, activar PATH y verificar la instalación en CMD o PowerShell",
        blocks: [
          {
            type: "youtube",
            videoId: "gqwFz56XSxc",
            title: "Instalar Python en Windows",
          },
        ],
      },
    ],
  },
  {
    id: "patio-juegos",
    n: "02",
    title: "Patio de Juegos (Playground)",
    duration: "5 min",
    summary: "Editor online para probar código Python en clase sin instalar nada.",
    slides: [
      {
        variant: "cover",
        eyebrow: "General · Herramientas",
        title: "Patio de Juegos",
        subtitle: "Simulador y editor online para pruebas rápidas con Python",
      },
      {
        variant: "content",
        title: "Online IDE Pro",
        blocks: [
          {
            type: "columns",
            cols: 2,
            columns: [
              [
                {
                  type: "figure",
                  src: "/academy/python/playground-onlineide.png",
                  alt: "Interfaz de Online IDE Pro con editor Python y terminal",
                  caption: "Editor con resaltado de sintaxis, botón Run y terminal integrada.",
                },
              ],
              [
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Es un simulador y editor online para hacer pruebas pequeñas con código Python.",
                    "Úsalo en clase para copiar ejemplos, ejecutarlos y revisar la salida al instante.",
                    "No necesitas instalar nada: solo abre el playground en el navegador.",
                  ],
                },
                {
                  type: "link",
                  href: "https://www.onlineide.pro/playground/python",
                  label: "Abrir playground en nueva pestaña",
                  external: true,
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Para entregas, captura pantalla con el código y la salida del terminal visibles.",
                },
              ],
            ],
          },
        ],
      },
    ],
  },
];
