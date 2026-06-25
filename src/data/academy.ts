export type LessonBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; variant: "tip" | "note" | "warning"; text: string };

export type Lesson = {
  id: string;
  n: string;
  title: string;
  duration?: string;
  summary: string;
  blocks: LessonBlock[];
};

export type AcademyModule = {
  id: string;
  n: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  n: string;
  title: string;
  tag: string;
  desc: string;
  long: string;
  level: string;
  modules: AcademyModule[];
};

export const courses: Course[] = [
  {
    id: "python",
    n: "01",
    title: "Programación con Python",
    tag: "Fundamentos",
    desc: "Desde cero hasta escribir programas con lógica, datos y archivos.",
    long: "Curso introductorio de Python orientado a estudiantes que empiezan a programar. Cada clase construye sobre la anterior con ejercicios prácticos.",
    level: "Principiante",
    modules: [
      {
        id: "intro",
        n: "01",
        title: "Introducción a Python",
        lessons: [
          {
            id: "que-es-python",
            n: "01",
            title: "¿Qué es Python y por qué aprenderlo?",
            duration: "45 min",
            summary: "Contexto del lenguaje, instalación y primer programa.",
            blocks: [
              { type: "paragraph", text: "Python es un lenguaje de programación de alto nivel, legible y muy usado en educación, automatización, ciencia de datos y desarrollo web." },
              { type: "heading", text: "Objetivos de la clase" },
              { type: "list", items: ["Entender qué es un lenguaje de programación", "Instalar Python y un editor de código", "Ejecutar tu primer programa: Hola mundo"] },
              { type: "heading", text: "Primer programa" },
              { type: "code", language: "python", code: 'print("Hola, mundo!")' },
              { type: "callout", variant: "tip", text: "Usa print() para mostrar texto en pantalla. Es la forma más simple de verificar que todo funciona." },
            ],
          },
          {
            id: "entorno",
            n: "02",
            title: "Entorno de trabajo",
            duration: "40 min",
            summary: "VS Code, terminal y ejecutar archivos .py.",
            blocks: [
              { type: "paragraph", text: "Configuramos el entorno: editor, terminal y la estructura básica de un proyecto de Python." },
              { type: "list", items: ["Abrir la terminal integrada", "Crear un archivo main.py", "Ejecutar con python main.py"] },
            ],
          },
        ],
      },
      {
        id: "variables",
        n: "02",
        title: "Variables y tipos de datos",
        lessons: [
          {
            id: "variables-basicas",
            n: "01",
            title: "Variables y asignación",
            duration: "50 min",
            summary: "Nombres, valores y reglas para declarar variables.",
            blocks: [
              { type: "paragraph", text: "Una variable es un nombre que guarda un valor en memoria. En Python no hace falta declarar el tipo explícitamente." },
              { type: "code", language: "python", code: "nombre = \"Ana\"\nedad = 17\nactivo = True" },
            ],
          },
          {
            id: "tipos-datos",
            n: "02",
            title: "Tipos: int, float, str y bool",
            duration: "50 min",
            summary: "Números, texto y valores lógicos.",
            blocks: [
              { type: "paragraph", text: "Python infiere el tipo según el valor asignado. Conocer los tipos básicos evita errores al operar con datos." },
              { type: "code", language: "python", code: "entero = 42\ndecimal = 3.14\ntexto = \"Python\"\nlogico = False" },
            ],
          },
          {
            id: "entrada-salida",
            n: "03",
            title: "Entrada y salida de datos",
            duration: "45 min",
            summary: "input() y conversión de tipos.",
            blocks: [
              { type: "paragraph", text: "input() lee texto del usuario. Para operar con números hay que convertir el valor con int() o float()." },
              { type: "code", language: "python", code: 'nombre = input("¿Cómo te llamas? ")\nedad = int(input("¿Cuántos años tienes? "))' },
            ],
          },
        ],
      },
      {
        id: "control",
        n: "03",
        title: "Estructuras de control",
        lessons: [
          {
            id: "condicionales",
            n: "01",
            title: "Condicionales: if, elif, else",
            duration: "55 min",
            summary: "Tomar decisiones en el programa.",
            blocks: [
              { type: "code", language: "python", code: "nota = 85\nif nota >= 90:\n    print(\"Excelente\")\nelif nota >= 70:\n    print(\"Aprobado\")\nelse:\n    print(\"Reprobado\")" },
            ],
          },
          {
            id: "bucles",
            n: "02",
            title: "Bucles: for y while",
            duration: "55 min",
            summary: "Repetir acciones de forma controlada.",
            blocks: [
              { type: "code", language: "python", code: "for i in range(5):\n    print(i)\n\ncontador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1" },
            ],
          },
        ],
      },
      {
        id: "funciones",
        n: "04",
        title: "Funciones",
        lessons: [
          {
            id: "definir-funciones",
            n: "01",
            title: "Definir y llamar funciones",
            duration: "50 min",
            summary: "Reutilizar código con def y return.",
            blocks: [
              { type: "code", language: "python", code: "def saludar(nombre):\n    return f\"Hola, {nombre}!\"\n\nprint(saludar(\"Carlos\"))" },
            ],
          },
          {
            id: "parametros",
            n: "02",
            title: "Parámetros y valores de retorno",
            duration: "45 min",
            summary: "Argumentos, valores por defecto y múltiples retornos.",
            blocks: [
              { type: "paragraph", text: "Las funciones pueden recibir varios argumentos y devolver uno o más valores." },
            ],
          },
        ],
      },
      {
        id: "estructuras",
        n: "05",
        title: "Listas y diccionarios",
        lessons: [
          {
            id: "listas",
            n: "01",
            title: "Listas y operaciones",
            duration: "50 min",
            summary: "Colecciones ordenadas y mutables.",
            blocks: [
              { type: "code", language: "python", code: "frutas = [\"manzana\", \"pera\", \"uva\"]\nfrutas.append(\"mango\")\nprint(frutas[0])" },
            ],
          },
          {
            id: "diccionarios",
            n: "02",
            title: "Diccionarios",
            duration: "50 min",
            summary: "Pares clave-valor para organizar datos.",
            blocks: [
              { type: "code", language: "python", code: 'alumno = {"nombre": "María", "nota": 92}\nprint(alumno["nombre"])' },
            ],
          },
        ],
      },
      {
        id: "archivos",
        n: "06",
        title: "Archivos y manejo de errores",
        lessons: [
          {
            id: "leer-archivos",
            n: "01",
            title: "Leer y escribir archivos",
            duration: "50 min",
            summary: "Trabajar con archivos de texto.",
            blocks: [
              { type: "code", language: "python", code: 'with open("datos.txt", "r", encoding="utf-8") as f:\n    contenido = f.read()' },
            ],
          },
          {
            id: "excepciones",
            n: "02",
            title: "Try, except y errores comunes",
            duration: "45 min",
            summary: "Capturar errores sin detener el programa.",
            blocks: [
              { type: "code", language: "python", code: "try:\n    numero = int(input(\"Número: \"))\nexcept ValueError:\n    print(\"Debes ingresar un número válido\")" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ofimatica",
    n: "02",
    title: "Ofimática",
    tag: "Productividad",
    desc: "Word, Excel y PowerPoint para el trabajo y la universidad.",
    long: "Curso práctico de herramientas de oficina: documentos, hojas de cálculo y presentaciones con ejercicios guiados en cada sesión.",
    level: "Principiante",
    modules: [
      {
        id: "intro-ofimatica",
        n: "01",
        title: "Introducción a la ofimática",
        lessons: [
          {
            id: "conceptos",
            n: "01",
            title: "¿Qué es la ofimática?",
            duration: "40 min",
            summary: "Suite ofimática, archivos y buenas prácticas.",
            blocks: [
              { type: "paragraph", text: "La ofimática agrupa las herramientas para crear documentos, hojas de cálculo y presentaciones. En este curso usamos Microsoft 365 / Office o alternativas compatibles." },
              { type: "list", items: ["Procesador de texto (Word)", "Hoja de cálculo (Excel)", "Presentaciones (PowerPoint)", "Almacenamiento y versiones de archivos"] },
            ],
          },
          {
            id: "interfaz",
            n: "02",
            title: "Interfaz y atajos esenciales",
            duration: "45 min",
            summary: "Cinta de opciones, guardar y atajos de teclado.",
            blocks: [
              { type: "list", items: ["Ctrl + S — Guardar", "Ctrl + Z — Deshacer", "Ctrl + C / Ctrl + V — Copiar y pegar", "Ctrl + F — Buscar"] },
              { type: "callout", variant: "note", text: "Guarda tu trabajo cada pocos minutos. Usa nombres de archivo descriptivos." },
            ],
          },
        ],
      },
      {
        id: "word",
        n: "02",
        title: "Procesador de texto (Word)",
        lessons: [
          {
            id: "word-basico",
            n: "01",
            title: "Crear y formatear documentos",
            duration: "50 min",
            summary: "Texto, párrafos, fuentes y alineación.",
            blocks: [
              { type: "paragraph", text: "Aprende a estructurar un documento con títulos, párrafos y formato básico para informes y trabajos académicos." },
              { type: "list", items: ["Estilos de título y cuerpo", "Interlineado y márgenes", "Viñetas y numeración"] },
            ],
          },
          {
            id: "word-avanzado",
            n: "02",
            title: "Tablas, imágenes y encabezados",
            duration: "55 min",
            summary: "Elementos visuales y maquetación.",
            blocks: [
              { type: "list", items: ["Insertar tablas y ajustar columnas", "Imágenes con texto alternativo", "Encabezado, pie de página y numeración"] },
            ],
          },
        ],
      },
      {
        id: "excel-basico",
        n: "03",
        title: "Excel básico",
        lessons: [
          {
            id: "celdas",
            n: "01",
            title: "Celdas, filas y columnas",
            duration: "50 min",
            summary: "Navegación y formato de celdas.",
            blocks: [
              { type: "paragraph", text: "Excel organiza la información en una cuadrícula. Cada celda tiene una dirección (ej. A1, B2) y puede contener texto, números o fórmulas." },
            ],
          },
          {
            id: "formato-excel",
            n: "02",
            title: "Formato y tipos de datos",
            duration: "45 min",
            summary: "Moneda, porcentaje, fechas y bordes.",
            blocks: [
              { type: "list", items: ["Formato de número y moneda", "Ajustar ancho de columnas", "Combinar y centrar celdas"] },
            ],
          },
        ],
      },
      {
        id: "excel-formulas",
        n: "04",
        title: "Excel: fórmulas y funciones",
        lessons: [
          {
            id: "formulas",
            n: "01",
            title: "Fórmulas básicas",
            duration: "55 min",
            summary: "Suma, resta, multiplicación y referencias.",
            blocks: [
              { type: "code", language: "excel", code: "=A1+B1\n=SUMA(A1:A10)\n=PROMEDIO(B2:B20)" },
              { type: "callout", variant: "tip", text: "Toda fórmula en Excel empieza con el signo =." },
            ],
          },
          {
            id: "funciones",
            n: "02",
            title: "SI, CONTAR y BUSCARV",
            duration: "55 min",
            summary: "Funciones lógicas y de búsqueda.",
            blocks: [
              { type: "code", language: "excel", code: '=SI(A1>=70,"Aprobado","Reprobado")\n=CONTAR.SI(C:C,"Ventas")' },
            ],
          },
          {
            id: "graficos",
            n: "03",
            title: "Gráficos y tablas dinámicas",
            duration: "50 min",
            summary: "Visualizar datos de forma clara.",
            blocks: [
              { type: "paragraph", text: "Los gráficos ayudan a comunicar tendencias. Las tablas dinámicas resumen grandes volúmenes de datos rápidamente." },
            ],
          },
        ],
      },
      {
        id: "powerpoint",
        n: "05",
        title: "Presentaciones (PowerPoint)",
        lessons: [
          {
            id: "diapositivas",
            n: "01",
            title: "Diseño de diapositivas",
            duration: "50 min",
            summary: "Plantillas, layout y jerarquía visual.",
            blocks: [
              { type: "list", items: ["Elegir plantilla coherente", "Una idea principal por diapositiva", "Contraste y legibilidad del texto"] },
            ],
          },
          {
            id: "animaciones",
            n: "02",
            title: "Transiciones y presentación",
            duration: "45 min",
            summary: "Animaciones sutiles y modo presentador.",
            blocks: [
              { type: "callout", variant: "warning", text: "Evita animaciones excesivas. Lo importante es el contenido, no los efectos." },
            ],
          },
        ],
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getModuleById(courseId: string, moduleId: string): AcademyModule | undefined {
  return getCourseById(courseId)?.modules.find((m) => m.id === moduleId);
}

export function getLessonById(courseId: string, lessonId: string): { course: Course; module: AcademyModule; lesson: Lesson } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return { course, module, lesson };
  }

  return undefined;
}

export function getLessonPath(courseId: string, lessonId: string): string {
  return `/academy/${courseId}/${lessonId}`;
}

export function getCourseStats(course: Course) {
  const moduleCount = course.modules.length;
  const lessonCount = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  return { moduleCount, lessonCount };
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const course = getCourseById(courseId);
  if (!course) return { prev: undefined, next: undefined };

  const flat = course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ module: m, lesson: l })),
  );
  const index = flat.findIndex((item) => item.lesson.id === lessonId);

  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  };
}
