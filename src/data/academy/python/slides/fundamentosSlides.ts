import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const fundamentosSlides: Slide[] = [
  {
    "variant": "cover" as const,
    "eyebrow": "Módulo 1 — Fundamentos de Python",
    "title": "Introducción a Python",
    "subtitle": "El lenguaje de programación más popular del mundo"
  },
  {
    "variant": "content" as const,
    "title": "¿Qué veremos hoy?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Historia, características y por qué importa conocerlo hoy."
      },
      {
        "type": "paragraph",
        "text": "Casos de uso reales: web, datos, IA, automatización, ciencia."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "📌",
            "title": "Parte 1 — ¿Qué es Python?",
            "text": "Historia, características y por qué importa conocerlo hoy."
          },
          {
            "icon": "🌐",
            "title": "Parte 2 — ¿Para qué sirve?",
            "text": "Casos de uso reales: web, datos, IA, automatización, ciencia."
          },
          {
            "icon": "💼",
            "title": "Parte 3 — El mercado laboral",
            "text": "Salarios, demanda, empresas y por qué Python domina el sector."
          },
          {
            "icon": "💻",
            "title": "Parte 4 — Primeros pasos",
            "text": "Instalación, entornos de trabajo y tu primer programa."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Qué es Python?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Se caracteriza por su sintaxis sencilla y legible, lo que facilita su aprendizaje y uso. Es ampliamente utilizado en diversas áreas, como desarrollo web, ciencia de datos, inteligencia artificial, automatización, ciberseguridad y más."
      },
      {
        "type": "heading",
        "text": "Algunas características clave de Python:",
        "level": 3
      },
      {
        "type": "list",
        "style": "check",
        "items": [
          "Sintaxis clara y legible (Alto nivel)",
          "Orientado a Objetos (POO)",
          "Multiplataforma",
          "Gran comunidad y bibliotecas",
          "Tipado dinámico"
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Características Principales",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "icon": "✍️",
            "title": "Sintaxis simple y clara",
            "text": "Fácil de leer y escribir, ideal para principiantes y profesionales."
          },
          {
            "icon": "🔀",
            "title": "Multiparadigma",
            "text": "Soporta programación orientada a objetos, imperativa, funcional, etc."
          },
          {
            "icon": "🖥️",
            "title": "Multiplataforma",
            "text": "Funciona en Windows, macOS, Linux y más."
          },
          {
            "icon": "🔄",
            "title": "Dinámico y flexible",
            "text": "No es fuertemente tipado: las variables pueden cambiar de tipo en tiempo de ejecución."
          },
          {
            "icon": "▶️",
            "title": "Interpretado",
            "text": "No se compila a código máquina directamente, sino que se ejecuta línea por línea."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Para qué se usa Python?",
    "blocks": [
      {
        "type": "list",
        "style": "bullet",
        "items": [
          "Desarrollo web — con frameworks como Django, Flask",
          "Análisis de datos y ciencia de datos — con pandas, NumPy, matplotlib",
          "Inteligencia artificial y machine learning — con TensorFlow, scikit-learn, PyTorch",
          "Automatización de tareas",
          "Desarrollo de videojuegos",
          "Ciberseguridad",
          "Programación de scripts de sistema"
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Historia de Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Durante las vacaciones de Navidad en el Centrum Wiskunde & Informatica (CWI), Países Bajos. Lo llamó \"Python\" por el show de comedia Monty Python's Flying Circus."
      },
      {
        "type": "paragraph",
        "text": "Ya incluía clases, manejo de excepciones, funciones y módulos. Una base sólida desde el inicio."
      },
      {
        "type": "youtube",
        "videoId": "RTGoX_6h04c",
        "title": "Historia de Python",
        "short": true
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "El Zen de Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python tiene una filosofía de diseño escrita por Tim Peters. Puedes verla completa ejecutando import this en cualquier terminal Python."
      },
      {
        "type": "heading",
        "text": "Principios más importantes",
        "level": 3
      },
      {
        "type": "list",
        "style": "bullet",
        "items": [
          "Lo bello es mejor que lo feo.",
          "Lo explícito es mejor que lo implícito.",
          "Lo simple es mejor que lo complejo.",
          "La legibilidad cuenta.",
          "Debería haber una —y preferiblemente solo una— manera obvia de hacerlo.",
          "Si la implementación es difícil de explicar, es una mala idea.",
          "Los errores nunca deberían pasar en silencio."
        ]
      },
      {
        "type": "youtube",
        "videoId": "Go7zISQJy90",
        "title": "El Zen de Python",
        "short": true
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Python vs otros lenguajes — Legibilidad",
    "blocks": [
      {
        "type": "paragraph",
        "text": "El mismo programa \"Hola Mundo\" en distintos lenguajes:"
      },
      {
        "type": "heading",
        "text": "Java",
        "level": 3
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hola Mundo\");\n  }\n}"
      },
      {
        "type": "heading",
        "text": "C++",
        "level": 3
      },
      {
        "type": "code",
        "language": "cpp",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hola Mundo\" << endl;\n  return 0;\n}"
      },
      {
        "type": "heading",
        "text": "Python",
        "level": 3
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"Hola Mundo\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🌐 Desarrollo Web",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python potencia algunos de los sitios web más grandes del mundo. Con frameworks como Django y FastAPI puedes construir desde una API simple hasta plataformas de millones de usuarios."
      },
      {
        "type": "paragraph",
        "text": "Framework completo. Incluye base de datos, autenticación, panel admin. Ideal para aplicaciones grandes."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Django",
            "text": "Framework completo. Incluye base de datos, autenticación, panel admin. Ideal para aplicaciones grandes."
          },
          {
            "icon": "",
            "title": "FastAPI",
            "text": "Framework moderno y rápido para APIs. Validación automática, documentación generada sola, alto rendimiento."
          },
          {
            "icon": "",
            "title": "Flask",
            "text": "Minimalista y flexible. Perfecto para APIs pequeñas o cuando quieres control total."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "🤖 Ciencia de Datos e Inteligencia Artificial",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python es el estándar de facto en Data Science, Machine Learning e IA. Investigadores y empresas lo usan porque tiene el ecosistema más completo para trabajar con datos."
      },
      {
        "type": "paragraph",
        "text": "Computación numérica y matrices."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "NumPy",
            "text": "Computación numérica y matrices."
          },
          {
            "icon": "",
            "title": "Pandas",
            "text": "Análisis y manipulación de datos."
          },
          {
            "icon": "",
            "title": "TensorFlow",
            "text": "Deep Learning (Google)."
          },
          {
            "icon": "",
            "title": "PyTorch",
            "text": "Deep Learning (Meta/Facebook)."
          },
          {
            "icon": "",
            "title": "scikit-learn",
            "text": "Machine Learning clásico."
          },
          {
            "icon": "",
            "title": "Matplotlib",
            "text": "Visualización de datos."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "⚙️ Automatización y Scripting",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Una de las razones por las que Python se popularizó tanto: permite automatizar tareas repetitivas con muy poco código."
      },
      {
        "type": "paragraph",
        "text": "Ejemplo: Renombrar 1,000 archivos"
      },
      {
        "type": "code",
        "language": "python",
        "code": "import os\n\ncarpeta = \"mis_archivos\"\narchivos = os.listdir(carpeta)\n\nfor i, archivo in enumerate(archivos):\n    nuevo_nombre = f\"archivo_{i+1}.txt\"\n    os.rename(archivo, nuevo_nombre)\n\nprint(\"¡Listo! Archivos renombrados.\")"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Más áreas donde Python domina",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Pentesting, análisis de vulnerabilidades, herramientas forenses. Kali Linux lo incluye por defecto."
      },
      {
        "type": "paragraph",
        "text": "Pygame para juegos 2D. Blender usa Python como lenguaje de scripting para animación 3D."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "🔒",
            "title": "Ciberseguridad",
            "text": "Pentesting, análisis de vulnerabilidades, herramientas forenses. Kali Linux lo incluye por defecto."
          },
          {
            "icon": "🎮",
            "title": "Videojuegos",
            "text": "Pygame para juegos 2D. Blender usa Python como lenguaje de scripting para animación 3D."
          },
          {
            "icon": "🔬",
            "title": "Ciencia",
            "text": "Física, bioinformática, astronomía, química computacional. SciPy, AstroPy, BioPython."
          },
          {
            "icon": "🤖",
            "title": "Robótica e IoT",
            "text": "Raspberry Pi usa Python como lenguaje oficial. Control de hardware, sensores y dispositivos."
          },
          {
            "icon": "💹",
            "title": "Finanzas",
            "text": "Trading algorítmico, análisis cuantitativo, modelos de riesgo. JPMorgan, Goldman Sachs."
          },
          {
            "icon": "☁️",
            "title": "Cloud / DevOps",
            "text": "AWS, Google Cloud y Azure tienen SDKs en Python. Ansible, Terraform y muchas herramientas DevOps."
          },
          {
            "icon": "🎓",
            "title": "Educación",
            "text": "El lenguaje más enseñado en universidades del mundo. MIT, Harvard, Stanford lo usan en sus cursos intro."
          },
          {
            "icon": "📊",
            "title": "Business Intelligence",
            "text": "Reportes, dashboards, análisis de KPIs. Integración con Power BI, Tableau y herramientas de BI."
          }
        ]
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "El mercado laboral"
  },
  {
    "variant": "content" as const,
    "title": "Python en los rankings globales",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python ocupa el #1 por tercer año consecutivo, superando a Java y C++ por primera vez en la historia del índice."
      },
      {
        "type": "paragraph",
        "text": "Python es el lenguaje más querido y más usado según encuesta de 90,000 desarrolladores en 2024."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "TIOBE Index — 2024/2025",
            "text": "Python ocupa el #1 por tercer año consecutivo, superando a Java y C++ por primera vez en la historia del índice."
          },
          {
            "icon": "",
            "title": "Stack Overflow Developer Survey",
            "text": "Python es el lenguaje más querido y más usado según encuesta de 90,000 desarrolladores en 2024."
          },
          {
            "icon": "",
            "title": "GitHub Octoverse",
            "text": "Python superó a JavaScript como el lenguaje con más repositorios activos en GitHub en 2024."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Demanda laboral con Python"
  },
  {
    "variant": "content" as const,
    "title": "Salarios — Desarrolladores Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Rango salarial anual — Estados Unidos (USD)"
      },
      {
        "type": "paragraph",
        "text": "En modo remoto (trabajo para empresas extranjeras desde LATAM)"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "",
            "text": ""
          },
          {
            "icon": "",
            "title": "",
            "text": ""
          },
          {
            "icon": "",
            "title": "",
            "text": ""
          },
          {
            "icon": "",
            "title": "",
            "text": ""
          },
          {
            "icon": "",
            "title": "Plataformas para encontrar trabajo remoto",
            "text": ""
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Quién usa Python?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Empresas de todos los sectores y tamaños dependen de Python en producción:"
      },
      {
        "type": "paragraph",
        "text": "Python fue uno de los 3 lenguajes oficiales desde su fundación. La mayoría de sus herramientas internas."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Google",
            "text": "Python fue uno de los 3 lenguajes oficiales desde su fundación. La mayoría de sus herramientas internas."
          },
          {
            "icon": "",
            "title": "Netflix",
            "text": "Python en toda su infraestructura de datos, recomendaciones y operaciones en la nube."
          },
          {
            "icon": "",
            "title": "Instagram",
            "text": "El backend completo corre en Django. Más de 2,000 millones de usuarios."
          },
          {
            "icon": "",
            "title": "NASA / SpaceX",
            "text": "Análisis de datos de misiones, simulaciones, control de sistemas."
          },
          {
            "icon": "",
            "title": "OpenAI",
            "text": "ChatGPT, GPT-4, DALL-E — todo el desarrollo de modelos en Python."
          },
          {
            "icon": "",
            "title": "Spotify",
            "text": "Análisis de datos, recomendaciones musicales y pipelines de datos."
          },
          {
            "icon": "",
            "title": "J.P. Morgan",
            "text": "Modelos financieros, trading algorítmico y análisis de riesgo."
          },
          {
            "icon": "",
            "title": "Amazon / AWS",
            "text": "Infraestructura cloud, Lambda functions, herramientas internas."
          }
        ]
      }
    ]
  },
  {
    "variant": "section" as const,
    "title": "Primeros pasos"
  },
  {
    "variant": "content" as const,
    "title": "¿Cómo funciona Python?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python es un lenguaje interpretado. Esto significa que hay un programa llamado intérprete que lee tu código y lo ejecuta directamente."
      },
      {
        "type": "paragraph",
        "text": "Archivo .py en tu editor"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "1. Escribes código",
            "text": "Archivo .py en tu editor"
          },
          {
            "icon": "",
            "title": "2. El intérprete lo lee",
            "text": "Python.exe / python3 procesa cada línea"
          },
          {
            "icon": "",
            "title": "3. Resultado en pantalla",
            "text": "Ves el output inmediatamente"
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Instalación de Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python 3 suele venir preinstalado. Verificar con python3 --version. Si no: sudo apt install python3"
      },
      {
        "type": "paragraph",
        "text": "Verificar instalación en la terminal:"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "🪟 Windows",
            "text": ""
          },
          {
            "icon": "",
            "title": "🍎 macOS",
            "text": ""
          },
          {
            "icon": "",
            "title": "🐧 Linux",
            "text": "Python 3 suele venir preinstalado. Verificar con python3 --version. Si no: sudo apt install python3"
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "$ python --version\nPython 3.12.0\n\n$ python\nPython 3.12.0 (main, Oct 2 2023)\n>>> print(\"Hola\")\nHola\n>>>"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Dónde escribir código Python?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Editor gratuito de Microsoft. Ligero, extensible, con extensión oficial de Python que incluye autocompletado, depuración y terminal integrada."
      },
      {
        "type": "paragraph",
        "text": "IDE profesional dedicado exclusivamente a Python. Muy potente para proyectos grandes. La versión Community es gratuita."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "💻",
            "title": "Visual Studio Code",
            "text": "Editor gratuito de Microsoft. Ligero, extensible, con extensión oficial de Python que incluye autocompletado, depuración y terminal integrada."
          },
          {
            "icon": "🧠",
            "title": "PyCharm",
            "text": "IDE profesional dedicado exclusivamente a Python. Muy potente para proyectos grandes. La versión Community es gratuita."
          },
          {
            "icon": "📓",
            "title": "Jupyter Notebook",
            "text": "Perfecto para Data Science. Mezcla código, texto y gráficas en el mismo documento. Usado en universidades y por científicos."
          },
          {
            "icon": "🌐",
            "title": "Google Colab",
            "text": "Jupyter en la nube, gratis. Sin instalar nada. Perfecto para aprender o trabajar desde cualquier dispositivo."
          },
          {
            "icon": "⚡",
            "title": "Thonny",
            "text": "IDE diseñado específicamente para principiantes. Simple, visual, muestra el paso a paso de ejecución."
          },
          {
            "icon": "🔧",
            "title": "IDLE",
            "text": "Viene incluido con Python. Básico pero funcional. Suficiente para empezar sin instalar nada extra."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Tu primer programa en Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Por convención, el primer programa en cualquier lenguaje imprime \"Hello, World!\". En Python:"
      },
      {
        "type": "paragraph",
        "text": "print(\"Hello, World!\")\n        Un programa más interactivo:"
      },
      {
        "type": "code",
        "language": "python",
        "code": "print(\"Hello, World!\")"
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Pedimos el nombre al usuario\nnombre = input(\"¿Cómo te llamas? \")\n\n# Saludamos con su nombre\nprint(f\"¡Hola, {nombre}! Bienvenido a Python 🐍\")\n\n# Mostramos información básica\nedad = int(input(\"¿Cuántos años tienes? \"))\nprint(f\"En 10 años tendrás {edad + 10} años.\")"
      }
    ]
  },
  {
    "variant": "cover" as const
  },
  {
    "variant": "content" as const,
    "title": "Estructura básica del código Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python usa indentación (espacios al inicio de línea) para definir bloques de código. No hay llaves {}."
      },
      {
        "type": "paragraph",
        "text": "# Variables — sin declarar tipo\nnombre = \"Ana\"\nedad   = 25\nactivo = True\n\n# Condicional — la indentación delimita el bloque\nif edad >= 18:\n    print(\"Es mayor de edad\")\nelse:\n    print(\"Es menor de edad\")\n\n# Bucle\nfor i in range(3):\n    print(f\"Iteración {i}\")\n\n# Función\ndef saludar(nombre):\n    return f\"Hola, {nombre}!\"\n      \n      \n        \n          La indentación NO es opcional en Python. A diferencia de otros lenguajes donde es solo estilo, aquí determina qué código está dentro de un bloque.\n        \n        Convención: usar 4 espacios por nivel de indentación (VS Code lo hace automáticamente)."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Variables — sin declarar tipo\nnombre = \"Ana\"\nedad   = 25\nactivo = True\n\n# Condicional — la indentación delimita el bloque\nif edad >= 18:\n    print(\"Es mayor de edad\")\nelse:\n    print(\"Es menor de edad\")\n\n# Bucle\nfor i in range(3):\n    print(f\"Iteración {i}\")\n\n# Función\ndef saludar(nombre):\n    return f\"Hola, {nombre}!\""
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "pip — El gestor de paquetes de Python",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Python viene con pip, una herramienta que te permite instalar cualquiera de los 500,000+ paquetes disponibles en internet con un solo comando."
      },
      {
        "type": "paragraph",
        "text": "Es como una \"tienda de aplicaciones\" para Python: encuentras una librería que resuelve tu problema, la instalas en segundos y ya está disponible en tu código."
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Instalar un paquete\n$ pip install requests\n\n# Instalar versión específica\n$ pip install requests==2.31.0\n\n# Ver paquetes instalados\n$ pip list\n\n# Desinstalar\n$ pip uninstall requests\n\n# Guardar dependencias del proyecto\n$ pip freeze > requirements.txt\n\n# Instalar desde requirements.txt\n$ pip install -r requirements.txt"
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "¿Por qué Python y no otro lenguaje?"
  },
  {
    "variant": "content" as const,
    "title": "Recursos para seguir aprendiendo",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Documentación oficial en español. Referencia completa de todos los módulos, funciones y características del lenguaje."
      },
      {
        "type": "paragraph",
        "text": "Problemas de programación para practicar. Las empresas usan estas plataformas en sus entrevistas técnicas."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "docs.python.org/es",
            "text": "Documentación oficial en español. Referencia completa de todos los módulos, funciones y características del lenguaje."
          },
          {
            "icon": "",
            "title": "HackerRank / LeetCode",
            "text": "Problemas de programación para practicar. Las empresas usan estas plataformas en sus entrevistas técnicas."
          },
          {
            "icon": "",
            "title": "Codecademy / freeCodeCamp",
            "text": "Cursos interactivos gratuitos con ejercicios en el navegador. Ideal para comenzar sin instalar nada."
          }
        ]
      }
    ]
  },
  {
    "variant": "content" as const,
    "title": "Contenido de este curso",
    "blocks": [
      {
        "type": "paragraph",
        "text": "¿Qué es, para qué sirve, instalación y primeros pasos. ← Estamos aquí"
      },
      {
        "type": "paragraph",
        "text": "Strings, enteros, flotantes, booleanos, None. Operaciones y conversiones."
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Introducción a Python",
            "text": "¿Qué es, para qué sirve, instalación y primeros pasos. ← Estamos aquí"
          },
          {
            "icon": "",
            "title": "Tipos de Datos",
            "text": "Strings, enteros, flotantes, booleanos, None. Operaciones y conversiones."
          },
          {
            "icon": "",
            "title": "Estructuras de Control",
            "text": "Condicionales (if/elif/else) y bucles (for/while)."
          },
          {
            "icon": "",
            "title": "Funciones",
            "text": "Definir funciones, parámetros, retorno, alcance de variables."
          },
          {
            "icon": "",
            "title": "Listas y Arreglos",
            "text": "Crear, acceder, modificar y recorrer listas. Métodos principales."
          },
          {
            "icon": "",
            "title": "HTTP, APIs y Streamlit",
            "text": "Consumir APIs REST, requests, construir apps web simples."
          },
          {
            "icon": "",
            "title": "FastAPI",
            "text": "Construir APIs profesionales con Python. Endpoints, validación, documentación automática."
          }
        ]
      }
    ]
  },
  {
    "variant": "practice" as const,
    "title": "Actividad — Primer programa",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Instala Python desde python.org y VS Code con la extensión de Python."
      },
      {
        "type": "paragraph",
        "text": "Crea un archivo llamado mi_primer_programa.py"
      },
      {
        "type": "cards",
        "items": [
          {
            "icon": "",
            "title": "Paso 1 — Instalar",
            "text": "Instala Python desde python.org y VS Code con la extensión de Python."
          },
          {
            "icon": "",
            "title": "Paso 2 — Crear archivo",
            "text": "Crea un archivo llamado mi_primer_programa.py"
          },
          {
            "icon": "",
            "title": "Paso 3 — Escribir y ejecutar",
            "text": "Escribe el código de la derecha y ejecútalo con python mi_primer_programa.py"
          }
        ]
      },
      {
        "type": "code",
        "language": "python",
        "code": "# Mi primer programa en Python\n# Cambia los datos por los tuyos\n\nnombre  = \"Tu nombre aquí\"\ncarrera = \"Tu carrera aquí\"\naño     = 2025\n\nprint(\"=\" * 35)\nprint(f\"  Hola, soy {nombre}\")\nprint(f\"  Carrera: {carrera}\")\nprint(f\"  Año: {año}\")\nprint(\"=\" * 35)\nprint(\"¡Python instalado correctamente! 🐍\")"
      }
    ]
  },
  {
    "variant": "cover" as const,
    "title": "¿Preguntas?"
  }
];
