import type { Course } from "./types";

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
          summary: "Video corto: Google Sheets en celular y tablet.",
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
                  short: true,
                },
              ],
            },
          ],
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
          n: "09",
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
                  text: "Permite encontrar un valor en una tabla y devolver información relacionada. Ejemplo: dado un código de producto, obtener su precio o nombre.",
                },
                {
                  type: "code",
                  language: "excel",
                  code: "=BUSCARV(valor_buscado; tabla; columna; [coincidencia_exacta])",
                },
              ],
            },
            {
              variant: "content",
              title: "BUSCARV — búsqueda vertical",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "El valor buscado debe estar en la primera columna de la tabla",
                    "Indicas el número de columna cuyo valor quieres devolver",
                    "FALSO (o 0) = coincidencia exacta — la más usada en trabajo",
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
              variant: "content",
              title: "BUSCARH — búsqueda horizontal",
              blocks: [
                {
                  type: "paragraph",
                  text: "Igual que BUSCARV pero el valor buscado está en la primera fila. Útil cuando los encabezados están en horizontal.",
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "En la práctica BUSCARV se usa mucho más; BUSCARH aparece en reportes con estructura horizontal.",
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
                    "BUSCARV une tablas por un código o identificador común",
                    "Dominarla evita copiar y pegar manualmente entre listas",
                    "Contenido ampliado disponible en actividades prácticas del curso",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "indice-coincidir",
          n: "10",
          title: "INDICE + COINCIDIR y funciones condicionales",
          duration: "2 h",
          summary: "Búsqueda flexible bidireccional. SUMAR.SI, CONTAR.SI, PROMEDIO.SI.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Módulo avanzado · Día 2",
              title: "INDICE + COINCIDIR",
              subtitle: "Más flexible que BUSCARV para búsquedas en cualquier dirección",
            },
            {
              variant: "content",
              title: "Por qué INDICE + COINCIDIR",
              blocks: [
                {
                  type: "paragraph",
                  text: "A diferencia de BUSCARV, no exige que el valor buscado esté en la primera columna. Puedes buscar hacia la izquierda o en tablas más complejas.",
                },
                {
                  type: "list",
                  style: "bullet",
                  items: ["SUMAR.SI — suma solo las celdas que cumplen un criterio", "CONTAR.SI — cuenta cuántas veces aparece un valor", "PROMEDIO.SI — promedio condicionado"],
                },
              ],
            },
          ],
        },
        {
          id: "tablas-dinamicas",
          n: "11",
          title: "Tablas dinámicas",
          duration: "2 h",
          summary: "Crear, configurar y filtrar tablas dinámicas para resumir datos.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Módulo avanzado · Días 4-5",
              title: "Tablas dinámicas",
              subtitle: "Resume miles de filas en segundos sin escribir fórmulas complejas",
            },
            {
              variant: "content",
              title: "¿Qué es una tabla dinámica?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Herramienta que agrupa, suma, cuenta o promedia datos arrastrando campos. Ideal para ventas por región, gastos por mes o asistencia por curso.",
                },
                {
                  type: "callout",
                  variant: "tip",
                  text: "Requisito: tus datos deben estar en formato de tabla con encabezados en la primera fila, sin filas vacías en medio.",
                },
              ],
            },
          ],
        },
        {
          id: "presentaciones-ia",
          n: "12",
          title: "Presentaciones, bases de datos e IA",
          duration: "2 h",
          summary: "PowerPoint ejecutivo, Access básico, Copilot y ética digital.",
          slides: [
            {
              variant: "cover",
              eyebrow: "Módulo avanzado · Días 7-11",
              title: "Presentaciones, BD e IA",
              subtitle: "Comunicación visual, datos relacionales y herramientas de inteligencia artificial",
            },
            {
              variant: "content",
              title: "Panorama del módulo avanzado",
              blocks: [
                {
                  type: "columns",
                  cols: 3,
                  columns: [
                    [
                      { type: "heading", text: "Presentaciones", level: 3 },
                      { type: "list", style: "bullet", items: ["Diseño ejecutivo", "Branding", "Canva y alternativas"] },
                    ],
                    [
                      { type: "heading", text: "Bases de datos", level: 3 },
                      { type: "list", style: "bullet", items: ["Conceptos relacionales", "Access básico", "Excel como BD"] },
                    ],
                    [
                      { type: "heading", text: "IA", level: 3 },
                      { type: "list", style: "bullet", items: ["Copilot en Excel", "ChatGPT", "Ética digital"] },
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "note",
                  text: "Este bloque se irá ampliando con el material del curso intensivo. La IA asiste, pero tú debes verificar cada resultado.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
