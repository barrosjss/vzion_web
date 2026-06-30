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
import { fundamentosQuiz } from "./quizzes/fundamentosQuiz";
import { datosPrimitivosQuiz } from "./quizzes/datosPrimitivosQuiz";

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
        {
          id: "fundamentos-python-quiz",
          n: "03",
          title: "Cuestionario — Fundamentos",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del módulo.",
          format: "quiz",
          quiz: fundamentosQuiz,
        },
        {
          id: "funciones-integradas-8min",
          n: "04",
          title: "Funciones integradas en 8 minutos",
          duration: "10 min",
          summary: "Video: built-in functions de Python en 8 minutos.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 01 · Video",
              title: "Funciones Integradas de Python en 8 minutos (Built-in Functions)",
              subtitle: "Repaso rápido de las funciones integradas del lenguaje",
              blocks: [
                {
                  type: "youtube",
                  videoId: "hHhkLEnowLA",
                  title: "Funciones Integradas de Python en 8 minutos (Built-in Functions)",
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
        {
          id: "datos-primitivos-quiz",
          n: "03",
          title: "Cuestionario — Datos Primitivos",
          duration: "15 min",
          summary: "Evaluación con preguntas aleatorias del módulo.",
          format: "quiz",
          quiz: datosPrimitivosQuiz,
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
                  type: "youtube",
                  videoId: "numQzIgpOo0",
                  title: "Tipos, variables y operadores en Python",
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
          id: "sentencias-control-video",
          n: "02",
          title: "Estructuras de control de flujo",
          duration: "20 min",
          summary: "Video: if, else, elif, while, for, break y continue.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 05 · Video",
              title:
                "Estructuras de Control de Flujo en Python: if, else, elif, while, for, break, continue",
              subtitle: "Repaso en video de condicionales y bucles",
              blocks: [
                {
                  type: "youtube",
                  videoId: "w53HiWSZnzU",
                  title:
                    "Estructuras de Control de Flujo en Python: if, else, elif, while, for, break, continue",
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
          id: "funciones-video",
          n: "02",
          title: "Aprende funciones en Python",
          duration: "20 min",
          summary: "Video: def, pass, None, return vs print, argumentos y scope.",
          format: "video",
          slides: [
            {
              variant: "content",
              eyebrow: "Módulo 06 · Video",
              title:
                "APRENDE FUNCIONES en PYTHON: def, pass, sintaxis, None, return vs print, argumentos, scope y más",
              subtitle: "Repaso en video de funciones en Python",
              blocks: [
                {
                  type: "youtube",
                  videoId: "9k91jETchkI",
                  title:
                    "APRENDE FUNCIONES en PYTHON: def, pass, sintaxis, None, return vs print, argumentos, scope y más",
                },
              ],
            },
          ],
        },
        {
          id: "errores",
          n: "03",
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
