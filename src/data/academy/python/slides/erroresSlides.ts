import type { Slide } from "../../types";

/** Unidad 2 — Manejo de errores (PDF págs. 89–98). */
export const erroresSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · Errores",
    title: "Try — Except",
    subtitle: "Manejar errores sin detener el programa",
  },
  {
    variant: "content",
    title: "Try — Except",
    blocks: [
      {
        type: "paragraph",
        text: "Es una estructura en Python que permite manejar errores sin que el programa se detenga. Sirve para «intentar hacer algo» (try) y, si ocurre un error, hacer algo diferente o mostrar un mensaje con except.",
      },
      {
        type: "code",
        language: "python",
        code: "[[try]]:\n    # Código que podría fallar\n[[except]]:\n    # Código que se ejecuta si ocurre un error",
        caption: "Sintaxis general",
      },
      {
        type: "code",
        language: "python",
        code: '[[try]]:\n    numero = int(input("Introduce un número: "))\n    print("El número al cuadrado es:", numero ** 2)\n[[except]]:\n    print("Eso no es un número válido.")',
        caption: "Ejemplo práctico — si el usuario escribe texto, no se detiene el programa",
      },
    ],
  },
  {
    variant: "content",
    title: "Capturar errores específicos",
    blocks: [
      {
        type: "paragraph",
        text: "Puedes definir varios bloques except para reaccionar de forma distinta según el tipo de error.",
      },
      {
        type: "code",
        language: "python",
        code: '[[try]]:\n    archivo = open("archivo.txt", "r")\n    contenido = archivo.read()\n    numero = int(contenido)\n[[except FileNotFoundError]]:\n    print("El archivo no existe.")\n[[except ValueError]]:\n    print("El contenido del archivo no es un número.")',
        caption: "Cada except responde a un fallo distinto",
      },
      {
        type: "callout",
        variant: "tip",
        text: "FileNotFoundError → el archivo no está. ValueError → el archivo existe pero no contiene un número válido.",
      },
    ],
  },
  {
    variant: "content",
    title: "try — except — finally",
    blocks: [
      {
        type: "paragraph",
        text: "El bloque finally se ejecuta siempre, haya error o no. Útil para cerrar archivos, liberar recursos o mostrar un mensaje final.",
      },
      {
        type: "code",
        language: "python",
        code: '[[try]]:\n    x = 1 / 0\n[[except ZeroDivisionError]]:\n    print("No puedes dividir entre cero.")\n[[finally]]:\n    print("Esto siempre se imprime, con o sin error.")',
        caption: "finally corre al final sin importar el resultado",
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Errores comunes",
    title: "Tipos de excepción",
    subtitle: "Reconocer el error acelera la depuración",
  },
  {
    variant: "content",
    title: "Errores comunes (1–2)",
    blocks: [
      {
        type: "boxes",
        items: [
          {
            title: "1. SyntaxError",
            blocks: [
              {
                type: "paragraph",
                text: "Ocurre cuando el código está mal escrito (no sigue la sintaxis de Python).",
              },
              {
                type: "code",
                language: "python",
                code: '# Falta el paréntesis\n[[print "Hola"]]',
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: SyntaxError: Missing parentheses in call to 'print'",
              },
            ],
          },
          {
            title: "2. NameError",
            blocks: [
              {
                type: "paragraph",
                text: "Usas una variable que no ha sido definida.",
              },
              {
                type: "code",
                language: "python",
                code: "print([[x]])",
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: NameError: name 'x' is not defined",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Errores comunes (3–4)",
    blocks: [
      {
        type: "boxes",
        items: [
          {
            title: "3. TypeError",
            blocks: [
              {
                type: "paragraph",
                text: "Estás usando un tipo de dato incorrecto.",
              },
              {
                type: "code",
                language: "python",
                code: 'print("Hola" [[+ 5]])',
              },
              {
                type: "callout",
                variant: "note",
                text: 'Error: TypeError: can only concatenate str (not "int") to str',
              },
            ],
          },
          {
            title: "4. ValueError",
            blocks: [
              {
                type: "paragraph",
                text: "El tipo es correcto, pero el valor no tiene sentido.",
              },
              {
                type: "code",
                language: "python",
                code: 'int([["hola"]])',
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: ValueError: invalid literal for int() with base 10: 'hola'",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Errores comunes (5–6)",
    blocks: [
      {
        type: "boxes",
        items: [
          {
            title: "5. IndexError",
            blocks: [
              {
                type: "paragraph",
                text: "Accedes a un índice fuera del rango de una lista.",
              },
              {
                type: "code",
                language: "python",
                code: "lista = [1, 2, 3]\nprint(lista[[5]])",
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: IndexError: list index out of range",
              },
            ],
          },
          {
            title: "6. KeyError",
            blocks: [
              {
                type: "paragraph",
                text: "Accedes a una clave inexistente en un diccionario.",
              },
              {
                type: "code",
                language: "python",
                code: 'd = {"a": 1}\nprint(d[["b"]])',
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: KeyError: 'b'",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Errores comunes (7–8)",
    blocks: [
      {
        type: "boxes",
        items: [
          {
            title: "7. ZeroDivisionError",
            blocks: [
              {
                type: "paragraph",
                text: "Intentas dividir entre cero.",
              },
              {
                type: "code",
                language: "python",
                code: "x = 5 [[/ 0]]",
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: ZeroDivisionError: division by zero",
              },
            ],
          },
          {
            title: "8. FileNotFoundError",
            blocks: [
              {
                type: "paragraph",
                text: "El archivo que intentas abrir no existe.",
              },
              {
                type: "code",
                language: "python",
                code: 'open([["noexiste.txt"]])',
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: FileNotFoundError: [Errno 2] No such file or directory",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Errores comunes (9–10)",
    blocks: [
      {
        type: "boxes",
        items: [
          {
            title: "9. AttributeError",
            blocks: [
              {
                type: "paragraph",
                text: "Usas un método o atributo que no existe para ese objeto.",
              },
              {
                type: "code",
                language: "python",
                code: "x = 10\nx.[[append]](5)",
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: AttributeError: 'int' object has no attribute 'append'",
              },
            ],
          },
          {
            title: "10. ModuleNotFoundError",
            blocks: [
              {
                type: "paragraph",
                text: "No puedes importar un módulo porque no existe o está mal escrito.",
              },
              {
                type: "code",
                language: "python",
                code: "import [[noexiste]]",
              },
              {
                type: "callout",
                variant: "note",
                text: "Error: ModuleNotFoundError: No module named 'noexiste'",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "¿Qué es Exception?",
    blocks: [
      {
        type: "paragraph",
        text: "Exception es la clase base para casi todos los errores que puedes atrapar con except. Incluye ValueError, TypeError, FileNotFoundError, etc. No incluye SystemExit, KeyboardInterrupt ni GeneratorExit.",
      },
      {
        type: "heading",
        text: "Ejemplo práctico",
        level: 3,
      },
      {
        type: "code",
        language: "python",
        code: 'try:\n    x = int("abc")\n[[except Exception as e]]:\n    print("Ocurrió un error:", e)',
      },
      {
        type: "callout",
        variant: "tip",
        text: 'Salida: Ocurrió un error: invalid literal for int() with base 10: \'abc\' — la variable e contiene el mensaje del error.',
      },
      {
        type: "callout",
        variant: "warning",
        text: "Usa Exception como comodín solo cuando no conoces el error. En producción, prefiere excepciones específicas.",
      },
    ],
  },
  {
    variant: "practice",
    title: "🎯 Ejercicio en Clase — Try / Except",
    blocks: [
      {
        type: "paragraph",
        text: "Abre el editor, implementa el programa y pruébalo con entradas válidas e inválidas. Usa el playground: online-python.com",
      },
      {
        type: "paragraph",
        text: "Ejercicio: Calculadora segura con manejo de errores",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Pide al usuario dos números (pueden ser decimales).",
          "Dentro de un bloque try, convierte las entradas a float y divide el primero entre el segundo. Imprime el resultado.",
          "Captura ValueError si el usuario escribe texto que no sea un número.",
          "Captura ZeroDivisionError si el segundo número es cero.",
          "Agrega un bloque finally que imprima «Operación finalizada» sin importar si hubo error o no.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Prueba estos casos: 10 y 2 (éxito), hola y 5 (ValueError), 8 y 0 (ZeroDivisionError).",
      },
      {
        type: "code",
        language: "python",
        code: '# Estructura sugerida — completa los bloques except\n\ntry:\n    a = float(input("Primer número: "))\n    b = float(input("Segundo número: "))\n    resultado = a / b\n    print(f"Resultado: {resultado}")\nexcept ValueError:\n    # Tu mensaje aquí\n    pass\nexcept ZeroDivisionError:\n    # Tu mensaje aquí\n    pass\nfinally:\n    # Mensaje de cierre aquí\n    pass',
      },
      {
        type: "callout",
        variant: "tip",
        text: "💪 Reto extra: crea un segundo programa que lea un número desde el archivo notas.txt, lo convierta a int y lo eleve al cuadrado. Captura FileNotFoundError y ValueError con mensajes distintos.",
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
          "try ejecuta código que puede fallar; except captura el error sin detener el programa",
          "Define except por tipo (ValueError, FileNotFoundError…) para mensajes claros",
          "finally siempre se ejecuta al final del bloque",
          "Conocer los 10 errores comunes acelera la depuración",
          "Exception es la clase base; úsala con criterio",
        ],
      },
    ],
  },
];
