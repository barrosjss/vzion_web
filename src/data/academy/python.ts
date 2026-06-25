import type { Course } from "./types";

export const pythonCourse: Course = {
    id: "python",
    n: "01",
    title: "Programación con Python",
    tag: "Fundamentos",
    desc: "Desde cero hasta escribir programas con lógica, datos y archivos.",
    long: "Curso introductorio de Python orientado a estudiantes que empiezan a programar. Cada clase construye sobre la anterior con ejercicios prácticos.",
    level: "Principiante",
    modules: [
      {
        id: "intro",
        n: "01",
        title: "Introducción a Python",
        lessons: [
          {
            id: "que-es-python",
            n: "01",
            title: "¿Qué es Python y por qué aprenderlo?",
            duration: "45 min",
            summary: "Contexto del lenguaje, instalación y primer programa.",
            blocks: [
              { type: "paragraph", text: "Python es un lenguaje de programación de alto nivel, legible y muy usado en educación, automatización, ciencia de datos y desarrollo web." },
              { type: "heading", text: "Objetivos de la clase" },
              { type: "list", items: ["Entender qué es un lenguaje de programación", "Instalar Python y un editor de código", "Ejecutar tu primer programa: Hola mundo"] },
              { type: "heading", text: "Primer programa" },
              { type: "code", language: "python", code: 'print("Hola, mundo!")' },
              { type: "callout", variant: "tip", text: "Usa print() para mostrar texto en pantalla. Es la forma más simple de verificar que todo funciona." },
            ],
          },
          {
            id: "entorno",
            n: "02",
            title: "Entorno de trabajo",
            duration: "40 min",
            summary: "VS Code, terminal y ejecutar archivos .py.",
            blocks: [
              { type: "paragraph", text: "Configuramos el entorno: editor, terminal y la estructura básica de un proyecto de Python." },
              { type: "list", items: ["Abrir la terminal integrada", "Crear un archivo main.py", "Ejecutar con python main.py"] },
            ],
          },
        ],
      },
      {
        id: "variables",
        n: "02",
        title: "Variables y tipos de datos",
        lessons: [
          {
            id: "variables-basicas",
            n: "01",
            title: "Variables y asignación",
            duration: "50 min",
            summary: "Nombres, valores y reglas para declarar variables.",
            blocks: [
              { type: "paragraph", text: "Una variable es un nombre que guarda un valor en memoria. En Python no hace falta declarar el tipo explícitamente." },
              { type: "code", language: "python", code: "nombre = \"Ana\"\nedad = 17\nactivo = True" },
            ],
          },
          {
            id: "tipos-datos",
            n: "02",
            title: "Tipos: int, float, str y bool",
            duration: "50 min",
            summary: "Números, texto y valores lógicos.",
            blocks: [
              { type: "paragraph", text: "Python infiere el tipo según el valor asignado. Conocer los tipos básicos evita errores al operar con datos." },
              { type: "code", language: "python", code: "entero = 42\ndecimal = 3.14\ntexto = \"Python\"\nlogico = False" },
            ],
          },
          {
            id: "entrada-salida",
            n: "03",
            title: "Entrada y salida de datos",
            duration: "45 min",
            summary: "input() y conversión de tipos.",
            blocks: [
              { type: "paragraph", text: "input() lee texto del usuario. Para operar con números hay que convertir el valor con int() o float()." },
              { type: "code", language: "python", code: 'nombre = input("¿Cómo te llamas? ")\nedad = int(input("¿Cuántos años tienes? "))' },
            ],
          },
        ],
      },
      {
        id: "control",
        n: "03",
        title: "Estructuras de control",
        lessons: [
          {
            id: "condicionales",
            n: "01",
            title: "Condicionales: if, elif, else",
            duration: "55 min",
            summary: "Tomar decisiones en el programa.",
            blocks: [
              { type: "code", language: "python", code: "nota = 85\nif nota >= 90:\n    print(\"Excelente\")\nelif nota >= 70:\n    print(\"Aprobado\")\nelse:\n    print(\"Reprobado\")" },
            ],
          },
          {
            id: "bucles",
            n: "02",
            title: "Bucles: for y while",
            duration: "55 min",
            summary: "Repetir acciones de forma controlada.",
            blocks: [
              { type: "code", language: "python", code: "for i in range(5):\n    print(i)\n\ncontador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1" },
            ],
          },
        ],
      },
      {
        id: "funciones",
        n: "04",
        title: "Funciones",
        lessons: [
          {
            id: "definir-funciones",
            n: "01",
            title: "Definir y llamar funciones",
            duration: "50 min",
            summary: "Reutilizar código con def y return.",
            blocks: [
              { type: "code", language: "python", code: "def saludar(nombre):\n    return f\"Hola, {nombre}!\"\n\nprint(saludar(\"Carlos\"))" },
            ],
          },
          {
            id: "parametros",
            n: "02",
            title: "Parámetros y valores de retorno",
            duration: "45 min",
            summary: "Argumentos, valores por defecto y múltiples retornos.",
            blocks: [
              { type: "paragraph", text: "Las funciones pueden recibir varios argumentos y devolver uno o más valores." },
            ],
          },
        ],
      },
      {
        id: "estructuras",
        n: "05",
        title: "Listas y diccionarios",
        lessons: [
          {
            id: "listas",
            n: "01",
            title: "Listas y operaciones",
            duration: "50 min",
            summary: "Colecciones ordenadas y mutables.",
            blocks: [
              { type: "code", language: "python", code: "frutas = [\"manzana\", \"pera\", \"uva\"]\nfrutas.append(\"mango\")\nprint(frutas[0])" },
            ],
          },
          {
            id: "diccionarios",
            n: "02",
            title: "Diccionarios",
            duration: "50 min",
            summary: "Pares clave-valor para organizar datos.",
            blocks: [
              { type: "code", language: "python", code: 'alumno = {"nombre": "María", "nota": 92}\nprint(alumno["nombre"])' },
            ],
          },
        ],
      },
      {
        id: "archivos",
        n: "06",
        title: "Archivos y manejo de errores",
        lessons: [
          {
            id: "leer-archivos",
            n: "01",
            title: "Leer y escribir archivos",
            duration: "50 min",
            summary: "Trabajar con archivos de texto.",
            blocks: [
              { type: "code", language: "python", code: 'with open("datos.txt", "r", encoding="utf-8") as f:\n    contenido = f.read()' },
            ],
          },
          {
            id: "excepciones",
            n: "02",
            title: "Try, except y errores comunes",
            duration: "45 min",
            summary: "Capturar errores sin detener el programa.",
            blocks: [
              { type: "code", language: "python", code: "try:\n    numero = int(input(\"Número: \"))\nexcept ValueError:\n    print(\"Debes ingresar un número válido\")" },
            ],
          },
        ],
      },
    ],
  };
