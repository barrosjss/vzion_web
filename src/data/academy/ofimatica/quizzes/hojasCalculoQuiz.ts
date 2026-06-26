import type { Quiz } from "../../types";

export const hojasCalculoQuiz: Quiz = {
  id: "hojas-calculo-quiz",
  title: "Cuestionario — Hojas de cálculo",
  description:
    "Evalúa Excel, la interfaz y Google Sheets. Preguntas aleatorias; necesitas al menos 70 % para aprobar.",
  questionCount: 8,
  passingScore: 70,
  questions: [
    {
      id: "h-excel",
      text: "¿Qué es Microsoft Excel?",
      options: [
        { id: "a", text: "Una hoja de cálculo que organiza datos en filas y columnas" },
        { id: "b", text: "Un procesador de texto para informes largos" },
        { id: "c", text: "Un gestor de correo electrónico" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-niveles",
      text: "¿Cuál es el orden correcto de la estructura en Excel?",
      options: [
        { id: "a", text: "Libro → Hoja → Celda" },
        { id: "b", text: "Celda → Libro → Hoja" },
        { id: "c", text: "Hoja → Libro → Columna" },
      ],
      correctOptionId: "a",
      explanation: "El libro es el archivo .xlsx; dentro hay hojas (pestañas) y cada casilla es una celda.",
    },
    {
      id: "h-extension",
      text: "¿Cuál es la extensión habitual de un archivo de Excel?",
      options: [
        { id: "a", text: ".xlsx" },
        { id: "b", text: ".docx" },
        { id: "c", text: ".pptx" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-celda",
      text: "¿Cómo se identifica la celda en la columna C, fila 5?",
      options: [
        { id: "a", text: "C5" },
        { id: "b", text: "5C" },
        { id: "c", text: "C-5" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-referencia",
      text: "¿Cómo se referencia la celda C2 en la hoja «Hoja1»?",
      options: [
        { id: "a", text: "Hoja1!C2" },
        { id: "b", text: "C2@Hoja1" },
        { id: "c", text: "Hoja1.C2" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-cinta",
      text: "¿Dónde encuentras comandos como SUMA, SI o BUSCARV en Excel?",
      options: [
        { id: "a", text: "En la pestaña Fórmulas de la cinta de opciones" },
        { id: "b", text: "Solo en el menú Archivo" },
        { id: "c", text: "En la barra de estado inferior" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-formula",
      text: "¿Con qué carácter debe empezar toda fórmula en Excel?",
      options: [
        { id: "a", text: "=" },
        { id: "b", text: "+" },
        { id: "c", text: "#" },
      ],
      correctOptionId: "a",
      explanation: "Ejemplo: =SUMA(A1:A10)",
    },
    {
      id: "h-atajo-guardar",
      text: "¿Qué atajo guarda el archivo en Excel?",
      options: [
        { id: "a", text: "Ctrl + S" },
        { id: "b", text: "Ctrl + Z" },
        { id: "c", text: "Ctrl + Home" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-atajo-editar",
      text: "¿Qué tecla permite editar la celda activa sin hacer doble clic?",
      options: [
        { id: "a", text: "F2" },
        { id: "b", text: "F12" },
        { id: "c", text: "Esc" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-hoja-nueva",
      text: "¿Cómo agregas una hoja nueva en un libro de Excel?",
      options: [
        { id: "a", text: "Con el botón + junto a las pestañas de hojas" },
        { id: "b", text: "Solo creando un archivo .xlsx nuevo" },
        { id: "c", text: "Desde la pestaña Vista → Pantalla completa" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-sheets",
      text: "¿Qué ventaja principal ofrece Google Sheets frente al Excel de escritorio?",
      options: [
        { id: "a", text: "Trabajo en la nube y colaboración en tiempo real" },
        { id: "b", text: "No necesita navegador ni cuenta" },
        { id: "c", text: "Solo funciona en Windows" },
      ],
      correctOptionId: "a",
    },
    {
      id: "h-descarga-movil",
      text: "Al descargar una hoja de Google Sheets en el móvil, ¿qué formatos puedes elegir?",
      options: [
        { id: "a", text: "Excel (.xlsx), PDF o CSV" },
        { id: "b", text: "Solo .txt" },
        { id: "c", text: "Únicamente imagen PNG" },
      ],
      correctOptionId: "a",
      explanation: "PDF sirve para leer; Excel (.xlsx) si vas a editar en otro programa.",
    },
  ],
};
