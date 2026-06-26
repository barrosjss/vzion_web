import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const estructurasSlides: Slide[] = [
  {
    "variant": "cover" as const,
    "eyebrow": "Módulo 4 — Colecciones",
    "title": "Estructuras de Datos",
    "subtitle": "list · tuple · dict · set"
  },
  {
    "variant": "content" as const,
    "title": "Las 4 estructuras de datos en Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Ordenada · Mutable · Duplicados OK"
      },
      {
        "type": "paragraph",
        "text": "[1, 2, 3]"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "",
            "text": "Ordenada · Mutable · Duplicados OK [1, 2, 3]"
          },
          {
            "icon": "",
            "title": "",
            "text": "Ordenada · Inmutable · Duplicados OK (1, 2, 3)"
          },
          {
            "icon": "",
            "title": "",
            "text": "Clave:Valor · Mutable · Claves únicas {\"a\": 1}"
          },
          {
            "icon": "",
            "title": "",
            "text": "Sin orden · Mutable · Sin duplicados {1, 2, 3}"
          }
        ]
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Listas [ ]"
  },
  {
    "variant": "content" as const,
    "title": "📋 Lista list",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Colección ordenada y mutable de elementos. Puede contener cualquier tipo de dato, incluso mezclas. Es la estructura más flexible de Python."
      },
      {
        "type": "paragraph",
        "text": "# Crear listas\nnumeros   = [1, 2, 3, 4, 5]\nnombres   = [\"Ana\", \"Luis\", \"María\"]\nmixta     = [1, \"dos\", 3.0, True, None]\nvacia     = []\n\n# Acceder por índice\nprint(nombres[0])    # \"Ana\"\nprint(nombres[-1])   # \"María\" — último\n\n# Slicing\nprint(numeros[1:4])  # [2, 3, 4]\nprint(numeros[::-1]) # [5, 4, 3, 2, 1] invertida\n\n# Modificar elemento\nnombres[1] = \"Carlos\"  # ✓ las listas son mutables\n      \n      \n        Operaciones básicas:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Crear listas\nnumeros   = [1, 2, 3, 4, 5]\nnombres   = [\"Ana\", \"Luis\", \"María\"]\nmixta     = [1, \"dos\", 3.0, True, None]\nvacia     = []\n\n# Acceder por índice\nprint(nombres[0])    # \"Ana\"\nprint(nombres[-1])   # \"María\" — último\n\n# Slicing\nprint(numeros[1:4])  # [2, 3, 4]\nprint(numeros[::-1]) # [5, 4, 3, 2, 1] invertida\n\n# Modificar elemento\nnombres[1] = \"Carlos\"  # ✓ las listas son mutables"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Longitud\nprint(len(numeros))       # 5\n\n# Verificar existencia\nprint(3 in numeros)       # True\nprint(99 not in numeros)  # True\n\n# Concatenar listas\na = [1, 2]\nb = [3, 4]\nprint(a + b)              # [1, 2, 3, 4]\n\n# Repetir\nprint([0] * 5)            # [0, 0, 0, 0, 0]\n\n# Funciones útiles\nprint(sum(numeros))        # 15\nprint(max(numeros))        # 5\nprint(min(numeros))        # 1"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔧 Métodos de listas",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Los más usados en la práctica:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "carrito = [\"pan\", \"leche\"]\n\ncarrito.append(\"huevos\")     # agregar\ncarrito.insert(0, \"agua\")   # al inicio\ncarrito.remove(\"leche\")    # eliminar valor\nultimo = carrito.pop()     # sacar último\n\nprint(carrito)\nprint(len(carrito))"
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Tuplas ( )"
  },
  {
    "variant": "content" as const,
    "title": "🔒 Tupla tuple",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Colección ordenada e inmutable. Una vez creada, no puedes cambiar sus elementos. Perfecta para datos que no deben modificarse."
      },
      {
        "type": "paragraph",
        "text": "# Crear tuplas\npunto     = (10, 20)\ncolores   = (\"rojo\", \"verde\", \"azul\")\nmixta     = (1, \"dos\", True)\nun_elem   = (42,)   # coma obligatoria para 1 elemento\n\n# Acceder — igual que lista\nprint(punto[0])     # 10\nprint(colores[-1])  # \"azul\"\n\n# Desempaquetar\nx, y = punto\nprint(x, y)         # 10 20\n\n# Intentar modificar → Error\n# punto[0] = 99     # TypeError!\n      \n      \n        \n          \n            Características\n            \n              Ordenada — tiene índices\n              Inmutable — no cambia\n              Permite duplicados\n              Más rápida que list\n            \n          \n          \n            Solo 2 métodos\n            \n              .count(x) — cuántas veces aparece\n              .index(x) — posición de x\n            \n          \n        \n        ¿Cuándo usar tuple en vez de list?"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Características",
            "text": ""
          },
          {
            "icon": "",
            "title": "Solo 2 métodos",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Crear tuplas\npunto     = (10, 20)\ncolores   = (\"rojo\", \"verde\", \"azul\")\nmixta     = (1, \"dos\", True)\nun_elem   = (42,)   # coma obligatoria para 1 elemento\n\n# Acceder — igual que lista\nprint(punto[0])     # 10\nprint(colores[-1])  # \"azul\"\n\n# Desempaquetar\nx, y = punto\nprint(x, y)         # 10 20\n\n# Intentar modificar → Error\n# punto[0] = 99     # TypeError!"
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Diccionarios { }"
  },
  {
    "variant": "content" as const,
    "title": "🗝️ Diccionario dict",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Colección de pares clave: valor. Accedes a los valores por clave, no por índice. Mutable desde Python 3.7 mantiene el orden de inserción."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Crear diccionario\nusuario = {\n    \"nombre\": \"Carlos\",\n    \"edad\":   30,\n    \"activo\": True\n}\n\n# Acceder por clave\nprint(usuario[\"nombre\"])    # \"Carlos\"\nprint(usuario.get(\"edad\"))  # 30 — forma segura\n\n# Agregar / modificar\nusuario[\"email\"] = \"ana@example.com\"\nusuario[\"edad\"]  = 31\n\n# Eliminar\ndel usuario[\"activo\"]"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Recorrer claves y valores\nfor clave in usuario.keys():\n    print(clave)\n\nfor valor in usuario.values():\n    print(valor)\n\nfor clave, valor in usuario.items():\n    print(f\"{clave}: {valor}\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🔧 Métodos de diccionarios",
    "blocks": [
      {
        "type": "code",
        "language": "python",
        "code": "producto = {\"nombre\": \"Laptop\", \"precio\": 999}\n\n# update — agregar varios a la vez\nproducto.update({\"stock\": 10, \"marca\": \"Dell\"})\n\n# pop — eliminar y guardar valor\nprecio_viejo = producto.pop(\"precio\")\n\n# Verificar clave con \"in\"\nif \"stock\" in producto:\n    print(\"Hay stock disponible\")\n\n# Dict anidado — muy común con APIs\nusuario = {\n    \"nombre\": \"Ana\",\n    \"direccion\": {\n        \"ciudad\": \"Bogotá\",\n        \"pais\":   \"Colombia\"\n    }\n}\nprint(usuario[\"direccion\"][\"ciudad\"])  # \"Bogotá\""
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Conjuntos { , }"
  },
  {
    "variant": "content" as const,
    "title": "🔵 Set (Conjunto) set",
    "blocks": [
      {
        "type": "paragraph",
        "text": "# Crear set\nfrutas  = {\"manzana\", \"pera\", \"uva\"}\nnumeros = {1, 2, 2, 3, 3}  # → {1, 2, 3}\n\n# Set vacío — IMPORTANTE: no usar {}\nvacio = set()              # {} crea un dict vacío!\n\n# Agregar / quitar\nfrutas.add(\"mango\")\nfrutas.discard(\"pera\")    # no lanza error si no existe\n\n# Truco: eliminar duplicados de lista\nlista = [1, 2, 2, 3, 3, 3]\nunicos = list(set(lista))   # [1, 2, 3]\n      \n      \n        Operaciones matemáticas de conjuntos:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Crear set\nfrutas  = {\"manzana\", \"pera\", \"uva\"}\nnumeros = {1, 2, 2, 3, 3}  # → {1, 2, 3}\n\n# Set vacío — IMPORTANTE: no usar {}\nvacio = set()              # {} crea un dict vacío!\n\n# Agregar / quitar\nfrutas.add(\"mango\")\nfrutas.discard(\"pera\")    # no lanza error si no existe\n\n# Truco: eliminar duplicados de lista\nlista = [1, 2, 2, 3, 3, 3]\nunicos = list(set(lista))   # [1, 2, 3]"
      },
      {
        "type": "code",
        "language": "python",
        "code": "a = {1, 2, 3}\nb = {3, 4, 5}\n\nprint(a | b)    # Unión:          {1,2,3,4,5}\nprint(a & b)    # Intersección:   {3}\nprint(a - b)    # Diferencia:     {1, 2}\nprint(a ^ b)    # Dif. simétrica: {1,2,4,5}"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Cuál usar y cuándo?",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Usa list cuando…",
            "text": ""
          },
          {
            "icon": "",
            "title": "Usa tuple cuando…",
            "text": ""
          },
          {
            "icon": "",
            "title": "Usa dict cuando…",
            "text": ""
          },
          {
            "icon": "",
            "title": "Usa set cuando…",
            "text": ""
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Ejemplo práctico — perfil de usuario\nusuario = {                                # dict — tiene propiedades con nombre\n    \"nombre\":     \"Ana García\",\n    \"hobbies\":    [\"leer\", \"correr\", \"cocinar\"],   # list — orden importa, puede cambiar\n    \"coordenadas\":(4.7110, -74.0721),              # tuple — no cambia\n    \"permisos\":   {\"leer\", \"escribir\"}               # set — únicos, sin orden\n}"
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "💻 Actividad — Agenda de contactos",
    "blocks": [
      {
        "type": "code",
        "language": "python",
        "code": "# Código base\ncontacto = {\n    \"nombre\":  \"Tu nombre\",\n    \"edad\":    0,\n    \"telefono\":\"000-0000\",\n    \"correos\": [\"principal@mail.com\"],\n    \"etiquetas\": {\"amigo\", \"trabajo\"}\n}\n\n# Agregar correo\ncontacto[\"correos\"].append(\"otro@mail.com\")\n\n# Agregar etiqueta\ncontacto[\"etiquetas\"].add(\"familia\")\n\n# Imprimir\nprint(f\"Nombre: {contacto['nombre']}\")\nprint(f\"Correos: {contacto['correos']}\")\nprint(f\"Etiquetas: {contacto['etiquetas']}\")\n\n# Campo inexistente\nprint(contacto.get(\"direccion\", \"No registrada\"))"
      }
    ]
  },
  {
    "variant": "cover" as const,
    "title": "¿Preguntas?"
  }
];
