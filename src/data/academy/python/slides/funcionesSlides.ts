import type { Slide } from "../../types";

/** Unidad 2 — Funciones (PDF págs. 79–88). */
export const funcionesSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · Funciones",
    title: "Funciones en Python",
    subtitle: "Reutilizar código con parámetros, retorno y documentación",
  },
  {
    variant: "content",
    title: "¿Qué es una función?",
    blocks: [
      {
        type: "paragraph",
        text: "Una función es un bloque de código reutilizable que realiza una tarea específica. Puede recibir datos de entrada (parámetros) y devolver un resultado.",
      },
      {
        type: "code",
        language: "python",
        code: 'def saludar(nombre):\n    return f"Hola, {nombre}!"\n\nprint(saludar("Ana"))',
      },
    ],
  },
  {
    variant: "content",
    title: "Parámetros posicionales",
    blocks: [
      {
        type: "paragraph",
        text: "Se pasan a la función en un orden específico; Python los asigna según la posición en la definición.",
      },
      {
        type: "code",
        language: "python",
        code: "def area_rectangulo(base, altura):\n    return base * altura\n\nprint(area_rectangulo(5, 3))  # 15",
      },
    ],
  },
  {
    variant: "content",
    title: "Parámetros por defecto",
    blocks: [
      {
        type: "paragraph",
        text: "Tienen un valor predefinido que se usa si no se pasa un argumento al llamar la función.",
      },
      {
        type: "code",
        language: "python",
        code: 'def saludar(nombre, saludo="Hola"):\n    return f"{saludo}, {nombre}!"\n\nprint(saludar("Luis"))\nprint(saludar("Luis", "Buenos días"))',
      },
    ],
  },
  {
    variant: "content",
    title: "Docstrings",
    blocks: [
      {
        type: "paragraph",
        text: "Cadena de texto justo después de def que documenta qué hace la función, sus parámetros y el valor de retorno.",
      },
      {
        type: "code",
        language: "python",
        code: 'def sumar(a, b):\n    """Suma dos números y devuelve el resultado."""\n    return a + b',
      },
      {
        type: "callout",
        variant: "tip",
        text: "Usa help(sumar) o sumar.__doc__ para leer la documentación.",
      },
    ],
  },
  {
    variant: "content",
    title: "Type hints",
    blocks: [
      {
        type: "paragraph",
        text: "Anotaciones de tipo en parámetros y retorno. No son obligatorias, pero mejoran la legibilidad y el soporte del editor.",
      },
      {
        type: "code",
        language: "python",
        code: "def dividir(a: float, b: float) -> float:\n    return a / b",
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Contexto",
    title: "Scope y return",
    subtitle: "Ámbito de variables y valor de retorno",
  },
  {
    variant: "content",
    title: "Contexto (scope)",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "Global: variables definidas fuera de funciones, visibles en todo el módulo.",
          "Local: variables dentro de una función, solo existen ahí.",
          "with: maneja contextos que requieren apertura y cierre automático (archivos, conexiones).",
        ],
      },
      {
        type: "code",
        language: "python",
        code: 'with open("datos.txt", "r", encoding="utf-8") as f:\n    contenido = f.read()',
      },
    ],
  },
  {
    variant: "content",
    title: "return",
    blocks: [
      {
        type: "paragraph",
        text: "return devuelve un resultado al lugar desde donde se llamó la función. Sin return explícito, la función devuelve None.",
      },
      {
        type: "code",
        language: "python",
        code: "def es_mayor_de_edad(edad):\n    return edad >= 18\n\nif es_mayor_de_edad(20):\n    print(\"Puede votar\")",
      },
    ],
  },
  {
    variant: "practice",
    title: "Ejercicios en clase",
    blocks: [
      {
        type: "list",
        style: "numbered",
        items: [
          "Crea saludar() que imprima «Hola, bienvenido a Python».",
          "Crea sumar(a, b) que retorne la suma.",
          "Crea contar_caracteres(texto) que retorne la longitud del string.",
          "Añade docstring a cada función.",
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
          "def define funciones reutilizables",
          "Parámetros posicionales y por defecto",
          "return entrega un valor; docstrings documentan",
          "with y scope controlan dónde viven las variables",
        ],
      },
    ],
  },
];
