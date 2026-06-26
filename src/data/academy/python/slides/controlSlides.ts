import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const controlSlides: Slide[] = [
  {
    "variant": "cover" as const,
    "eyebrow": "Módulo 05 · Python FCA",
    "title": "Sentencias de Control",
    "subtitle": "Condicionales · Bucles · break · continue · Proyectos"
  },
  {
    "variant": "content" as const,
    "title": "📚 Recap — Clase anterior: Colecciones",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Antes de avanzar, repasemos las cuatro estructuras de datos que vimos."
      },
      {
        "type": "paragraph",
        "text": "Ordenada, mutable. Guarda elementos que cambian."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "📋",
            "title": "list",
            "text": "Ordenada, mutable. Guarda elementos que cambian.\n\n`carrito = [\"pan\", \"leche\"]`"
          },
          {
            "icon": "📌",
            "title": "tuple",
            "text": "Ordenada, inmutable. Para datos fijos.\n\n`coords = (4.7, -74.0)`"
          },
          {
            "icon": "📖",
            "title": "dict",
            "text": "Clave → valor. Para registros y fichas.\n\n`user = {\"nombre\": \"Ana\"}`"
          },
          {
            "icon": "🎯",
            "title": "set",
            "text": "Sin orden, sin duplicados. Para etiquetas únicas.\n\n`tags = {\"python\", \"web\"}`"
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ Hoy vamos a iterar y tomar decisiones con esas colecciones usando sentencias de control."
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🗺️ ¿Qué veremos hoy?",
    "blocks": [
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "Condicionales: if · elif · else · operador ternario",
          "Bucles: for · while · range",
          "Control de flujo: break · continue · else en bucles",
          "Ejercicios en clase — playground interactivo",
          "Proyectos — aplicación real de lo aprendido"
        ]
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "💡 Los ejercicios los harás en online-python.com — sin instalar nada, solo copiar, correr y capturar pantalla."
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🧭 ¿Qué son las Sentencias de Control?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sin sentencias de control, todo programa se ejecuta de arriba a abajo, una sola vez. Las sentencias de control permiten:"
      },
      {
        "type": "paragraph",
        "text": "Ejecutar código solo si se cumple una condición."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "🔀 Tomar decisiones",
            "text": "Ejecutar código solo si se cumple una condición. → if / elif / else"
          },
          {
            "icon": "",
            "title": "🔁 Repetir acciones",
            "text": "Ejecutar código varias veces sin copiar y pegar. → for / while"
          },
          {
            "icon": "",
            "title": "✋ Controlar bucles",
            "text": "Salir o saltar iteraciones según condición. → break / continue"
          }
        ]
      }
    ]
  },
  {
    "variant": "section" as const,
    "eyebrow": "Sección 01",
    "title": "Condicionales",
    "subtitle": "if · elif · else · operador ternario"
  },
  {
    "variant": "content" as const,
    "title": "Condicionales — if y else",
    "blocks": [
      {
        "type": "paragraph",
        "text": "python\nif condición:\n    # código si es verdadera\n    print(\"¡Se cumple!\")\n\n      🔄 Agregando else: si la condición es falsa, entra al else.\n      python\nif condición:\n    print(\"Verdadera\")\nelse:\n    print(\"Falsa\")\n    \n    \n      Ejemplo real — Spotify Premium:"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ Sintaxis básica: ejecuta el bloque solo si la condición es True."
      },
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "🔄 Agregando else: si la condición es falsa, entra al else."
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "🎬 Stranger Things: Si Eleven usa sus poderes → se le sangra la nariz, si no → todos están salvos."
      },
      {
        "type": "code",
        "language": "python",
        "code": "if condición:\n    # código si es verdadera\n    print(\"¡Se cumple!\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "if condición:\n    print(\"Verdadera\")\nelse:\n    print(\"Falsa\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "es_premium = True\n\nif es_premium:\n    print(\"🎵 Sin anuncios. Calidad máxima.\")\nelse:\n    print(\"📢 Anuncio cada 3 canciones.\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Condicionales — elif",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Se usa para verificar otras condiciones alternativas. Solo se evalúa si la anterior fue falsa."
      },
      {
        "type": "paragraph",
        "text": "python\nif condición1:\n    # si condición1 es verdadera\nelif condición2:\n    # si condición2 es verdadera\nelse:\n    # si ninguna se cumple\n\n      Ejemplo — Rating de Netflix:"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "🎮 Breaking Bad",
            "text": "Si Walter tiene más de $10M → se retira. elif tiene deudas → cocina más. elif lo persigue Hank → huye. else → negocia."
          },
          {
            "icon": "",
            "title": "🎯 Videojuegos RPG",
            "text": "Si HP > 70% → seguir peleando. elif HP > 30% → usar pociones. else → escapar del combate."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ Regla clave: en un bloque if/elif/else solo se ejecuta un bloque. El primero que sea verdadero gana, los demás se ignoran."
      },
      {
        "type": "code",
        "language": "python",
        "code": "if condición1:\n    # si condición1 es verdadera\nelif condición2:\n    # si condición2 es verdadera\nelse:\n    # si ninguna se cumple"
      },
      {
        "type": "code",
        "language": "python",
        "code": "calificacion = 8.7\n\nif calificacion >= 9.0:\n    print(\"⭐ Obra maestra\")\nelif calificacion >= 7.5:\n    print(\"👍 Muy recomendada\")\nelif calificacion >= 6.0:\n    print(\"😐 Aceptable\")\nelse:\n    print(\"👎 No vale la pena\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Varios if vs if/elif/else",
    "blocks": [
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "⚠️ Varios if separados: todas las condiciones se evalúan siempre."
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ if/elif/else: se evalúa solo UN bloque. El primero verdadero gana."
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "💡 Usa varios if cuando las condiciones son independientes. Usa if/elif/else cuando son excluyentes (solo puede cumplirse una)."
      },
      {
        "type": "code",
        "language": "python",
        "code": "x = 15\n\nif x > 10:\n    print(\"Mayor que 10\")  # ✅ se imprime\nif x > 0:\n    print(\"Positivo\")       # ✅ también se imprime\n\n# Ambas se ejecutan → 2 prints"
      },
      {
        "type": "code",
        "language": "python",
        "code": "x = 15\n\nif x > 10:\n    print(\"Mayor que 10\")  # ✅ se imprime\nelif x > 0:\n    print(\"Positivo\")       # ❌ no llega aquí\nelse:\n    print(\"Cero o negativo\") # ❌ tampoco\n\n# Solo 1 print → más eficiente"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Operador Ternario — if en una línea",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Forma compacta de escribir un if/else cuando solo necesitas asignar un valor."
      },
      {
        "type": "paragraph",
        "text": "Sintaxis:"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "🏦 Banco",
            "text": ""
          },
          {
            "icon": "",
            "title": "🎮 Game of Thrones",
            "text": ""
          }
        ]
      },
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "⚠️ Úsalo solo cuando la expresión es simple. Si la lógica es compleja, un if/else normal es más legible."
      },
      {
        "type": "code",
        "language": "python",
        "code": "resultado = valor_si_verdadero if condición else valor_si_falso"
      },
      {
        "type": "code",
        "language": "python",
        "code": "edad = 20\nacceso = \"Permitido\" if edad >= 18 else \"Denegado\"\nprint(acceso)  # Permitido"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"VIP 🥂\" if edad >= 18 else \"Sin acceso 🚫\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "estado = \"Aprobado\" if saldo >= 0 else \"En rojo\""
      },
      {
        "type": "code",
        "language": "python",
        "code": "vivo = \"Sobrevive\" if personaje != \"Ned\" else \"RIP\""
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "🎯 Ejercicio en Clase — Condicionales",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Abre el editor, pega el código de abajo y ejecútalo."
      },
      {
        "type": "paragraph",
        "text": "Ejercicio: Sistema de acceso a concierto"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "Prueba en el playground: online-python.com"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "💪 Reto extra: agrega una condición para membresía VIP — si tiene boleta VIP, imprime un mensaje especial con camarines incluidos."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# MODIFICA las variables y observa el resultado\nedad = int(input(\"¿Cuántos años tienes? \"))\ntiene_boleta = input(\"¿Tienes boleta? (si/no) \")\n\nif edad  18:\n    print(\"🚫 Menor de edad - acceso denegado\")\nelif tiene_boleta == \"si\":\n    print(\"🎵 ¡Bienvenido al concierto!\")\nelif edad >= 65:\n    print(\"🎟️ Adulto mayor - entrada gratis\")\nelse:\n    print(\"❌ No tienes boleta\")"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "📝 Ejercicios para Casa — Condicionales Básicos",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Cada ejercicio está como archivo .py separado en el Moodle. Entrégalos individualmente."
      },
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "Positivo, negativo o cero — Pide un número e imprime si es positivo, negativo o cero.",
          "Edad para votar — Solicita la edad e imprime si puede votar (≥18) o no puede votar.",
          "Par o impar — Pide un número y determina si es par o impar.",
          "Mayor de dos números — Pide dos números e imprime cuál es mayor, o si son iguales.",
          "Clasificación de notas — Nota 0–100: 90–100 Excelente · 70–89 Aprobado · <70 Reprobado."
        ]
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "📝 Ejercicios para Casa — Condicionales Intermedios y Retadores",
    "blocks": [
      {
        "type": "paragraph",
        "text": "INTERMEDIOS (06–10)"
      },
      {
        "type": "paragraph",
        "text": "RETADORES (11–15)"
      },
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "Tipo de carácter — letra, número o símbolo especial.",
          "Año bisiesto — divisible por 4, no por 100, excepto si por 400.",
          "Descuento en tienda — ≥$100k → 10% · ≥$50k → 5% · <$50k → sin descuento.",
          "Día de la semana — número 1-7 → nombre del día.",
          "Categoría de edad — niño · adolescente · adulto · adulto mayor.",
          "Calculadora simple — dos números y una operación (+, -, *, /).",
          "Mayor de tres números — pide tres y muestra cuál es el mayor.",
          "Calificaciones con letras — A/B/C/D/F según rango.",
          "Verificar contraseña — \"python123\" → acceso concedido o denegado.",
          "Conversor de temperatura — <0°C frío · 0–25°C templado · >25°C caluroso."
        ]
      }
    ]
  },
  {
    "variant": "section" as const,
    "eyebrow": "Sección 02",
    "title": "Bucles y Ciclos",
    "subtitle": "for · while · break · continue · else en bucles"
  },
  {
    "variant": "content" as const,
    "title": "Bucle for — Iteraciones Definidas",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Recorre cada elemento de una secuencia. Sabes de antemano cuántas veces se ejecutará."
      },
      {
        "type": "paragraph",
        "text": "python\nfor elemento in secuencia:\n    # bloque a repetir por cada elemento\n\n      Con range():"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "🔢 range(inicio, fin, paso)",
            "text": "range(10) → 0 a 9  |  range(1,11) → 1 a 10  |  range(10,0,-1) → cuenta regresiva"
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "🎮 Recuerda: for es como el juego de \"Tingo Tingo Tango\" — el loop avanza elemento por elemento y cuando se acaba la secuencia, para."
      },
      {
        "type": "code",
        "language": "python",
        "code": "for elemento in secuencia:\n    # bloque a repetir por cada elemento"
      },
      {
        "type": "code",
        "language": "python",
        "code": "for i in range(5):           # 0, 1, 2, 3, 4\n    print(i)\n\nfor i in range(1, 6):         # 1, 2, 3, 4, 5\n    print(i)\n\nfor i in range(0, 10, 2):    # 0, 2, 4, 6, 8\n    print(i)"
      },
      {
        "type": "code",
        "language": "python",
        "code": "playlist = [\"Blinding Lights\", \"Starboy\",\n             \"Save Your Tears\", \"Die For You\"]\n\nfor cancion in playlist:\n    print(f\"🎵 Reproduciendo: {cancion}\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "for — Recorriendo colecciones",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Lista — personajes de Squid Game:"
      },
      {
        "type": "paragraph",
        "text": "python\nparticipantes = [\"456\", \"067\", \"218\", \"001\"]\nfor numero in participantes:\n    print(f\"Jugador #{numero} en el juego\")\n\n      Diccionario — inventario tienda:"
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "💡 for funciona con cualquier objeto iterable: listas, tuplas, dicts, strings, sets, range..."
      },
      {
        "type": "code",
        "language": "python",
        "code": "participantes = [\"456\", \"067\", \"218\", \"001\"]\nfor numero in participantes:\n    print(f\"Jugador #{numero} en el juego\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "precios = {\"café\": 3500, \"agua\": 1500, \"pan\": 2000}\n\nfor producto, precio in precios.items():\n    print(f\"{producto}: ${precio:,}\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "episodios = [\"Piloto\", \"El regreso\", \"Final\"]\n\nfor i, ep in enumerate(episodios, 1):\n    print(f\"Ep {i}: {ep}\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "palabra = \"Python\"\nfor letra in palabra:\n    print(letra)  # P y t h o n"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Bucle while — Iteraciones Indefinidas",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Ejecuta el bloque mientras la condición sea verdadera. No sabes de antemano cuántas veces."
      },
      {
        "type": "paragraph",
        "text": "python\nwhile condición:\n    # bloque a repetir\n\n      Ejemplo — Login Instagram:"
      },
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "⚠️ Peligro: bucle infinito. Si la condición nunca se vuelve falsa, el programa corre para siempre."
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ Siempre asegúrate que la condición del while eventualmente se vuelva False, o usa break."
      },
      {
        "type": "code",
        "language": "python",
        "code": "while condición:\n    # bloque a repetir"
      },
      {
        "type": "code",
        "language": "python",
        "code": "intentos = 0\ncontrasena = \"\"\n\nwhile contrasena != \"python123\" and intentos  3:\n    contrasena = input(\"Contraseña: \")\n    intentos += 1\n\nif contrasena == \"python123\":\n    print(\"✅ Bienvenido\")\nelse:\n    print(\"🔒 Cuenta bloqueada\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "— PELIGRO\nwhile True:\n    print(\"Esto se repite sin fin\")\n# Como Rick haciendo clones de sí mismo\n# para siempre... para siempre... para siempre"
      }
    ]
  },
  {
    "variant": "content" as const,
    "blocks": [
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "🔴 break — sale completamente del bucle, incluso si la condición todavía es verdadera."
      },
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "🟡 continue — salta la iteración actual y pasa a la siguiente."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Buscar villano en lista (Narcos)\nbuscados = [\"Escobar\", \"Cali\", \"Maza\"]\nfor nombre in buscados:\n    if nombre == \"Cali\":\n        print(\"🎯 ¡Encontrado! Deteniendo búsqueda.\")\n        break\n    print(f\"Revisando: {nombre}\")\n\n# Imprime: Revisando: Escobar\n#          🎯 ¡Encontrado! Deteniendo búsqueda."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Mostrar solo capítulos sin spoiler\ncapitulos = [1, 2, 3, 4, 5]\nspoilers = [3, 5]\n\nfor cap in capitulos:\n    if cap in spoilers:\n        continue  # salta este\n    print(f\"📺 Capítulo {cap} — sin spoilers\")\n\n# Imprime cap 1, 2, 4 (salta 3 y 5)"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "break y continue — Ejemplo completo",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sistema de números válidos:"
      },
      {
        "type": "paragraph",
        "text": "python\ncontador = 0\n\nwhile contador  3:\n    numero = int(input(\"Ingresa un número: \"))\n\n    if numero == 0:\n        print(\"Cero ignorado → continue\\n\")\n        continue  # salta, no suma contador\n\n    if numero  0:\n        print(\"Negativo → break\\n\")\n        break     # sale del ciclo\n\n    print(f\"✅ Aceptado: {numero} → cuadrado: {numero**2}\\n\")\n    contador += 1\nelse:\n    print(\"🏆 ¡Ingresaste 3 números válidos!\")\n    \n    \n      \n        ⚠️ ¿Qué pasa con el else?\n      \n      \n        Si usa break →\n        El bloque else NO se ejecuta."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Si usa break →",
            "text": "El bloque else NO se ejecuta."
          },
          {
            "icon": "",
            "title": "Si termina normal →",
            "text": "El bloque else SÍ se ejecuta."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "warning" as const,
        "text": "⚠️ ¿Qué pasa con el else?"
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "💡 El else en bucles es como decir: \"si llegaste al final sin interrupciones, ejecuta esto\"."
      },
      {
        "type": "code",
        "language": "python",
        "code": "contador = 0\n\nwhile contador  3:\n    numero = int(input(\"Ingresa un número: \"))\n\n    if numero == 0:\n        print(\"Cero ignorado → continue\\n\")\n        continue  # salta, no suma contador\n\n    if numero  0:\n        print(\"Negativo → break\\n\")\n        break     # sale del ciclo\n\n    print(f\"✅ Aceptado: {numero} → cuadrado: {numero**2}\\n\")\n    contador += 1\nelse:\n    print(\"🏆 ¡Ingresaste 3 números válidos!\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "else en bucles — El \"si terminaste bien\"",
    "blocks": [
      {
        "type": "paragraph",
        "text": "El else se ejecuta solo si el bucle termina sin ser interrumpido por break."
      },
      {
        "type": "paragraph",
        "text": "python — for/else\nfor elemento in iterable:\n    if condicion:\n        break\nelse:\n    # solo si NO se usó break\n\n      Buscar un producto:"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "✅ El for/else es una característica única de Python. En otros lenguajes no existe. Muy útil para búsquedas."
      },
      {
        "type": "code",
        "language": "python",
        "code": "— for/else\nfor elemento in iterable:\n    if condicion:\n        break\nelse:\n    # solo si NO se usó break"
      },
      {
        "type": "code",
        "language": "python",
        "code": "productos = [\"café\", \"agua\", \"pan\"]\nbuscar = \"leche\"\n\nfor p in productos:\n    if p == buscar:\n        print(\"✅ Encontrado\")\n        break\nelse:\n    print(\"❌ No existe en el inventario\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "usuarios_premium = [\"Ana\", \"Luis\", \"Marta\"]\nusuario = input(\"¿Quién eres? \")\n\nfor u in usuarios_premium:\n    if u == usuario:\n        print(\"🌟 Acceso premium concedido\")\n        break\nelse:\n    print(\"🔒 No eres premium\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "List Comprehension — for en una línea",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Forma compacta de crear una lista nueva transformando o filtrando otra lista."
      },
      {
        "type": "paragraph",
        "text": "Sintaxis:"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "💡 List comprehension = elegante y eficiente. Pero si la lógica se complica, usa el for normal. Legibilidad primero."
      },
      {
        "type": "code",
        "language": "python",
        "code": "nueva = [expresión for item in iterable]\nfiltrada = [expr for item in iterable if condición]"
      },
      {
        "type": "code",
        "language": "python",
        "code": "— forma larga\ncuadrados = []\nfor x in range(5):\n    cuadrados.append(x**2)"
      },
      {
        "type": "code",
        "language": "python",
        "code": "— list comprehension\ncuadrados = [x**2 for x in range(5)]\n# [0, 1, 4, 9, 16]"
      },
      {
        "type": "code",
        "language": "python",
        "code": "series = [\n    {\"nombre\": \"Breaking Bad\", \"rating\": 9.5},\n    {\"nombre\": \"Fleabag\",      \"rating\": 8.7},\n    {\"nombre\": \"Emily Paris\",  \"rating\": 6.9},\n]\n\ntop = [s[\"nombre\"] for s in series if s[\"rating\"] >= 8.5]\nprint(top)\n# ['Breaking Bad', 'Fleabag']"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "🎯 Ejercicio en Clase — Bucles",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Copia el código, pégalo en el editor y ejecútalo. Modifica los valores y observa cómo cambia el comportamiento."
      },
      {
        "type": "paragraph",
        "text": "Ejercicio: Sistema de calificaciones dinámico"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "Prueba en el playground: online-python.com"
      },
      {
        "type": "code",
        "language": "python",
        "code": "notas = []\nprint(\"Ingresa hasta 5 notas (escribe 'fin' para terminar)\")\n\nwhile len(notas)  5:\n    entrada = input(f\"Nota {len(notas)+1}: \")\n    if entrada == \"fin\":\n        break\n    nota = float(entrada)\n    if nota  0 or nota > 5:\n        print(\"⚠️ Nota inválida (0-5), intenta de nuevo\")\n        continue\n    notas.append(nota)\n\nif notas:\n    promedio = sum(notas) / len(notas)\n    print(f\"\\nNotas: {notas}\")\n    print(f\"Promedio: {promedio:.2f}\")\n    print(\"✅ Aprobado\" if promedio >= 3.0 else \"❌ Reprobado\")"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "📝 Ejercicios para Casa — Bucles Básicos y Medios",
    "blocks": [
      {
        "type": "paragraph",
        "text": "BÁSICOS (01–05)"
      },
      {
        "type": "paragraph",
        "text": "INTERMEDIOS (06–10)"
      },
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "Sumar lista — lista = [1,2,3,4,5], suma con for.",
          "Mayor en lista — [3,8,2,7,5], encuentra el número mayor.",
          "Contar pares — [2,5,8,9,12,15], cuenta cuántos son pares.",
          "Verificar palabra — pide una palabra, verifica si está en la lista.",
          "Sumar diccionario — suma los valores del dict de notas.",
          "Filtrar vocales — nueva lista solo con palabras que inician en vocal.",
          "Buscar con break — recorre lista, para al encontrar el número.",
          "Conteo de letras — dict con cuántas veces aparece cada letra en \"banana\".",
          "continue — solo pares — usa continue para imprimir solo los pares de 0-9.",
          "Adivinar contraseña — while con máximo 3 intentos."
        ]
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "📝 Ejercicios para Casa — Bucles Avanzados",
    "blocks": [
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "11\n      Filtrar estudiantes que pasaron — dict {'Ana': 4.2, 'Luis': 2.8}, crea nuevo dict con nota ≥ 3.0.",
          "12\n      Producto más caro — lista de dicts con nombre y precio, encuentra el más costoso.",
          "13\n      Cajero automático — saldo = 100000, el usuario retira dinero con while hasta saldo 0 o escribir \"salir\".",
          "14\n      Menú interactivo — while + if/elif: 1.Agregar elemento 2.Ver lista 3.Salir.",
          "15\n      Sistema de votación — pide candidatos con while (fin=break), cuenta votos, muestra ganador."
        ]
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "🏆 Reto extra: Resuelve los ejercicios 13 y 14 y únelos en un solo programa: un menú que incluya la opción de simular retiros del cajero."
      }
    ]
  },
  {
    "variant": "section" as const,
    "eyebrow": "Proyectos",
    "title": "Aplica lo aprendido",
    "subtitle": "Dos proyectos reales que combinan todo lo del módulo. Elige uno o hazlos ambos."
  },
  {
    "variant": "practice" as const,
    "title": "🎬 Proyecto 1 — ¿Qué serie ver hoy?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Crea un recomendador de series basado en el estado de ánimo del usuario. El programa pregunta cómo se siente y recomienda una serie con una descripción."
      },
      {
        "type": "paragraph",
        "text": "Caso real: Esto es exactamente lo que hacen los algoritmos de recomendación de Netflix, Disney+ y HBO Max — clasifican según tus preferencias y estado."
      },
      {
        "type": "heading",
        "text": "Descripción",
        "level": 3 as const
      },
      {
        "type": "paragraph",
        "text": "Crea un recomendador de series basado en el estado de ánimo del usuario. El programa pregunta cómo se siente y recomienda una serie con una descripción."
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "🎯 Aplica: if/elif/else · operador ternario · input"
      },
      {
        "type": "code",
        "language": "python",
        "code": "— proyecto_01_que_serie_ver.py\nprint(\"🎬 Recomendador de Series FCA\")\nanimo = input(\"¿Cómo te sientes? (alegre/triste/emocionado/aburrido/misterio): \")\ncompanía = input(\"¿Solo o en grupo? (solo/grupo): \")\n\nif animo == \"alegre\":\n    serie = \"Brooklyn Nine-Nine\"\n    genero = \"Comedia\"\nelif animo == \"triste\":\n    serie = \"Ted Lasso\"\n    genero = \"Comedia motivacional\"\nelif animo == \"emocionado\":\n    serie = \"Stranger Things\"\n    genero = \"Ciencia ficción\"\nelif animo == \"misterio\":\n    serie = \"Dark\"\n    genero = \"Thriller / Viajes en el tiempo\"\nelse:\n    serie = \"The Office\"\n    genero = \"Comedia de oficina\"\n\nprint(f\"\\n✨ Recomendación: {serie} ({genero})\")\nprint(\"👥 Ideal para:\", \"ver en grupo 🍿\" if companía==\"grupo\" else \"ver solo 🛋️\")"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "📊 Proyecto 2 — Sistema de Registro de Notas",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Crea un sistema que registre notas de múltiples estudiantes, calcule promedios, muestre quien pasó y quien reprobó, y encuentre al mejor estudiante."
      },
      {
        "type": "paragraph",
        "text": "Caso real: Sistemas como Moodle, Canvas y Google Classroom usan exactamente esta lógica para gestionar calificaciones, alertas de bajo rendimiento y rankings."
      },
      {
        "type": "list",
        "style": "numbered" as const,
        "items": [
          "1\n          Menú while: registrar estudiante · ver todos · salir",
          "2\n          Cada estudiante tiene nombre y lista de notas (mínimo 3)",
          "3\n          Calcula promedio y determina si aprobó o reprobó (≥3.0)",
          "4\n          Al listar: usa for para mostrar todos con su estado",
          "5\n          Al final: muestra el estudiante con el promedio más alto"
        ]
      },
      {
        "type": "callout",
        "variant": "note" as const,
        "text": "🎯 Aplica: while · for · if/elif/else · break · continue · dict · list"
      },
      {
        "type": "callout",
        "variant": "tip" as const,
        "text": "💡 El archivo base está en proyectos/proyecto_02_registro_notas.py con comentarios guía para empezar."
      }
    ]
  },
  {
    "variant": "cover" as const,
    "subtitle": "Ahora tu código puede decidir y repetir."
  }
];
