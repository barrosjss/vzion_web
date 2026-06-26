import type { Slide } from "../../types";

/** Unidad 2 — Proyectos, archivos y JSON (PDF págs. 99–143). */
export const proyectosSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · Proyectos",
    title: "Gestión de bibliotecas y archivos",
    subtitle: "pip, módulos, JSON y entornos virtuales",
  },
  {
    variant: "content",
    title: "Gestión de bibliotecas",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "pip install nombre_paquete — instala dependencias",
          "requirements.txt — lista de paquetes del proyecto",
          "import modulo / from modulo import funcion — usar código externo",
        ],
      },
      {
        type: "code",
        language: "python",
        code: "# requirements.txt\n# requests==2.31.0\n\nimport requests\nrespuesta = requests.get(\"https://api.example.com\")",
      },
    ],
  },
  {
    variant: "content",
    title: "Leer y escribir archivos",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'with open("ejemplo.txt", "w", encoding="utf-8") as archivo:\n    archivo.write("Hola desde Python\\n")\n\nwith open("ejemplo.txt", "r", encoding="utf-8") as archivo:\n    print(archivo.read())',
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "JSON",
    title: "Trabajar con JSON",
    subtitle: "Serializar y persistir datos",
  },
  {
    variant: "content",
    title: "json.load y json.dump",
    blocks: [
      {
        type: "cards",
        items: [
          { icon: "📥", title: "json.load()", text: "JSON → Python (lectura)" },
          { icon: "📤", title: "json.dump()", text: "Python → JSON (escritura a archivo)" },
          { icon: "🔄", title: "json.loads/dumps", text: "Cadenas en memoria" },
        ],
      },
      {
        type: "code",
        language: "python",
        code: 'import json\n\nwith open("datos.json", "r") as archivo:\n    datos = json.load(archivo)\n\nnuevo = {"id": 3, "nombre": "Charlie"}\ndatos.append(nuevo)\n\nwith open("datos.json", "w") as archivo:\n    json.dump(datos, archivo, indent=4)',
      },
    ],
  },
  {
    variant: "content",
    title: "CRUD sobre JSON",
    blocks: [
      {
        type: "list",
        style: "numbered",
        items: [
          "Create — agregar nuevo usuario al array",
          "Read — cargar y listar usuarios",
          "Update — modificar campos por id",
          "Delete — eliminar por id con pop o list comprehension",
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Logging",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'import logging\n\nlogging.basicConfig(level=logging.DEBUG)\nlogger = logging.getLogger(__name__)\n\nlogger.info("Aplicación iniciada")\nlogger.error("Algo falló")',
      },
    ],
  },
  {
    variant: "content",
    title: "Entornos virtuales",
    blocks: [
      {
        type: "paragraph",
        text: "Un entorno virtual aísla las dependencias de cada proyecto para evitar conflictos entre versiones de librerías.",
      },
      {
        type: "code",
        language: "python",
        code: "# Crear entorno\npython -m venv .venv\n\n# Activar (macOS/Linux)\nsource .venv/bin/activate\n\n# Activar (Windows Git Bash)\nsource .venv/Scripts/activate\n\npip install -r requirements.txt",
      },
      {
        type: "callout",
        variant: "tip",
        text: "uv es una alternativa moderna y rápida para gestionar entornos y dependencias.",
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
          "pip y requirements.txt gestionan dependencias",
          "with open() lee y escribe archivos con seguridad",
          "JSON persiste estructuras de datos",
          "venv aísla el entorno de cada proyecto",
        ],
      },
    ],
  },
];
