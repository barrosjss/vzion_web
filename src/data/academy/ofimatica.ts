import type { Course } from "./types";
import { fundamentosOfimaticaQuiz } from "./ofimatica/quizzes/fundamentosQuiz";
import { hojasCalculoQuiz } from "./ofimatica/quizzes/hojasCalculoQuiz";
import { buscarvBuscarhQuiz } from "./ofimatica/quizzes/buscarvBuscarhQuiz";
import { indiceCoincidirQuiz } from "./ofimatica/quizzes/indiceCoincidirQuiz";

export const ofimaticaCourse: Course = {
  id: "ofimatica",
  n: "02",
  title: "Ofimática",
  tag: "Productividad",
  desc: "Word, Excel y Google Sheets para el trabajo y la universidad.",
  long: "Curso práctico de herramientas de oficina: desde los fundamentos hasta hojas de cálculo avanzadas, con clases en formato presentación.",
  level: "Principiante",
  modules: [
    {
      id: "fundamentos",
      n: "01",
      title: "Fundamentos de ofimática",
      lessons: [
        {
          id: "que-es-ofimatica",
          n: "01",
          title: "¿Qué es la ofimática?",
          duration: "40 min",
          summary: "Suite ofimática, herramientas digitales y archivos de trabajo.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 01 · Fundamentos",
              title: "¿Qué es la ofimática?",
              subtitle: "Las herramientas digitales que todo profesional usa a diario",
            },
            {
              variant: "content",
              title: "Definición",
              blocks: [
                {
                  type: "paragraph",
                  text: "La ofimática es el conjunto de programas y herramientas digitales que permiten crear, editar, organizar y compartir información en el entorno laboral y académico.",
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "El término viene de «oficina» + «automática»: automatizar las tareas que antes se hacían en papel.",
                },
              ],
            },
            {
              variant: "content",
              title: "La suite ofimática",
              blocks: [
                {
                  type: "cards",
                  items: [
                    { icon: "📝", title: "Procesador de texto", text: "Word, Google Docs — informes, cartas, contratos" },
                    { icon: "📊", title: "Hoja de cálculo", text: "Excel, Google Sheets — datos, presupuestos, inventarios" },
                    { icon: "📽️", title: "Presentaciones", text: "PowerPoint, Google Slides — exposiciones y pitches" },
                    { icon: "📧", title: "Correo y calendario", text: "Outlook, Gmail — comunicación y agenda" },
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Archivos digitales",
              blocks: [
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Cada programa guarda archivos con extensiones propias (.docx, .xlsx, .pptx)",
                    "Los formatos en la nube (Google) viven en internet y se comparten con un enlace",
                    "Versiones, copias de seguridad y nombres claros evitan perder trabajo",
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Usa nombres descriptivos: Informe_Ventas_Marzo2026.xlsx en lugar de Documento1.xlsx",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Ofimática = herramientas para trabajar con documentos, datos y presentaciones",
                    "Las suites más usadas son Microsoft 365 y Google Workspace",
                    "Dominar la ofimática es una competencia transversal en cualquier carrera",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "por-que-aprender",
          n: "02",
          title: "¿Por qué es importante aprender ofimática?",
          duration: "35 min",
          summary: "Productividad, comunicación profesional y empleabilidad.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 02 · Fundamentos",
              title: "¿Por qué aprender ofimática?",
              subtitle: "Una competencia que te acompaña en toda tu carrera profesional",
            },
            {
              variant: "content",
              title: "Productividad real",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un profesional que domina ofimática hace en minutos lo que a otros les toma horas: informes, tablas, presentaciones y seguimiento de tareas.",
                },
                {
                  type: "boxes",
                  items: [
                    {
                      variant: "brand",
                      title: "Antes",
                      blocks: [{ type: "paragraph", text: "Calcular totales a mano, reescribir informes, imprimir y corregir en papel." }],
                    },
                    {
                      variant: "default",
                      title: "Con ofimática",
                      blocks: [{ type: "paragraph", text: "Fórmulas automáticas, plantillas reutilizables, cambios en tiempo real y colaboración en línea." }],
                    },
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Comunicación profesional",
              blocks: [
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Documentos bien formateados transmiten seriedad y orden",
                    "Presentaciones claras facilitan vender ideas y defender proyectos",
                    "Hojas de cálculo organizadas permiten tomar decisiones con datos",
                  ],
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "La forma en que presentas información dice tanto como el contenido mismo.",
                },
              ],
            },
            {
              variant: "content",
              title: "Empleabilidad",
              blocks: [
                {
                  type: "paragraph",
                  text: "En la mayoría de ofertas laborales — administración, contabilidad, logística, salud, educación — se exige manejo de Excel y herramientas de oficina.",
                },
                {
                  type: "cards",
                  items: [
                    { icon: "💼", title: "Requisito frecuente", text: "Excel intermedio aparece en más del 70% de vacantes administrativas" },
                    { icon: "📈", title: "Ascenso", text: "Quien domina reportes y presentaciones suele asumir más responsabilidad" },
                    { icon: "🌐", title: "Remoto y híbrido", text: "El trabajo digital exige fluidez con documentos en la nube" },
                  ],
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Ahorras tiempo y reduces errores en tareas repetitivas",
                    "Comunicas con estándar profesional",
                    "Aumentas tus opciones en el mercado laboral",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "uso-diario",
          n: "03",
          title: "Ofimática en el día a día",
          duration: "40 min",
          summary: "Escenarios cotidianos donde las herramientas ofimáticas marcan la diferencia.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 03 · Fundamentos",
              title: "Ofimática en el día a día",
              subtitle: "Ejemplos concretos de uso en el trabajo y la universidad",
            },
            {
              variant: "content",
              title: "Escenarios frecuentes",
              blocks: [
                {
                  type: "columns",
                  cols: 2,
                  columns: [
                    [
                      { type: "heading", text: "En la universidad", level: 3 },
                      {
                        type: "list",
                        style: "bullet",
                        items: [
                          "Trabajos escritos con formato APA o institucional",
                          "Cuadros de horario y listas de asistencia",
                          "Presentaciones de seminario o tesis",
                          "Seguimiento de notas y promedios",
                        ],
                      },
                    ],
                    [
                      { type: "heading", text: "En el trabajo", level: 3 },
                      {
                        type: "list",
                        style: "bullet",
                        items: [
                          "Informes semanales o mensuales de gestión",
                          "Control de inventario o gastos",
                          "Actas de reunión y comunicados internos",
                          "Propuestas comerciales con datos y gráficos",
                        ],
                      },
                    ],
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Un flujo de trabajo típico",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Recopilar datos en una hoja de cálculo",
                    "Analizar y resumir con tablas o gráficos",
                    "Redactar el informe en un procesador de texto",
                    "Preparar una presentación para exponer resultados",
                    "Compartir por correo o enlace en la nube",
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Buenas prácticas diarias",
              blocks: [
                {
                  type: "boxes",
                  items: [
                    {
                      title: "Guardar seguido",
                      blocks: [{ type: "paragraph", text: "Ctrl + S (o guardado automático en la nube) cada pocos minutos." }],
                    },
                    {
                      title: "Versionar",
                      blocks: [{ type: "paragraph", text: "Informe_v1, Informe_v2_final — evita sobrescribir sin querer." }],
                    },
                    {
                      title: "Respaldar",
                      blocks: [{ type: "paragraph", text: "Copia en Drive, OneDrive o disco externo para no perder trabajo." }],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "Nunca envíes un archivo sin revisar nombres, fechas y que los datos cuadren.",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "La ofimática aparece en casi cada tarea administrativa o académica",
                    "Word, Excel y PowerPoint suelen usarse juntos en un mismo proyecto",
                    "Hábitos simples (guardar, versionar, respaldar) evitan problemas graves",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "por-carrera",
          n: "04",
          title: "Ofimática en diferentes carreras",
          duration: "45 min",
          summary: "Cómo se aplica en administración, leyes, contabilidad, diseño y más.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 04 · Fundamentos",
              title: "Ofimática por carrera",
              subtitle: "La misma base de herramientas, distintos contextos profesionales",
            },
            {
              variant: "content",
              title: "Administración y logística",
              blocks: [
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Excel: inventarios, pedidos, indicadores de despacho",
                    "Word: procedimientos, políticas internas, cartas formales",
                    "PowerPoint: reportes de gestión ante dirección",
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "En logística, una hoja bien armada puede rastrear un pedido desde el almacén hasta la entrega.",
                },
              ],
            },
            {
              variant: "content",
              title: "Contabilidad y finanzas",
              blocks: [
                {
                  type: "columns",
                  cols: 2,
                  columns: [
                    [
                      { type: "heading", text: "Herramientas clave", level: 3 },
                      {
                        type: "list",
                        style: "bullet",
                        items: ["Libro mayor y balances en Excel", "Conciliaciones bancarias", "Presupuestos y flujo de caja", "Gráficos de ingresos vs. gastos"],
                      },
                    ],
                    [
                      { type: "heading", text: "Por qué importa", level: 3 },
                      {
                        type: "paragraph",
                        text: "Un error en una celda puede descuadrar un balance. El dominio de fórmulas y formato numérico es esencial para contadores y auxiliares contables.",
                      },
                    ],
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Derecho y ciencias sociales",
              blocks: [
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Word: contratos, demandas, escritos con numeración y márgenes legales",
                    "Excel: cronologías de casos, listados de clientes, honorarios",
                    "Presentaciones: sustentaciones orales y audiencias",
                  ],
                },
                {
                  type: "quote",
                  text: "Un abogado que organiza expedientes en tablas y documentos estructurados gana tiempo para el análisis jurídico.",
                },
              ],
            },
            {
              variant: "content",
              title: "Diseño gráfico y comunicación",
              blocks: [
                {
                  type: "cards",
                  items: [
                    { icon: "🎨", title: "Presentaciones", text: "PowerPoint y Canva para pitches visuales con identidad de marca" },
                    { icon: "📋", title: "Briefs y propuestas", text: "Word o Docs para documentar requerimientos del cliente" },
                    { icon: "📊", title: "Métricas", text: "Sheets para seguimiento de campañas, alcance y entregables" },
                  ],
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "El diseñador no solo crea piezas visuales: también presenta ideas y justifica decisiones con documentos claros.",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Toda carrera usa ofimática, aunque con énfasis distinto",
                    "Excel domina donde hay números; Word donde hay texto formal",
                    "Aprender la base te permite adaptarte a cualquier sector",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "fundamentos-ofimatica-quiz",
          n: "05",
          title: "Cuestionario — Fundamentos",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del módulo.",
          format: "quiz",
          quiz: fundamentosOfimaticaQuiz,
        },
      ],
    },
    {
      id: "hojas-calculo",
      n: "02",
      title: "Hojas de cálculo",
      lessons: [
        {
          id: "intro-excel",
          n: "05",
          title: "Introducción a Excel",
          duration: "45 min",
          summary: "Qué es Excel, para qué sirve y conceptos básicos del libro de trabajo.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 05 · Hojas de cálculo",
              title: "Introducción a Excel",
              subtitle: "La herramienta más usada para trabajar con datos",
            },
            {
              variant: "content",
              title: "¿Qué es Microsoft Excel?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Excel es una hoja de cálculo: un programa que organiza información en filas y columnas para calcular, analizar y visualizar datos.",
                },
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Parte de Microsoft 365 / Office",
                    "Disponible en Windows, Mac y versión web",
                    "Usado en empresas, universidades y emprendimientos de todo el mundo",
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "¿Para qué sirve?",
              blocks: [
                {
                  type: "cards",
                  items: [
                    { icon: "🧮", title: "Calcular", text: "Suma, promedios, porcentajes y fórmulas automáticas" },
                    { icon: "📋", title: "Registrar", text: "Inventarios, asistencia, ventas, gastos" },
                    { icon: "📉", title: "Analizar", text: "Tablas dinámicas, gráficos y tendencias" },
                    { icon: "📤", title: "Compartir", text: "Exportar a PDF, vincular con otros programas" },
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Conceptos básicos",
              blocks: [
                {
                  type: "paragraph",
                  text: "Excel organiza la información en tres niveles: el libro (el archivo), las hojas (pestañas dentro del archivo) y las celdas (cada casilla de la cuadrícula).",
                },
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Libro — el archivo .xlsx que guardas en tu computador",
                    "Hoja — cada pestaña dentro del libro",
                    "Celda — la intersección de una columna y una fila",
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "El libro",
              blocks: [
                {
                  type: "paragraph",
                  text: "El libro es el archivo completo de Excel. Arriba verás su nombre — por ejemplo «Libro1.xlsx» — antes de guardarlo por primera vez.",
                },
                {
                  type: "figure",
                  src: "/academy/ofimatica/excel/libro.png",
                  alt: "Barra de título de Excel resaltando el nombre del archivo Libro1",
                  caption: "El nombre del archivo en la barra superior es tu libro de trabajo. Un mismo libro puede contener varias hojas.",
                },
              ],
            },
            {
              variant: "content",
              title: "Las hojas",
              blocks: [
                {
                  type: "paragraph",
                  text: "Cada hoja es una pestaña en la parte inferior. Puedes tener una sola hoja o varias — por ejemplo Ventas, Gastos, Inventario — dentro del mismo libro.",
                },
                {
                  type: "columns",
                  cols: 2,
                  columns: [
                    [
                      {
                        type: "figure",
                        src: "/academy/ofimatica/excel/hoja-una.png",
                        alt: "Pestaña Hoja1 resaltada en la parte inferior de Excel",
                        caption: "Un libro con una hoja: la pestaña «Hoja1».",
                      },
                    ],
                    [
                      {
                        type: "figure",
                        src: "/academy/ofimatica/excel/hoja-varias.png",
                        alt: "Pestañas Hoja1 y Hoja2 en Excel, con Hoja2 activa",
                        caption: "Un libro con varias hojas: cambias de pestaña para ver cada una.",
                      },
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "El botón + junto a las pestañas sirve para agregar una hoja nueva.",
                },
              ],
            },
            {
              variant: "content",
              title: "La celda",
              blocks: [
                {
                  type: "paragraph",
                  text: "La celda es cada casilla de la cuadrícula. Se identifica con la letra de la columna y el número de la fila — por ejemplo C5 es columna C, fila 5.",
                },
                {
                  type: "figure",
                  src: "/academy/ofimatica/excel/celda.png",
                  alt: "Celda C5 seleccionada en Excel con el cuadro de nombre mostrando C5",
                  caption: "La celda activa tiene borde verde. El cuadro de nombre (arriba a la izquierda) muestra su dirección — aquí: C5.",
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "Para referirte a una celda en otra hoja escribes: Hoja1!C2 (celda C2 en la hoja «Hoja1»).",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Excel organiza datos en celdas dentro de hojas y libros",
                    "Sirve para calcular, registrar, analizar y presentar información",
                    "Conocer la estructura básica es el primer paso antes de usar fórmulas",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "interfaz-excel",
          n: "06",
          title: "Interfaz de Excel y cómo usarla",
          duration: "50 min",
          summary: "Cinta de opciones, área de trabajo, barra de fórmulas y atajos esenciales.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Clase 06 · Hojas de cálculo",
              title: "Interfaz de Excel",
              subtitle: "Conoce cada zona de la pantalla y navega con confianza",
            },
            {
              variant: "content",
              title: "La cinta de opciones",
              blocks: [
                {
                  type: "paragraph",
                  text: "En la parte superior, la cinta agrupa comandos en pestañas: Inicio, Insertar, Diseño de página, Fórmulas, Datos, Revisar, Vista.",
                },
                {
                  type: "figure",
                  src: "/academy/ofimatica/excel/cinta-opciones.png",
                  alt: "Cinta de opciones de Excel con pestañas, grupos e indicador de cuadro de diálogo señalados",
                  caption: "Pestañas (arriba), grupos de comandos (por ejemplo Estilos) e indicador de cuadro de diálogo (esquina del grupo Alineación).",
                },
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "Inicio — formato, copiar, pegar, fuentes y alineación",
                    "Insertar — tablas, gráficos, imágenes, formas",
                    "Fórmulas — biblioteca de funciones (SUMA, SI, BUSCARV…)",
                    "Datos — filtros, ordenar, validación",
                  ],
                },
              ],
            },
            {
              variant: "content",
              title: "Área de trabajo",
              blocks: [
                {
                  type: "paragraph",
                  text: "La cuadrícula central es donde trabajas. Las filas van numeradas y las columnas con letras. Abajo están las pestañas de cada hoja.",
                },
                {
                  type: "figure",
                  src: "/academy/ofimatica/excel/area-trabajo.png",
                  alt: "Área de trabajo de Excel con la hoja de cálculo, barras de desplazamiento y pestañas de hojas señaladas",
                  caption: "La hoja de cálculo (cuadrícula central), las barras de desplazamiento y las hojas del libro en la parte inferior.",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "La celda activa tiene un borde verde (o el color de tu tema). Lo que escribas irá ahí.",
                },
              ],
            },
            {
              variant: "content",
              title: "Barra de fórmulas",
              blocks: [
                {
                  type: "paragraph",
                  text: "Justo debajo de la cinta: el cuadro de nombre muestra la celda seleccionada y la barra de fórmulas permite editar su contenido.",
                },
                {
                  type: "figure",
                  src: "/academy/ofimatica/excel/barra-formulas.png",
                  alt: "Barra de fórmulas de Excel con el cuadro de nombre, botones Cancelar, Aceptar y fx resaltados",
                  caption: "Cuadro de nombre (celda activa), botones de edición y barra de fórmulas, justo debajo de la cinta.",
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "Toda fórmula en Excel empieza con el signo = (igual). Ejemplo: =SUMA(A1:A10)",
                },
              ],
            },
            {
              variant: "content",
              title: "Atajos esenciales",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Ctrl + S — Guardar",
                    "Ctrl + Z — Deshacer",
                    "Ctrl + C / Ctrl + V — Copiar y pegar",
                    "Ctrl + Flechas — Ir al borde de los datos",
                    "F2 — Editar la celda activa",
                    "Ctrl + Home — Ir a la celda A1",
                  ],
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "Cinta = comandos por categoría",
                    "Cuadrícula + pestañas = dónde vive tu información",
                    "Barra de fórmulas = editar cálculos",
                    "Los atajos aceleran el trabajo diario",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "interfaz-sheets",
          n: "07",
          title: "Google Sheets: interfaz y uso",
          duration: "10 min",
          summary: "Video: interfaz de Google Sheets y uso básico en la nube.",
          slides: [
            {
              variant: "content",
              eyebrow: "Clase 07 · Hojas de cálculo",
              title: "Google Sheets: interfaz y uso",
              subtitle: "Hojas de cálculo en la nube con colaboración en tiempo real",
              blocks: [
                {
                  type: "youtube",
                  videoId: "OsaLaWErpRw",
                  title: "Google Sheets: interfaz y uso",
                },
              ],
            },
          ],
        },
        {
          id: "sheets-movil",
          n: "08",
          title: "Google Sheets desde el móvil",
          duration: "5 min",
          summary: "Video: Google Sheets en celular y tablet.",
          slides: [
            {
              variant: "content",
              eyebrow: "Clase 08 · Hojas de cálculo",
              title: "Google Sheets desde el móvil",
              subtitle: "Consulta y edita tus hojas desde el celular o la tablet",
              blocks: [
                {
                  type: "youtube",
                  videoId: "h8C8KhGRJBI",
                  title: "Google Sheets desde el móvil",
                },
              ],
            },
          ],
        },
        {
          id: "sheets-descargar-movil",
          n: "09",
          title: "Descargar archivos desde el móvil",
          duration: "4 min",
          summary: "Short: cómo descargar una hoja de Google Sheets en el celular.",
          slides: [
            {
              variant: "content",
              eyebrow: "Clase 09 · Hojas de cálculo",
              title: "Descargar archivos desde el móvil",
              subtitle: "Lleva tu hoja al celular en Excel, PDF o CSV sin depender de la conexión",
              blocks: [
                {
                  type: "paragraph",
                  text: "Cuando necesitas trabajar sin internet o compartir el archivo por WhatsApp, conviene descargarlo al dispositivo. El menú de Google Sheets en móvil permite exportar en varios formatos.",
                },
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Abre la hoja en la app de Google Sheets o en el navegador del celular",
                    "Toca el menú ⋮ (tres puntos) en la esquina superior",
                    "Elige «Descargar» o «Compartir y exportar» → «Guardar como»",
                    "Selecciona el formato: Excel (.xlsx), PDF o CSV",
                    "Confirma: el archivo queda en Descargas o en la carpeta que elijas",
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Si solo necesitas leer datos, PDF basta. Si vas a editar en otro programa, elige Excel (.xlsx).",
                },
                {
                  type: "youtube",
                  videoId: "yVXQ-MSHF0I",
                  title: "Descargar un archivo en Google Sheets desde el celular",
                  short: true,
                },
              ],
            },
          ],
        },
        {
          id: "hojas-calculo-quiz",
          n: "10",
          title: "Cuestionario — Hojas de cálculo",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del módulo.",
          format: "quiz",
          quiz: hojasCalculoQuiz,
        },
      ],
    },
    {
      id: "excel-avanzado",
      n: "03",
      title: "Excel avanzado y productividad",
      lessons: [
        {
          id: "buscarv-buscarh",
          n: "10",
          title: "BUSCARV y BUSCARH",
          duration: "2 h",
          summary: "Funciones de búsqueda vertical y horizontal entre tablas.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Módulo avanzado · Día 1",
              title: "BUSCARV y BUSCARH",
              subtitle: "Buscar datos entre tablas — la función más pedida en el trabajo administrativo",
            },
            {
              variant: "content",
              title: "¿Qué es una función de búsqueda?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Resuelve un problema cotidiano: tienes un identificador (código, cédula, SKU) en una lista y necesitas traer un dato relacionado que está en otra tabla — sin buscar fila por fila ni copiar y pegar.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARV(valor_buscado; tabla; columna; [coincidencia_exacta])",
                },
                {
                  type: "paragraph",
                  text: "En la práctica aparece en inventarios (código → precio), nómina (cédula → cargo), ventas (cliente → ciudad) y reportes académicos (matrícula → nota). Si dos hojas comparten un campo en común, probablemente puedas unirlas con una función de búsqueda.",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARV — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "BUSCARV busca un valor en la primera columna de una tabla y devuelve un dato de una columna a la derecha. Es la opción natural cuando tus encabezados están en vertical y el código está a la izquierda.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARV(valor_buscado; tabla; número_columna; [coincidencia_exacta])",
                },
                {
                  type: "quote",
                  text: "«Tengo el código P002 en mi pedido y quiero que Excel traiga automáticamente su precio desde el catálogo de productos.»",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARV — puntos clave",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "El valor buscado debe estar en la primera columna de la tabla",
                    "Indicas el número de columna cuyo valor quieres devolver (1 = primera columna de la tabla)",
                    "FALSO (o 0) = coincidencia exacta — la más usada en trabajo",
                    "Si no encuentra el valor, devuelve #N/D: revisa códigos duplicados o espacios extra",
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Piensa: «Busco en la columna izquierda y traigo algo de una columna a la derecha».",
                },
              ],
            },
            {
              variant: "practice",
              title: "BUSCARV — ejemplo práctico",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un almacén registra ventas con códigos de producto. En otra hoja está el catálogo con precios. Copia las tablas, pega la fórmula en la celda resaltada y arrastra hacia abajo para completar el pedido.",
                },
                {
                  type: "columns",
                  cols: 2,
                  columns: [
                    [
                      {
                        type: "spreadsheet",
                        title: "Hoja «Productos»",
                        headers: ["Código", "Producto", "Precio"],
                        rows: [
                          ["P001", "Cuaderno", "4500"],
                          ["P002", "Bolígrafo", "1200"],
                          ["P003", "Marcador", "2800"],
                        ],
                        copyLabel: "Copiar catálogo",
                        caption: "Pega en la celda A1 de una hoja llamada Productos.",
                      },
                    ],
                    [
                      {
                        type: "spreadsheet",
                        title: "Hoja «Ventas»",
                        headers: ["Código", "Cantidad", "Precio unitario"],
                        rows: [
                          ["P002", "10", ""],
                          ["P001", "3", ""],
                          ["P003", "5", ""],
                        ],
                        highlights: [
                          { row: 0, col: 2 },
                          { row: 1, col: 2 },
                          { row: 2, col: 2 },
                        ],
                        copyLabel: "Copiar pedido",
                        caption: "Pega en A1 de la hoja Ventas. La columna C es donde va la fórmula.",
                      },
                    ],
                  ],
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARV(A2;Productos!A:C;3;FALSO)",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "En clase: pega primero el catálogo, luego el pedido, escribe la fórmula en C2 y arrastra hasta C4. Compara el resultado con la tabla de productos para validar.",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARV — demostración",
              blocks: [
                {
                  type: "paragraph",
                  text: "En este video se aplica BUSCARV con el mismo escenario del ejemplo: un código en la hoja de ventas y el precio que se trae desde el catálogo. Observa dónde se escribe la fórmula y cómo se arrastra.",
                },
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Identifica la celda con el código a buscar (columna A)",
                    "Fíjate en el rango del catálogo que se referencia",
                    "Comprueba que la columna 3 devuelve el precio correcto",
                    "Arrastra la fórmula hacia abajo para completar el pedido",
                  ],
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Pausa el video en la barra de fórmulas y repite los pasos en tu archivo con las tablas que copiaste en la slide anterior.",
                },
                {
                  type: "youtube",
                  videoId: "DnYbcfWtCDc",
                  title: "BUSCARV en Excel — demostración",
                  short: true,
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARH — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "BUSCARH hace lo mismo que BUSCARV, pero en horizontal: busca el valor en la primera fila de la tabla y devuelve un dato de una fila inferior. Sirve cuando los periodos, meses o categorías están en columnas.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARH(valor_buscado; tabla; número_fila; [coincidencia_exacta])",
                },
                {
                  type: "quote",
                  text: "«Tengo los meses como encabezados en la fila 1 y quiero saber cuánto se vendió en febrero sin contar columnas manualmente.»",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARH — puntos clave",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "El valor buscado debe estar en la primera fila del rango",
                    "Indicas el número de fila cuyo valor quieres devolver (1 = primera fila del rango)",
                    "FALSO (o 0) para coincidencia exacta del mes o etiqueta",
                    "Menos frecuente que BUSCARV; aparece en reportes con estructura horizontal",
                  ],
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "Si tus datos están en columnas verticales, casi siempre conviene BUSCARV. Reserva BUSCARH para tablas «acostadas».",
                },
              ],
            },
            {
              variant: "practice",
              title: "BUSCARH — ejemplo práctico",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un reporte de ventas tiene los meses en la fila superior y las métricas en filas debajo. Copia la tabla, escribe la consulta en B5 y cambia el mes para demostrar la búsqueda horizontal.",
                },
                {
                  type: "spreadsheet",
                  title: "Hoja «Ventas mensuales»",
                  headers: ["", "Ene", "Feb", "Mar"],
                  rows: [
                    ["Ventas", "120", "145", "130"],
                    ["Meta", "100", "150", "140"],
                  ],
                  highlights: [{ row: 0, col: 2 }],
                  copyLabel: "Copiar reporte",
                  caption: "Pega en B1. La celda resaltada (D2) muestra las ventas de febrero: 145.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARH(\"Feb\";B1:E3;2;FALSO)",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "En clase: tras pegar la tabla, coloca la fórmula en una celda libre (por ejemplo C5). Cambia «Feb» por «Mar» y verifica que el valor pase de 145 a 130.",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARH — demostración",
              subtitle: "Video: aplicación paso a paso de la búsqueda horizontal en Excel",
              blocks: [
                {
                  type: "youtube",
                  videoId: "T2NcbRLtdk0",
                  title: "BUSCARH en Excel — demostración",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "BUSCARV une tablas cuando el código está en la primera columna",
                    "BUSCARH une tablas cuando el criterio está en la primera fila",
                    "Usa FALSO para coincidencia exacta en códigos y etiquetas",
                    "Copia las tablas y fórmulas de los ejemplos para practicar en vivo",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "buscarv-buscarh-quiz",
          n: "11",
          title: "Cuestionario — BUSCARV y BUSCARH",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del tema.",
          format: "quiz",
          quiz: buscarvBuscarhQuiz,
        },
        {
          id: "indice-coincidir",
          n: "12",
          title: "INDICE + COINCIDIR y funciones condicionales",
          duration: "2 h",
          summary: "Búsqueda flexible bidireccional. SUMAR.SI, CONTAR.SI, PROMEDIO.SI.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Módulo avanzado · Día 2",
              title: "INDICE + COINCIDIR y funciones condicionales",
              subtitle: "Búsqueda flexible en cualquier dirección y cálculos con criterios",
            },
            {
              variant: "content",
              title: "¿Por qué INDICE + COINCIDIR?",
              blocks: [
                {
                  type: "paragraph",
                  text: "BUSCARV solo busca hacia la derecha y exige que el valor esté en la primera columna. Cuando necesitas traer un dato a la izquierda del criterio o trabajar con tablas más flexibles, combinas COINCIDIR (encuentra la posición) con INDICE (devuelve el valor de esa fila o columna).",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=INDICE(rango_resultado; COINCIDIR(valor_buscado; tabla; 0))",
                },
                {
                  type: "paragraph",
                  text: "Útil en nómina (buscar por nombre y traer cédula), inventarios (buscar producto y traer código) o reportes donde el criterio no está siempre a la izquierda.",
                },
              ],
            },
            {
              variant: "content",
              title: "INDICE + COINCIDIR — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "COINCIDIR localiza en qué fila (o columna) está un valor. INDICE lee el dato que necesitas de esa misma posición. Juntas sustituyen a BUSCARV cuando la columna que quieres devolver queda a la izquierda del criterio.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=COINCIDIR(valor_buscado; tabla; [tipo_coincidencia])",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=INDICE(rango_resultado; número_fila; [número_columna])",
                },
                {
                  type: "quote",
                  text: "«Sé el nombre del producto y quiero que Excel me devuelva su código, que está en una columna a la izquierda — BUSCARV no puede hacerlo.»",
                },
              ],
            },
            {
              variant: "practice",
              title: "INDICE + COINCIDIR — ejemplo práctico",
              blocks: [
                {
                  type: "paragraph",
                  text: "El catálogo tiene el código a la izquierda y el producto en el centro. Queremos buscar «Bolígrafo» y traer su código — algo que BUSCARV no puede hacer. Copia la tabla y pega la fórmula en la celda resaltada.",
                },
                {
                  type: "spreadsheet",
                  title: "Hoja «Catálogo»",
                  headers: ["Código", "Producto", "Precio"],
                  rows: [
                    ["P001", "Cuaderno", "4500"],
                    ["P002", "Bolígrafo", "1200"],
                    ["P003", "Marcador", "2800"],
                    ["", "", ""],
                  ],
                  highlights: [{ row: 3, col: 0 }],
                  copyLabel: "Copiar catálogo",
                  caption: "Pega en A1. La celda resaltada (A5) es donde va el resultado de la fórmula.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=INDICE(A2:A4;COINCIDIR(\"Bolígrafo\";B2:B4;0))",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "En clase: el resultado en A5 debe ser P002. Cambia «Bolígrafo» por «Marcador» en la fórmula y verifica que devuelve P003.",
                },
              ],
            },
            {
              variant: "content",
              title: "Funciones condicionales — ¿para qué sirven?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Cuando necesitas sumar, contar o promediar solo los registros que cumplen una condición — una región, un vendedor, un rango de fechas — sin filtrar manualmente ni crear tablas auxiliares.",
                },
                {
                  type: "list",
                  style: "bullet",
                  items: [
                    "SUMAR.SI — suma valores que cumplen un criterio",
                    "CONTAR.SI — cuenta cuántas celdas cumplen un criterio",
                    "PROMEDIO.SI — calcula el promedio de los valores que cumplen un criterio",
                  ],
                },
                {
                  type: "paragraph",
                  text: "Aparecen en reportes de ventas por zona, control de asistencia, inventario por categoría y cualquier tabla donde el análisis depende de un filtro.",
                },
              ],
            },
            {
              variant: "content",
              title: "Funciones condicionales — repaso en video",
              blocks: [
                {
                  type: "youtube",
                  videoId: "jq5A7Zsbfow",
                  title: "Funciones condicionales en Excel",
                  short: true,
                },
              ],
            },
            {
              variant: "content",
              title: "SUMAR.SI — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Suma los valores de un rango solo cuando otra columna cumple el criterio que defines. Es la función condicional más usada en informes comerciales y financieros.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=SUMAR.SI(rango_criterio; criterio; [rango_suma])",
                },
                {
                  type: "quote",
                  text: "«Quiero el total de ventas de la región Norte sin sumar manualmente fila por fila.»",
                },
              ],
            },
            {
              variant: "practice",
              title: "SUMAR.SI — ejemplo práctico",
              blocks: [
                {
                  type: "paragraph",
                  text: "Tabla de ventas por vendedor y región. Copia los datos y calcula el total vendido solo en la región Norte.",
                },
                {
                  type: "spreadsheet",
                  title: "Hoja «Ventas»",
                  headers: ["Vendedor", "Región", "Venta"],
                  rows: [
                    ["Ana", "Norte", "1200"],
                    ["Luis", "Sur", "850"],
                    ["María", "Norte", "1500"],
                    ["Pedro", "Norte", "920"],
                  ],
                  highlights: [{ row: 0, col: 1 }, { row: 2, col: 1 }, { row: 3, col: 1 }],
                  copyLabel: "Copiar ventas",
                  caption: "Pega en A1. Las celdas resaltadas son las filas que debe incluir la suma.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=SUMAR.SI(B2:B5;\"Norte\";C2:C5)",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "El resultado esperado es 3620. Prueba cambiar el criterio a «Sur» y verifica que devuelve 850.",
                },
              ],
            },
            {
              variant: "content",
              title: "CONTAR.SI — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Cuenta cuántas celdas de un rango cumplen un criterio. No suma valores: solo responde «¿cuántas veces aparece o se cumple esta condición?».",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=CONTAR.SI(rango; criterio)",
                },
                {
                  type: "quote",
                  text: "«¿Cuántos pedidos se hicieron en la región Norte? No me importa el monto, solo la cantidad de registros.»",
                },
              ],
            },
            {
              variant: "content",
              title: "PROMEDIO.SI — ¿para qué sirve?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Calcula el promedio de un rango numérico solo para las filas que cumplen un criterio. Combina la lógica de SUMAR.SI con un promedio automático.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=PROMEDIO.SI(rango_criterio; criterio; [rango_promedio])",
                },
                {
                  type: "quote",
                  text: "«¿Cuál fue el ticket promedio de venta en la región Norte?»",
                },
              ],
            },
            {
              variant: "practice",
              title: "Funciones condicionales — ejemplo integrado",
              blocks: [
                {
                  type: "paragraph",
                  text: "Con la misma tabla de ventas, escribe las tres fórmulas en celdas libres para comparar resultados: cuánto suma, cuántos registros y cuál es el promedio en la región Norte.",
                },
                {
                  type: "spreadsheet",
                  title: "Hoja «Ventas» (reutilizar o copiar de nuevo)",
                  headers: ["Vendedor", "Región", "Venta"],
                  rows: [
                    ["Ana", "Norte", "1200"],
                    ["Luis", "Sur", "850"],
                    ["María", "Norte", "1500"],
                    ["Pedro", "Norte", "920"],
                  ],
                  copyLabel: "Copiar ventas",
                  caption: "Pega en A1 si no tienes la tabla de la slide anterior.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=SUMAR.SI(B2:B5;\"Norte\";C2:C5)",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=CONTAR.SI(B2:B5;\"Norte\")",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=PROMEDIO.SI(B2:B5;\"Norte\";C2:C5)",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "En clase: coloca las tres fórmulas en E2, E3 y E4. Resultados esperados: 3620 · 3 · 1206,67.",
                },
              ],
            },
            {
              variant: "summary",
              title: "Resumen",
              blocks: [
                {
                  type: "list",
                  style: "check",
                  items: [
                    "INDICE + COINCIDIR busca en cualquier dirección, no solo hacia la derecha",
                    "COINCIDIR encuentra la posición; INDICE devuelve el valor de esa fila",
                    "SUMAR.SI, CONTAR.SI y PROMEDIO.SI analizan datos con criterios",
                    "Copia las tablas y fórmulas de los ejemplos para practicar en vivo",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "indice-coincidir-quiz",
          n: "13",
          title: "Cuestionario — INDICE + COINCIDIR",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del tema.",
          format: "quiz",
          quiz: indiceCoincidirQuiz,
        },
      ],
    },
  ],
};
