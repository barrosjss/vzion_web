import type { Quiz } from "../../types";

export const fundamentosOfimaticaQuiz: Quiz = {
  id: "fundamentos-ofimatica-quiz",
  title: "Cuestionario — Fundamentos de ofimática",
  description:
    "Evalúa lo aprendido en el módulo. Se eligen preguntas al azar del banco; necesitas al menos 70 % para aprobar.",
  questionCount: 8,
  passingScore: 70,
  questions: [
    {
      id: "o-definicion",
      text: "¿Qué es la ofimática?",
      options: [
        { id: "a", text: "Programas para crear, editar y compartir información en entornos laborales y académicos" },
        { id: "b", text: "Solo el uso de impresoras y escáneres en oficina" },
        { id: "c", text: "Un lenguaje de programación para automatizar tareas" },
      ],
      correctOptionId: "a",
      explanation: "La ofimática agrupa herramientas digitales para documentos, datos y presentaciones.",
    },
    {
      id: "o-etimologia",
      text: "El término «ofimática» proviene de…",
      options: [
        { id: "a", text: "«Oficina» + «automática»" },
        { id: "b", text: "«Oficial» + «informática»" },
        { id: "c", text: "«Office» + «matemática»" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-suite",
      text: "¿Cuál de estos NO forma parte típica de una suite ofimática?",
      options: [
        { id: "a", text: "Procesador de texto (Word, Google Docs)" },
        { id: "b", text: "Hoja de cálculo (Excel, Google Sheets)" },
        { id: "c", text: "Motor de videojuegos 3D" },
      ],
      correctOptionId: "c",
    },
    {
      id: "o-extensiones",
      text: "¿Qué extensiones corresponden a un documento de Word y una hoja de Excel?",
      options: [
        { id: "a", text: ".docx y .xlsx" },
        { id: "b", text: ".txt y .csv" },
        { id: "c", text: ".pptx y .pdf" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-nube",
      text: "Los archivos en Google Workspace (Docs, Sheets)…",
      options: [
        { id: "a", text: "Viven en la nube y se pueden compartir con un enlace" },
        { id: "b", text: "Solo funcionan sin conexión a internet" },
        { id: "c", text: "No permiten edición colaborativa" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-nombres",
      text: "¿Cuál es una buena práctica al nombrar archivos?",
      options: [
        { id: "a", text: "Informe_Ventas_Marzo2026.xlsx" },
        { id: "b", text: "Documento1.xlsx" },
        { id: "c", text: "archivo_final_final2.xlsx" },
      ],
      correctOptionId: "a",
      explanation: "Nombres descriptivos facilitan encontrar y versionar el trabajo.",
    },
    {
      id: "o-productividad",
      text: "¿Por qué aprender ofimática mejora la productividad?",
      options: [
        { id: "a", text: "Permite hacer en minutos tareas que antes tomaban horas" },
        { id: "b", text: "Elimina la necesidad de revisar el trabajo" },
        { id: "c", text: "Solo sirve para imprimir documentos" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-empleabilidad",
      text: "En vacantes administrativas, ¿qué competencia aparece con frecuencia?",
      options: [
        { id: "a", text: "Excel intermedio" },
        { id: "b", text: "Solo mecanografía en máquina de escribir" },
        { id: "c", text: "Programación en ensamblador" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-flujo",
      text: "En un flujo de trabajo típico con ofimática, ¿qué suele ir primero?",
      options: [
        { id: "a", text: "Recopilar datos en una hoja de cálculo" },
        { id: "b", text: "Imprimir el informe final" },
        { id: "c", text: "Enviar el correo sin revisar" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-versionar",
      text: "¿Para qué sirve versionar archivos (Informe_v1, Informe_v2)?",
      options: [
        { id: "a", text: "Evitar sobrescribir sin querer y recuperar versiones anteriores" },
        { id: "b", text: "Hacer el archivo más pesado a propósito" },
        { id: "c", text: "Impedir que otros lo abran" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-carreras",
      text: "Según el módulo, ¿qué herramienta domina donde hay números y cálculos?",
      options: [
        { id: "a", text: "Excel / hojas de cálculo" },
        { id: "b", text: "PowerPoint exclusivamente" },
        { id: "c", text: "Solo el correo electrónico" },
      ],
      correctOptionId: "a",
    },
    {
      id: "o-respaldo",
      text: "¿Cuál es una buena práctica para no perder trabajo?",
      options: [
        { id: "a", text: "Guardar seguido y respaldar en Drive, OneDrive o disco externo" },
        { id: "b", text: "Trabajar solo en el escritorio sin copias" },
        { id: "c", text: "Borrar versiones anteriores cada hora" },
      ],
      correctOptionId: "a",
    },
  ],
};
