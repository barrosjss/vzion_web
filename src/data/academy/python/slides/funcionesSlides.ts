import type { Slide } from "../../types";

/** Unidad 2 — Funciones (PDF págs. 79–88). */
export const funcionesSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · Funciones",
    title: "Funciones",
    subtitle: "Bloques reutilizables con parámetros, retorno y documentación",
  },
  {
    variant: "content",
    title: "Funciones",
    blocks: [
      {
        type: "paragraph",
        text: "Una función es un bloque de código reutilizable que realiza una tarea específica y puede recibir datos de entrada (parámetros) y devolver un resultado.",
      },
      {
        type: "columns",
        cols: 2,
        columns: [
          [
            {
              type: "code",
              language: "python",
              code: "def [[nombre_funcion]]([[parámetros]]):\n    # bloque de código\n    [[return resultado]]  # opcional",
              caption: "Sintaxis general",
            },
          ],
          [
            {
              type: "code",
              language: "python",
              code: 'def saludar():\n    print("¡Hola!")\n\n[[saludar()]]',
              caption: "Ejemplo y llamada",
            },
          ],
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Parámetros posicionales",
    blocks: [
      {
        type: "heading",
        text: "¿Qué son los parámetros posicionales?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Se pasan a la función en un orden específico; Python los asigna según la posición en la definición.",
      },
      {
        type: "code",
        language: "python",
        code: 'def saludar([[nombre]], [[edad]]):\n    print(f"Hola {nombre}, tienes {edad} años.")',
        caption: "Definición — observa el orden de los parámetros",
      },
      {
        type: "paragraph",
        text: "Llamada a la función con argumentos posicionales:",
      },
      {
        type: "code",
        language: "python",
        code: 'saludar([["Ana"]], [[25]])',
        caption: "«Ana» va a nombre · 25 va a edad",
      },
      {
        type: "callout",
        variant: "tip",
        text: 'Salida: Hola Ana, tienes 25 años.',
      },
    ],
  },
  {
    variant: "content",
    title: "Parámetros por defecto",
    blocks: [
      {
        type: "heading",
        text: "¿Qué son los parámetros por defecto?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Son parámetros con un valor predefinido que se usa si no se pasa un argumento al llamar la función.",
      },
      {
        type: "code",
        language: "python",
        code: 'def saludar(nombre=[[\"Usuario\"]]):\n    print(f"¡Hola, {nombre}!")',
        caption: "Si no pasas nombre, se usa «Usuario»",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Regla importante: los parámetros con valor por defecto deben ir al final de la lista de parámetros.",
      },
      {
        type: "boxes",
        items: [
          {
            variant: "warning",
            title: "Esto da error",
            blocks: [
              {
                type: "code",
                language: "python",
                code: "def funcion([[a=1]], [[b]]):\n    pass",
              },
            ],
          },
          {
            variant: "brand",
            title: "Orden correcto",
            blocks: [
              {
                type: "code",
                language: "python",
                code: "def sumar([[a]], [[b=10]]):\n    return a + b",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Docstrings",
    blocks: [
      {
        type: "columns",
        cols: 2,
        columns: [
          [
            {
              type: "code",
              language: "python",
              code: 'def saludar(nombre):\n    [["""\n    Saluda a una persona por su nombre.\n\n    Parámetros:\n    nombre (str): El nombre de la persona.\n\n    Retorna:\n    None\n    """]]\n    print(f"Hola, {nombre}!")',
            },
          ],
          [
            {
              type: "paragraph",
              text: "El docstring es una cadena de texto que se coloca justo después de la definición de una función para documentar qué hace, cómo usarla, sus parámetros y valores de retorno.",
            },
            {
              type: "heading",
              text: "¿Para qué sirve el docstring?",
              level: 3,
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "Explica el propósito de la función.",
                "Facilita la lectura y mantenimiento del código.",
                "Permite que herramientas y editores muestren ayuda automática.",
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Type hints",
    blocks: [
      {
        type: "paragraph",
        text: "En Python puedes declarar el tipo de datos de los parámetros y del valor de retorno usando anotaciones de tipo (type hints). No es obligatorio, pero mejora la legibilidad y ayuda a detectar errores.",
      },
      {
        type: "code",
        language: "python",
        code: "def sumar([[a: int]], [[b: int]]) [[-> int]]:\n    return a + b",
        caption: "Los tipos indican qué entra y qué sale",
      },
      {
        type: "code",
        language: "python",
        code: "def nombre_funcion([[param1: Tipo1]], [[param2: Tipo2]]) [[-> TipoDeRetorno]]:\n    # código\n    return valor",
        caption: "Plantilla general",
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Contexto",
    title: "Ámbito y retorno",
    subtitle: "Dónde viven las variables y cómo devolver resultados",
  },
  {
    variant: "content",
    title: "Contexto en el flujo del programa",
    blocks: [
      {
        type: "paragraph",
        text: "El contexto (scope) es el ámbito donde una variable o función está disponible.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Contexto global: variables definidas fuera de funciones o clases, accesibles en todo el módulo.",
          "Contexto local: variables definidas dentro de funciones, accesibles solo ahí.",
        ],
      },
      {
        type: "code",
        language: "python",
        code: "[[x = 10]]  # Contexto global\n\ndef funcion():\n    [[y = 5]]  # Contexto local\n    print(x, y)\n\nfuncion()\nprint(y)  # Error: y no está definido en este contexto",
      },
    ],
  },
  {
    variant: "content",
    title: "Contexto con declaraciones with",
    blocks: [
      {
        type: "paragraph",
        text: "Python usa la palabra clave with para manejar contextos que requieren setup y teardown automático, como archivos, conexiones o locks.",
      },
      {
        type: "code",
        language: "python",
        code: '[[with]] open("archivo.txt", "r") [[as]] f:\n    contenido = f.read()\n# Aquí el archivo se cierra automáticamente al salir del contexto',
        caption: "with abre y cierra el recurso por ti",
      },
    ],
  },
  {
    variant: "content",
    title: "return",
    blocks: [
      {
        type: "paragraph",
        text: "El return en una función de Python sirve para devolver un resultado al lugar desde donde fue llamada. Permite que la función entregue un valor final que luego puede usarse en el resto del programa.",
      },
      {
        type: "columns",
        cols: 3,
        columns: [
          [
            {
              type: "code",
              language: "python",
              code: "def sumar(a, b):\n    [[return a + b]]",
              caption: "Devolver un valor",
            },
          ],
          [
            {
              type: "code",
              language: "python",
              code: 'def ejemplo():\n    [[return "Hola"]]\n    print("Esto no se ejecuta")',
              caption: "Detener la ejecución",
            },
          ],
          [
            {
              type: "code",
              language: "python",
              code: "def operaciones(a, b):\n    [[return a + b, a * b]]\n\nsuma, producto = operaciones(2, 4)",
              caption: "Devolver varios valores",
            },
          ],
        ],
      },
    ],
  },
  {
    variant: "practice",
    title: "Ejercicios en clase (1–5)",
    blocks: [
      {
        type: "paragraph",
        text: "Crea cada función en el editor y pruébala. Usa el playground: online-python.com",
      },
      {
        type: "list",
        style: "check",
        items: [
          "Ejercicio 1 — Función que saluda: crea saludar() que imprima «Hola, bienvenido a Python».",
          "Ejercicio 2 — Suma de dos números: crea sumar(a, b) que reciba dos números y retorne la suma.",
          "Ejercicio 3 — Número par o impar: crea es_par(numero) que retorne True si es par y False si es impar.",
          "Ejercicio 4 — Área de un rectángulo: crea area_rectangulo(base, altura) que retorne el área.",
          "Ejercicio 5 — Convertir Celsius a Fahrenheit: crea celsius_a_fahrenheit(c) con la fórmula F = (C × 9/5) + 32.",
        ],
      },
    ],
  },
  {
    variant: "practice",
    title: "Ejercicios en clase (6–9)",
    blocks: [
      {
        type: "list",
        style: "check",
        items: [
          "Ejercicio 6 — Contar caracteres: crea contar_caracteres(texto) que retorne cuántos caracteres tiene un string.",
          "Ejercicio 7 — Devolver el número mayor: crea mayor(a, b, c) que retorne el mayor de tres números.",
          "Ejercicio 8 — Multiplicar valores en una lista: crea multiplicar_lista(lista) que multiplique todos los elementos y retorne el resultado.",
          "Ejercicio 9 — Verificar si un texto contiene una palabra: crea contiene(texto, palabra) que retorne True si la palabra está en el texto.",
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
          "def define funciones reutilizables con parámetros y return opcional",
          "Parámetros posicionales respetan el orden; los por defecto van al final",
          "Docstrings y type hints documentan y clarifican el código",
          "Contexto global vs local; with maneja recursos automáticamente",
          "return devuelve uno o varios valores y detiene la función",
        ],
      },
    ],
  },
];
