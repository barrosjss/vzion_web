import type { Course } from "../types";
import { generalLessons } from "./general";
import { fundamentosSlides } from "./slides/fundamentosSlides";
import { datosPrimitivosSlides } from "./slides/datosPrimitivosSlides";
import { variablesSlides } from "./slides/variablesSlides";
import { estructurasSlides } from "./slides/estructurasSlides";
import { controlSlides } from "./slides/controlSlides";
import { funcionesSlides } from "./slides/funcionesSlides";
import { erroresSlides } from "./slides/erroresSlides";
import { pooSlides } from "./slides/pooSlides";
import { proyectosSlides } from "./slides/proyectosSlides";
import { sqlalchemySlides } from "./slides/sqlalchemySlides";
import { streamlitSlides } from "./slides/streamlitSlides";
import { fastapiSlides } from "./slides/fastapiSlides";
import { fastapiDbSlides } from "./slides/fastapiDbSlides";

export const pythonCourse: Course = {
  id: "python",
  n: "01",
  title: "Programación con Python",
  tag: "Fundamentos",
  desc: "De cero a APIs con FastAPI: tipos, control de flujo, POO, Streamlit y bases de datos.",
  long: "Curso completo basado en el material «Fundamentos de Python» (FCA). Unidad 1 cubre sintaxis y lógica; Unidad 2 funciones, proyectos y POO; Unidades 3–5 construyen apps con Streamlit y FastAPI.",
  level: "Principiante → Intermedio",
  modules: [
    {
      id: "general",
      n: "00",
      title: "General",
      lessons: generalLessons,
    },
    {
      id: "fundamentos",
      n: "01",
      title: "Fundamentos de Python",
      lessons: [
        {
          id: "fundamentos-python",
          n: "01",
          title: "Fundamentos de Python",
          duration: "90 min",
          summary: "Instalación, configuración del entorno y tu primer print(\"Hola Mundo\").",
          slides: fundamentosSlides,
        },
        {
          id: "python-8-minutos",
          n: "02",
          title: "Python en 8 minutos",
          duration: "10 min",
          summary: "Video rápido de repaso del lenguaje.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 01 · Video",
              title: "Python en 8 minutos",
              subtitle: "Panorama express antes de profundizar en clase",
              blocks: [
                {
                  type: "youtube",
                  videoId: "PtBHnMMRI0E",
                  title: "Python en 8 minutos",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "datos-primitivos",
      n: "02",
      title: "Datos Primitivos",
      lessons: [
        {
          id: "tipos-datos-short",
          n: "01",
          title: "Tipos de Datos",
          duration: "5 min",
          summary: "Short de repaso sobre tipos primitivos en Python.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 02 · Short",
              title: "Tipos de datos en Python",
              subtitle: "Repaso visual en menos de un minuto",
              blocks: [
                {
                  type: "youtube",
                  videoId: "4zGwkqw0nyA",
                  title: "Tipos de Datos",
                  short: true,
                },
                {
                  type: "list",
                  style: "bullet",
                  items: ["int — números enteros", "float — decimales", "str — texto", "bool — True / False"],
                },
              ],
            },
          ],
        },
        {
          id: "datos-primitivos",
          n: "02",
          title: "Datos Primitivos",
          duration: "75 min",
          summary: "Tipos int, float, str y bool. Operadores y conversión de tipos.",
          slides: datosPrimitivosSlides,
        },
      ],
    },
    {
      id: "variables-strings",
      n: "03",
      title: "Variables y Strings",
      lessons: [
        {
          id: "variables-strings",
          n: "01",
          title: "Variables y Strings",
          duration: "80 min",
          summary: "Asignación, input(), f-strings y formateo de salida.",
          slides: variablesSlides,
        },
        {
          id: "variables-video",
          n: "02",
          title: "Tipos, variables y operadores",
          duration: "20 min",
          summary: "Video de profundización sobre variables y operadores.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 03 · Video",
              title: "Tipos, variables y operadores en Python",
              blocks: [
                {
                  type: "imagePlaceholder",
                  label: "Video del curso sobre variables y operadores",
                  note: "Añade el ID de YouTube cuando lo tengas.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "estructuras-datos",
      n: "04",
      title: "Estructuras de Datos",
      lessons: [
        {
          id: "estructuras-datos",
          n: "01",
          title: "Estructuras de Datos",
          duration: "90 min",
          summary: "Listas, tuplas, diccionarios y conjuntos. Índices, métodos y recorridos con for.",
          slides: estructurasSlides,
        },
        {
          id: "estructuras-video",
          n: "02",
          title: "Estructuras de datos en 8 minutos",
          duration: "10 min",
          summary: "Video de repaso: listas, tuplas, sets y diccionarios.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 04 · Video",
              title: "Estructuras de datos con Python en 8 min",
              blocks: [
                {
                  type: "imagePlaceholder",
                  label: "Video: Estructuras de datos en 8 minutos",
                  note: "Añade el ID de YouTube del video del curso.",
                },
              ],
            },
          ],
        },
        {
          id: "actividad-estructuras",
          n: "03",
          title: "Actividad en Clases — Estructuras de Datos",
          duration: "60 min",
          summary: "Ejercicios guiados con listas y métodos en el playground.",
          format: "activity",
          slides: [
            {
              variant: "practice",
              eyebrow: "Módulo 04 · Actividad",
              title: "Actividad en clase",
              subtitle: "Listas, métodos y recorridos con for",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Abre online-python.com o trinket.io",
                    "Crea una lista de al menos 5 elementos y muestra el primero y el último",
                    "Usa append, insert y pop; imprime la lista después de cada cambio",
                    "Recorre la lista con for e imprime solo los elementos que cumplan una condición",
                    "Entrega captura de pantalla con código y salida visible",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sentencias-control",
      n: "05",
      title: "Sentencias de Control",
      lessons: [
        {
          id: "sentencias-control",
          n: "01",
          title: "Sentencias de Control",
          duration: "120 min",
          summary: "Condicionales if/elif/else y bucles while y for.",
          slides: controlSlides,
        },
        {
          id: "actividad-condicionales",
          n: "02",
          title: "Actividad en Clases — Condicionales",
          duration: "45 min",
          summary: "Ejercicios de if, elif y else en el playground.",
          format: "activity",
          slides: [
            {
              variant: "practice",
              eyebrow: "Módulo 05 · Actividad",
              title: "Condicionales en clase",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Número positivo o negativo",
                    "Edad para votar",
                    "Par o impar",
                    "Clasificación de notas con elif",
                    "Calculadora simple con dos números y operación",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "actividad-bucles",
          n: "03",
          title: "Actividad en Clases — Bucles",
          duration: "45 min",
          summary: "Ejercicios de for, while, break y continue.",
          format: "activity",
          slides: [
            {
              variant: "practice",
              eyebrow: "Módulo 05 · Actividad",
              title: "Bucles en clase",
              blocks: [
                {
                  type: "list",
                  style: "numbered",
                  items: [
                    "Sumar elementos de una lista con for",
                    "Filtrar palabras que empiecen con vocal",
                    "Buscar un número en una lista con while + break",
                    "Filtrar diccionario de estudiantes que aprobaron",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "proyecto-funciones-bucles",
          n: "04",
          title: "Proyecto — Funciones y Bucles",
          duration: "90 min",
          summary: "Proyecto integrador: menú interactivo o registro de notas.",
          format: "activity",
          slides: [
            {
              variant: "practice",
              eyebrow: "Módulo 05 · Proyecto",
              title: "Proyecto: Funciones y Bucles",
              blocks: [
                {
                  type: "cards",
                  items: [
                    {
                      icon: "🎬",
                      title: "¿Qué serie ver?",
                      text: "Menú con opciones, validación de entrada y bucle hasta salir.",
                    },
                    {
                      icon: "📊",
                      title: "Registro de notas",
                      text: "Carga de alumnos, promedio y estadísticas con funciones y bucles.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "funciones",
      n: "06",
      title: "Funciones y errores",
      lessons: [
        {
          id: "funciones",
          n: "01",
          title: "Funciones",
          duration: "90 min",
          summary: "def, parámetros, return, docstrings y scope.",
          slides: funcionesSlides,
        },
        {
          id: "errores",
          n: "02",
          title: "Try — Except",
          duration: "60 min",
          summary: "Manejo de excepciones y errores comunes.",
          slides: erroresSlides,
        },
      ],
    },
    {
      id: "poo-proyectos",
      n: "07",
      title: "POO y proyectos",
      lessons: [
        {
          id: "poo",
          n: "01",
          title: "Programación Orientada a Objetos",
          duration: "90 min",
          summary: "Clases, objetos, __init__, self y métodos.",
          slides: pooSlides,
        },
        {
          id: "proyectos",
          n: "02",
          title: "Proyectos — archivos y JSON",
          duration: "90 min",
          summary: "pip, módulos, archivos, JSON, logging y entornos virtuales.",
          slides: proyectosSlides,
        },
        {
          id: "sqlalchemy",
          n: "03",
          title: "SQLAlchemy y CRUD",
          duration: "90 min",
          summary: "ORM, modelos, sesiones y migraciones con Alembic.",
          slides: sqlalchemySlides,
        },
      ],
    },
    {
      id: "streamlit",
      n: "08",
      title: "Streamlit",
      lessons: [
        {
          id: "streamlit",
          n: "01",
          title: "Streamlit",
          duration: "120 min",
          summary: "Dashboards interactivos, widgets y consumo de APIs.",
          slides: streamlitSlides,
        },
      ],
    },
    {
      id: "fastapi",
      n: "09",
      title: "FastAPI",
      lessons: [
        {
          id: "fastapi",
          n: "01",
          title: "FastAPI — fundamentos",
          duration: "120 min",
          summary: "HTTP, rutas, schemas Pydantic y documentación automática.",
          slides: fastapiSlides,
        },
        {
          id: "fastapi-db",
          n: "02",
          title: "FastAPI y bases de datos",
          duration: "150 min",
          summary: "SQLAlchemy, Depends, JWT y lógica del servidor.",
          slides: fastapiDbSlides,
        },
      ],
    },
  ],
};
