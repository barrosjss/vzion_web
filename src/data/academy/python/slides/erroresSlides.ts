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
    title: "¿Qué es try / except?",
    blocks: [
      {
        type: "paragraph",
        text: "Estructura que permite intentar ejecutar código (try) y, si ocurre un error, ejecutar otro bloque (except) en lugar de detener el programa.",
      },
      {
        type: "code",
        language: "python",
        code: "try:\n    numero = int(input(\"Número: \"))\n    print(10 / numero)\nexcept ValueError:\n    print(\"Debes ingresar un número válido\")\nexcept ZeroDivisionError:\n    print(\"No puedes dividir entre cero\")",
      },
    ],
  },
  {
    variant: "content",
    title: "Ejemplo con archivos",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'try:\n    with open("archivo.txt", "r") as f:\n        contenido = f.read()\n        numero = int(contenido)\nexcept FileNotFoundError:\n    print("El archivo no existe")\nexcept ValueError:\n    print("El archivo no contiene un número válido")',
      },
    ],
  },
  {
    variant: "content",
    title: "Errores comunes",
    blocks: [
      {
        type: "cards",
        items: [
          { icon: "⌨️", title: "SyntaxError", text: "Código mal escrito; no sigue la sintaxis de Python." },
          { icon: "🔢", title: "TypeError", text: 'Operación con tipo incorrecto. Ej: print("Hola" + 5).' },
          { icon: "📋", title: "IndexError", text: "Índice fuera de rango en una lista." },
          { icon: "➗", title: "ZeroDivisionError", text: "División entre cero." },
          { icon: "🔍", title: "AttributeError", text: "Método o atributo inexistente en el objeto." },
          { icon: "⚠️", title: "ValueError", text: "Valor correcto en tipo pero inválido en contexto." },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Exception",
    blocks: [
      {
        type: "paragraph",
        text: "Exception es la clase base de casi todos los errores que puedes atrapar con except. Capturar Exception es un comodín, pero conviene ser específico.",
      },
      {
        type: "code",
        language: "python",
        code: "try:\n    resultado = 10 / 0\nexcept Exception as e:\n    print(f\"Error inesperado: {e}\")",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Evita except: pass silencioso; al menos registra o informa el error.",
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
          "try ejecuta código riesgoso",
          "except captura errores por tipo",
          "Conocer los errores comunes acelera la depuración",
          "Exception es la base; prefiere excepciones específicas",
        ],
      },
    ],
  },
];
