import type { Quiz } from "../../types";

export const datosPrimitivosQuiz: Quiz = {
  id: "datos-primitivos-quiz",
  title: "Cuestionario — Datos Primitivos",
  description:
    "Evalúa tipos, operadores y conversiones. Preguntas aleatorias; necesitas al menos 70 % para aprobar.",
  questionCount: 8,
  passingScore: 70,
  questions: [
    {
      id: "d-tipo-42",
      text: "¿Qué devuelve type(42) en Python 3?",
      options: [
        { id: "a", text: "<class 'int'>" },
        { id: "b", text: "<class 'float'>" },
        { id: "c", text: "<class 'number'>" },
      ],
      correctOptionId: "a",
    },
    {
      id: "d-bool",
      text: "¿Cuáles son los únicos valores booleanos en Python?",
      options: [
        { id: "a", text: "true y false" },
        { id: "b", text: "True y False" },
        { id: "c", text: "1 y 0 únicamente" },
      ],
      correctOptionId: "b",
    },
    {
      id: "d-none",
      text: "¿Qué representa None en Python?",
      options: [
        { id: "a", text: "El número cero" },
        { id: "b", text: "Ausencia de valor / nulo" },
        { id: "c", text: "Un string vacío" },
      ],
      correctOptionId: "b",
    },
    {
      id: "d-division",
      text: "¿Qué resultado da 7 / 2 en Python 3?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "3.5" },
        { id: "c", text: "3.0 con error" },
      ],
      correctOptionId: "b",
      explanation: "La división / siempre devuelve float en Python 3.",
    },
    {
      id: "d-floor-div",
      text: "¿Qué operador devuelve la división entera (cociente sin decimales)?",
      options: [
        { id: "a", text: "//" },
        { id: "b", text: "%" },
        { id: "c", text: "**" },
      ],
      correctOptionId: "a",
    },
    {
      id: "d-cast-int",
      text: '¿Qué devuelve int("15")?',
      options: [
        { id: "a", text: "15 (entero)" },
        { id: "b", text: '"15" (texto)' },
        { id: "c", text: "Error siempre" },
      ],
      correctOptionId: "a",
    },
    {
      id: "d-input",
      text: "¿Qué tipo devuelve input() por defecto?",
      options: [
        { id: "a", text: "str" },
        { id: "b", text: "int" },
        { id: "c", text: "Depende del teclado" },
      ],
      correctOptionId: "a",
      explanation: "input() siempre lee texto; hay que convertir si necesitas números.",
    },
    {
      id: "d-and",
      text: "¿Cuál es el resultado de True and False?",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "None" },
      ],
      correctOptionId: "b",
    },
    {
      id: "d-igualdad",
      text: "¿Qué evalúa 3 == 3.0?",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Error de tipos" },
      ],
      correctOptionId: "a",
      explanation: "== compara valor, no tipo exacto.",
    },
    {
      id: "d-modulo",
      text: "¿Qué devuelve 10 % 3?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "3" },
        { id: "c", text: "0.33" },
      ],
      correctOptionId: "a",
    },
    {
      id: "d-str-upper",
      text: '¿Qué hace "python".upper()?',
      options: [
        { id: "a", text: 'Devuelve "PYTHON"' },
        { id: "b", text: "Modifica la variable original en memoria" },
        { id: "c", text: "Convierte el string a int" },
      ],
      correctOptionId: "a",
      explanation: "Los strings son inmutables; upper() devuelve uno nuevo.",
    },
    {
      id: "d-float",
      text: "¿Qué devuelve type(3.14)?",
      options: [
        { id: "a", text: "<class 'float'>" },
        { id: "b", text: "<class 'decimal'>" },
        { id: "c", text: "<class 'int'>" },
      ],
      correctOptionId: "a",
    },
  ],
};
