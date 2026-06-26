import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const datosPrimitivosSlides: Slide[] = [
  {
    "variant": "cover" as const,
    "eyebrow": "Módulo 2 — Tipos de Datos",
    "title": "Datos Primitivos",
    "subtitle": "Los bloques fundamentales de cualquier programa Python"
  },
  {
    "variant": "content" as const,
    "title": "¿Qué son los datos primitivos?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Todo valor en Python tiene un tipo. Los datos primitivos son los tipos más básicos que existen — los que Python conoce desde el inicio, sin necesidad de importar nada."
      },
      {
        "type": "paragraph",
        "text": "Texto"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "",
            "text": "Texto"
          },
          {
            "icon": "",
            "title": "",
            "text": "Entero"
          },
          {
            "icon": "",
            "title": "",
            "text": "Decimal"
          },
          {
            "icon": "",
            "title": "",
            "text": "Verdadero/Falso"
          },
          {
            "icon": "",
            "title": "",
            "text": "Vacío / nulo"
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(type(42))          # <class 'int'>\nprint(type(3.14))        # <class 'float'>\nprint(type(True))        # <class 'bool'>\nprint(type(\"Hola mundo\")) # <class 'str'>\nprint(type(None))        # <class 'NoneType'>"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔤 String <str>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Un str (string) es una cadena de caracteres. Puede contener letras, números, símbolos y espacios. Siempre va entre comillas."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Concatenación — unir strings",
            "text": ""
          },
          {
            "icon": "",
            "title": "Repetición",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Comillas simples o dobles — igual\nnombre  = \"Ana\"\nsaludo  = 'Hola mundo'\n\n# Comillas triples — texto multilínea\nmensaje = \"\"\"Este es\nun mensaje\nen varias líneas.\"\"\"\n\n# f-string — insertar variables en texto\nedad = 25\nprint(f\"Tengo {edad} años\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "a = \"Hola\"\nb = \"mundo\"\nprint(a + \" \" + b)  # Hola mundo"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"=\" * 20)\n# ===================="
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "📐 Indexación y Slicing",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Cada carácter de un string tiene una posición (índice) que empieza en 0. También puedes contar desde el final con índices negativos."
      },
      {
        "type": "code",
        "language": "python",
        "code": "texto = \"Python\"\n\nprint(texto[0])    # P  — primer carácter\nprint(texto[-1])   # n  — último carácter\nprint(texto[1:4])  # yth — del índice 1 al 3\nprint(texto[:3])   # Pyt — desde el inicio\nprint(texto[3:])   # hon — hasta el final\nprint(texto[::-1]) # nohtyP — invertido"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔧 Métodos comunes de strings",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Los métodos se llaman con punto después del string o variable. Referencia rápida de los más usados:"
      },
      {
        "type": "spreadsheet",
        "title": "Métodos de str",
        "headers": ["Método", "Ejemplo", "Resultado"],
        "rows": [
          [".upper()", "\"hola\".upper()", "\"HOLA\""],
          [".lower()", "\"Python\".lower()", "\"python\""],
          [".capitalize()", "\"python\".capitalize()", "\"Python\""],
          [".title()", "\"hola mundo\".title()", "\"Hola Mundo\""],
          [".strip()", "\"  hola  \".strip()", "\"hola\""],
          [".replace()", "\"hola mundo\".replace(\"hola\", \"hi\")", "\"hi mundo\""],
          [".split()", "\"a,b,c\".split(\",\")", "['a', 'b', 'c']"],
          [".join()", "\" \".join([\"hola\", \"mundo\"])", "\"hola mundo\""],
          [".find()", "\"python\".find(\"th\")", "2"],
          [".startswith()", "\"python\".startswith(\"py\")", "True"],
          [".endswith()", "\"archivo.txt\".endswith(\".txt\")", "True"]
        ],
        "copyLabel": "Copiar tabla"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "💡 Strings en la práctica",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Los métodos más útiles en el día a día: limpiar datos, formatear texto, separar información y validar entradas."
      },
      {
        "type": "boxes",
        "items": [
          {
            "variant": "brand",
            "title": "strip() + title()",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Limpiar espacios y capitalizar nombres ingresados por el usuario."
              }
            ]
          },
          {
            "variant": "default",
            "title": "split() + join()",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Separar CSV en columnas y volver a unir listas en una sola cadena."
              }
            ]
          },
          {
            "variant": "default",
            "title": "replace()",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Sustituir texto sin crear un string nuevo manualmente."
              }
            ]
          },
          {
            "variant": "muted",
            "title": "startswith() / endswith()",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Validar extensiones de archivo, prefijos de URL o formatos de dato."
              }
            ]
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Limpiar y formatear input del usuario\nnombre = \"  jesus barros  \"\nprint(nombre.strip().title())   # \"Jesus Barros\"\n\n# Separar datos de un CSV\ndatos = \"Ana,25,Python\"\nnombre, edad, curso = datos.split(\",\")\nprint(nombre, edad)             # Ana 25\n\n# Unir una lista en una frase\npalabras = [\"Python\", \"es\", \"genial\"]\nprint(\" \".join(palabras))       # Python es genial\n\n# Reemplazar texto\nprint(\"Hola mundo\".replace(\"mundo\", \"Python\"))  # Hola Python\n\n# Validar extensión de archivo\narchivo = \"reporte.pdf\"\nif archivo.endswith(\".pdf\"):\n    print(\"Archivo PDF válido\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔢 Integer <int>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Números enteros, positivos o negativos, sin parte decimal. En Python no hay límite de tamaño para un entero."
      },
      {
        "type": "code",
        "language": "python",
        "code": "a = 10              # positivo\nb = -5             # negativo\nc = 0               # cero\nd = 123456789012345 # muy grande: sin problema"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "➕ Operadores aritméticos",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Operadores que puedes usar con enteros y otros tipos numéricos en Python:"
      },
      {
        "type": "spreadsheet",
        "title": "Operadores",
        "headers": ["Operador", "Símbolo", "Ejemplo", "Resultado"],
        "rows": [
          ["Suma", "+", "5 + 3", "8"],
          ["Resta", "-", "10 - 4", "6"],
          ["Multiplicación", "*", "6 * 3", "18"],
          ["División", "/", "12 / 4", "3"],
          ["Módulo (residuo de división)", "%", "10 % 3", "1"],
          ["Potenciación", "**", "2 ** 3", "8"],
          ["Incremento", "+=", "x += 1", "x + 1"],
          ["Decremento", "-=", "x -= 1", "x - 1"]
        ],
        "copyLabel": "Copiar tabla",
        "caption": "Python no usa ++ ni -- como C o Java; el incremento y decremento se escriben con += 1 y -= 1."
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "📐 Float <float>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Números con parte decimal. Python los almacena como punto flotante de 64 bits (doble precisión)."
      },
      {
        "type": "paragraph",
        "text": "pi      = 3.14159\nprecio  = 9.99\nnegativo= -0.5\ngrande  = 1.5e10   # notación científica = 15,000,000,000\n\n# División SIEMPRE produce float\nprint(10 / 2)    # 5.0 — no 5\nprint(10 // 2)   # 5  — división entera\n        \n          ⚠️ Precisión de float\n\n          0.1 + 0.2 → 0.30000000000000004\n\n          Limitación del hardware, no de Python. Para dinero usar decimal.Decimal.\n        \n      \n      \n        Conversión entre tipos numéricos:"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Funciones útiles con números",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "pi      = 3.14159\nprecio  = 9.99\nnegativo= -0.5\ngrande  = 1.5e10   # notación científica = 15,000,000,000\n\n# División SIEMPRE produce float\nprint(10 / 2)    # 5.0 — no 5\nprint(10 // 2)   # 5  — división entera"
      },
      {
        "type": "code",
        "language": "python",
        "code": "x = 5\nprint(float(x))   # 5.0 — int a float\n\ny = 3.9\nprint(int(y))     # 3   — trunca, no redondea\n\nprint(round(3.9)) # 4   — redondear\nprint(round(3.14159, 2)) # 3.14"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "✅ Boolean <bool>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Solo dos valores posibles: True o False. La base de toda lógica condicional. Con mayúscula inicial en Python."
      },
      {
        "type": "paragraph",
        "text": "activo   = True\nbloqueado= False\n\n# Cualquier valor puede convertirse a bool\nprint(bool(0))        # False\nprint(bool(1))        # True\nprint(bool(\"\"))       # False — string vacío\nprint(bool(\"hola\"))   # True\nprint(bool([]))       # False — lista vacía\nprint(bool([1,2]))    # True\n      \n      \n        Valores que Python considera False:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "activo   = True\nbloqueado= False\n\n# Cualquier valor puede convertirse a bool\nprint(bool(0))        # False\nprint(bool(1))        # True\nprint(bool(\"\"))       # False — string vacío\nprint(bool(\"hola\"))   # True\nprint(bool([]))       # False — lista vacía\nprint(bool([1,2]))    # True"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🧠 Operadores lógicos y de comparación",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Primero comparas valores con operadores de comparación (producen True o False); luego combinas esas condiciones con operadores lógicos."
      },
      {
        "type": "spreadsheet",
        "title": "Operadores de comparación",
        "headers": ["Operador", "Símbolo", "Ejemplo", "Resultado"],
        "rows": [
          ["Igualdad", "==", "5 == 5", "True"],
          ["Igualdad (tipos distintos)", "==", "5 == \"5\"", "False"],
          ["Diferencia", "!=", "10 != 3", "True"],
          ["Mayor que", ">", "8 > 5", "True"],
          ["Menor que", "<", "3 < 7", "True"],
          ["Mayor o igual que", ">=", "5 >= 5", "True"],
          ["Menor o igual que", "<=", "6 <= 4", "False"]
        ],
        "copyLabel": "Copiar tabla",
        "caption": "Python no usa === ni !== (son de JavaScript). Con == no convierte tipos: comparar int con str siempre da False."
      },
      {
        "type": "spreadsheet",
        "title": "Operadores lógicos",
        "headers": ["Operador", "Descripción", "Ejemplo", "Resultado"],
        "rows": [
          ["and", "Y lógico", "True and False", "False"],
          ["or", "O lógico", "True or False", "True"],
          ["not", "Negación lógica", "not True", "False"]
        ],
        "copyLabel": "Copiar tabla"
      },
      {
        "type": "heading",
        "text": "Ejemplo en código",
        "level": 3
      },
      {
        "type": "code",
        "language": "python",
        "code": "edad     = 20\ntiene_id = True\n\n# Comparación + and: ambas condiciones deben ser True\nprint(edad >= 18 and tiene_id)  # True\n\n# Comparación + or: basta con que una sea True\nprint(edad < 18 or tiene_id)    # True\n\n# not: invierte el valor booleano\nprint(not tiene_id)             # False"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "∅ NoneType <None>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "None representa la ausencia de valor. Es el equivalente a null en otros lenguajes. No es 0, no es \"\", no es False — es literalmente la nada."
      },
      {
        "type": "paragraph",
        "text": "resultado = None\n\nprint(resultado)          # None\nprint(type(resultado))    # <class 'NoneType'>\n\n# Comparar con None → usar \"is\", no \"==\"\nprint(resultado is None)  # True ✓ forma correcta\nprint(resultado == None) # True  (funciona pero no recomendado)\n      \n      \n        ¿Cuándo aparece None en la práctica?"
      },
      {
        "type": "code",
        "language": "python",
        "code": "resultado = None\n\nprint(resultado)          # None\nprint(type(resultado))    # <class 'NoneType'>\n\n# Comparar con None → usar \"is\", no \"==\"\nprint(resultado is None)  # True ✓ forma correcta\nprint(resultado == None) # True  (funciona pero no recomendado)"
      },
      {
        "type": "code",
        "language": "python",
        "code": "def sin_retorno():\n    print(\"Hola\")\n    # No hay return\n\nx = sin_retorno()\nprint(x)   # None"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔄 Conversión de tipos (Type Casting)",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python permite convertir valores de un tipo a otro usando funciones nativas."
      },
      {
        "type": "paragraph",
        "text": "# str → int\nedad_texto = \"25\"\nedad       = int(edad_texto)   # 25\n\n# int → str\nnumero     = 42\ntexto      = str(numero)       # \"42\"\n\n# str → float\nprecio_txt = \"9.99\"\nprecio     = float(precio_txt) # 9.99\n\n# input() SIEMPRE devuelve str\nedad_raw   = input(\"Tu edad: \")\nedad       = int(edad_raw)      # convertir antes de operar\n      \n      \n        Conversiones que funcionan:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# str → int\nedad_texto = \"25\"\nedad       = int(edad_texto)   # 25\n\n# int → str\nnumero     = 42\ntexto      = str(numero)       # \"42\"\n\n# str → float\nprecio_txt = \"9.99\"\nprecio     = float(precio_txt) # 9.99\n\n# input() SIEMPRE devuelve str\nedad_raw   = input(\"Tu edad: \")\nedad       = int(edad_raw)      # convertir antes de operar"
      }
    ]
  },
  {
    "variant": "cover" as const,
    "title": "¿Preguntas?"
  }
];
