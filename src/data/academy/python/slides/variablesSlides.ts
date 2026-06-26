import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const variablesSlides: Slide[] = [
  {
    "variant": "cover" as const,
    "eyebrow": "Módulo 3 — Variables & Strings",
    "title": "Variables en Python",
    "subtitle": "Almacenar, nombrar y formatear datos en tus programas"
  },
  {
    "variant": "content" as const,
    "title": "¿Qué es una variable?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Una variable es un contenedor con nombre que almacena un valor en memoria. En lugar de repetir el mismo valor en todo el código, le das un nombre y lo reutilizas."
      },
      {
        "type": "paragraph",
        "text": "# Asignar un valor a una variable\nnombre = \"Carlos\"     # str\nedad   = 30           # int\nactivo = True         # bool\nprecio = 15000        # int\n\n# Usar la variable en cualquier parte del código\nprint(f\"Hola {nombre}, tienes {edad} años\")\n      \n      \n        Variables guardan cualquier tipo de dato:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Asignar un valor a una variable\nnombre = \"Carlos\"     # str\nedad   = 30           # int\nactivo = True         # bool\nprecio = 15000        # int\n\n# Usar la variable en cualquier parte del código\nprint(f\"Hola {nombre}, tienes {edad} años\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "texto        = \"Hola\"       # str\nnumero       = 42           # int\ndecimal      = 3.14         # float\nactivo       = True         # bool\nlista        = [1, 2, 3]    # list\ndiccionario  = {\"a\": 1}    # dict"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Reglas para nombrar variables",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python tiene reglas estrictas. Si las rompes, obtienes un error de sintaxis."
      },
      {
        "type": "paragraph",
        "text": "Convenciones de estilo — PEP 8 (guía oficial):"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "snake_case — para variables y funciones",
            "text": ""
          },
          {
            "icon": "",
            "title": "MAYÚSCULAS — para constantes",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "nombre_usuario = \"Ana\"\ntotal_ventas   = 5000\nes_activo      = True"
      },
      {
        "type": "code",
        "language": "python",
        "code": "PI           = 3.14159\nMAX_INTENTOS = 3\nVERSION      = \"1.0.0\""
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Reasignación y asignación múltiple",
    "blocks": [
      {
        "type": "paragraph",
        "text": "En Python puedes cambiar el valor de una variable en cualquier momento. Incluso puedes cambiarle el tipo."
      },
      {
        "type": "paragraph",
        "text": "# Reasignación — el valor cambia\ncontador = 0\nprint(contador)   # 0\n\ncontador = 10\nprint(contador)   # 10\n\ncontador = contador + 1\nprint(contador)   # 11\n\n# Forma corta con operadores de asignación\ncontador += 5    # contador = contador + 5 → 16\ncontador *= 2    # contador = contador * 2 → 32\n      \n      \n        Asignación múltiple — varias variables en una línea:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Reasignación — el valor cambia\ncontador = 0\nprint(contador)   # 0\n\ncontador = 10\nprint(contador)   # 10\n\ncontador = contador + 1\nprint(contador)   # 11\n\n# Forma corta con operadores de asignación\ncontador += 5    # contador = contador + 5 → 16\ncontador *= 2    # contador = contador * 2 → 32"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Asignar el mismo valor a varias variables\na = b = c = 0\n\n# Asignar distintos valores en una línea\nx, y, z = 1, 2, 3\nprint(x, y, z)   # 1 2 3\n\n# Intercambiar valores sin variable temporal\na, b = 10, 20\na, b = b, a\nprint(a, b)      # 20 10"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "📥 input() — Variables desde el usuario",
    "blocks": [
      {
        "type": "paragraph",
        "text": "input() pausa el programa y espera que el usuario escriba algo. Lo que escribe queda guardado en una variable."
      },
      {
        "type": "paragraph",
        "text": "El texto dentro de los paréntesis aparece en pantalla como pregunta."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Muestra un mensaje",
            "text": "El texto dentro de los paréntesis aparece en pantalla como pregunta."
          },
          {
            "icon": "",
            "title": "Espera al usuario",
            "text": "El programa se detiene hasta que el usuario escribe y presiona Enter."
          },
          {
            "icon": "",
            "title": "Devuelve siempre str",
            "text": "Sin importar qué escriba el usuario — siempre es texto. Debes convertirlo si necesitas otro tipo."
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Básico\nvariable = input(\"Mensaje para el usuario: \")\n\n# En la práctica\nnombre = input(\"¿Cómo te llamas? \")\nedad   = int(input(\"¿Cuántos años tienes? \"))\nprecio = float(input(\"¿Cuánto cuesta? \"))\n\nprint(f\"Hola {nombre}, tienes {edad} años\")"
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Formateo de Strings"
  },
  {
    "variant": "content" as const,
    "title": "f-strings — Formateo moderno",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Un f-string es un string con la letra f antes de las comillas. Dentro puedes insertar cualquier expresión Python entre { }."
      },
      {
        "type": "paragraph",
        "text": "nombre = \"Ana\"\nedad   = 25\n\n# f-string — forma recomendada desde Python 3.6+\nprint(f\"Hola, mi nombre es {nombre} y tengo {edad} años.\")\n\n# Puedes poner expresiones directamente\nprint(f\"El doble de tu edad: {edad * 2}\")\nprint(f\"Nombre en mayúsculas: {nombre.upper()}\")\nprint(f\"2 + 2 = {2 + 2}\")\n        \n          Disponible desde Python 3.6. Es la forma más legible, rápida y recomendada hoy. Úsala siempre.\n        \n      \n      \n        Formas de formatear strings en Python (contexto histórico):"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "f-string — Python 3.6+ ✓ Usar",
            "text": ""
          },
          {
            "icon": "",
            "title": ".format() — Versión anterior",
            "text": ""
          },
          {
            "icon": "",
            "title": "% — Versión antigua",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "nombre = \"Ana\"\nedad   = 25\n\n# f-string — forma recomendada desde Python 3.6+\nprint(f\"Hola, mi nombre es {nombre} y tengo {edad} años.\")\n\n# Puedes poner expresiones directamente\nprint(f\"El doble de tu edad: {edad * 2}\")\nprint(f\"Nombre en mayúsculas: {nombre.upper()}\")\nprint(f\"2 + 2 = {2 + 2}\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(f\"Hola {nombre}\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"Hola {}\".format(nombre))"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"Hola %s\" % nombre)"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "f-strings — Formateo avanzado",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Dentro de { } puedes controlar cómo se muestra el valor con :{especificador}"
      },
      {
        "type": "code",
        "language": "python",
        "code": "pi      = 3.14159265\nnumero  = 1234567.89\nnombre  = \"Ana\"\n\n# Limitar decimales\nprint(f\"Pi: {pi:.2f}\")        # Pi: 3.14\nprint(f\"Pi: {pi:.4f}\")        # Pi: 3.1416\n\n# Número con separador de miles\nprint(f\"{numero:,.2f}\")       # 1,234,567.89\n\n# Rellenar con ceros\nprint(f\"{42:05d}\")           # 00042"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Alinear texto en columnas\nprint(f\"|{'Hola':<10}|\")       # |Hola      |  izquierda\nprint(f\"|{'Mundo':>10}|\")      # |     Mundo|  derecha\nprint(f\"|{'Centro':^10}|\")     # |  Centro  |  centrado\n\n# Porcentajes\ntasa = 0.1975\nprint(f\"Tasa: {tasa:.1%}\")      # Tasa: 19.8%"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔭 Alcance de variables (Scope)",
    "blocks": [
      {
        "type": "paragraph",
        "text": "El scope determina desde dónde se puede acceder a una variable. En Python hay dos ámbitos principales."
      },
      {
        "type": "paragraph",
        "text": "Definida fuera de cualquier función. Accesible desde cualquier parte del programa."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Variable Global",
            "text": "Definida fuera de cualquier función. Accesible desde cualquier parte del programa."
          },
          {
            "icon": "",
            "title": "Variable Local",
            "text": "Definida dentro de una función. Solo existe dentro de esa función."
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "mensaje = \"Hola\"   # global\n\ndef saludar():\n    print(mensaje)  # ✓ accede\n\nsaludar()           # Hola"
      },
      {
        "type": "code",
        "language": "python",
        "code": "def calcular():\n    resultado = 42   # local\n    print(resultado) # ✓\n\ncalcular()\nprint(resultado)      # ✗ NameError"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "💻 Actividad — Tarjeta de presentación",
    "blocks": [
      {
        "type": "code",
        "language": "python",
        "code": "# Código base — completa los ___\n\nnombre    = input(\"Nombre: \")\nedad      = int(input(\"Edad: \"))\nprofesion = input(\"Profesión: \")\nsalario   = float(input(\"Salario mensual: \"))\n\nsalario_anual  = ___\nsalario_diario = ___\naños_jubilarse = ___\n\nprint(\"\\n\" + \"=\" * 40)\nprint(f\"  {nombre.upper():^36}\")\nprint(\"=\" * 40)\nprint(f\"  Profesión : {profesion}\")\nprint(f\"  Edad      : {edad} años\")\nprint(f\"  Jubilación: en {___} años\")\nprint(f\"  Salario/mes: ${salario:,.2f}\")\nprint(f\"  Salario/año: ${___:,.2f}\")\nprint(f\"  Salario/día: ${___:,.2f}\")\nprint(\"=\" * 40)"
      }
    ]
  },
  {
    "variant": "cover" as const,
    "title": "¿Preguntas?"
  }
];
