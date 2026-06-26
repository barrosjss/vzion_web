import type { Quiz } from "../../types";

export const buscarvBuscarhQuiz: Quiz = {
  id: "buscarv-buscarh-quiz",
  title: "Cuestionario — BUSCARV y BUSCARH",
  description:
    "Evalúa funciones de búsqueda vertical y horizontal. Preguntas aleatorias; necesitas al menos 70 % para aprobar.",
  questionCount: 6,
  passingScore: 70,
  questions: [
    {
      id: "bv-problema",
      text: "¿Qué problema resuelve una función de búsqueda en Excel?",
      options: [
        { id: "a", text: "Traer un dato relacionado desde otra tabla usando un identificador común" },
        { id: "b", text: "Cambiar el color de las celdas automáticamente" },
        { id: "c", text: "Imprimir un informe en PDF" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bv-columna",
      text: "En BUSCARV, ¿dónde debe estar el valor que buscas?",
      options: [
        { id: "a", text: "En la primera columna de la tabla" },
        { id: "b", text: "En la última fila de la tabla" },
        { id: "c", text: "En cualquier celda, sin restricción" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bv-falso",
      text: "¿Qué significa usar FALSO (o 0) como último argumento en BUSCARV?",
      options: [
        { id: "a", text: "Coincidencia exacta" },
        { id: "b", text: "Coincidencia aproximada" },
        { id: "c", text: "Que la fórmula no funcione" },
      ],
      correctOptionId: "a",
      explanation: "En trabajo administrativo casi siempre se usa coincidencia exacta para códigos y etiquetas.",
    },
    {
      id: "bv-formula",
      text: "En el ejemplo del curso, ¿qué fórmula trae el precio del producto desde el catálogo?",
      options: [
        { id: "a", text: "=BUSCARV(A2;Productos!A:C;3;FALSO)" },
        { id: "b", text: "=BUSCARH(A2;Productos!A:C;3;FALSO)" },
        { id: "c", text: "=SUMA(A2:C2)" },
      ],
      correctOptionId: "a",
      explanation: "Columna 3 del catálogo es Precio; A2 tiene el código en Ventas.",
    },
    {
      id: "bv-error",
      text: "Si BUSCARV no encuentra el valor buscado, ¿qué error muestra?",
      options: [
        { id: "a", text: "#N/D" },
        { id: "b", text: "#DIV/0!" },
        { id: "c", text: "#REF!" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bh-diferencia",
      text: "¿Cuál es la diferencia principal entre BUSCARV y BUSCARH?",
      options: [
        { id: "a", text: "BUSCARV busca en la primera columna; BUSCARH en la primera fila" },
        { id: "b", text: "BUSCARH solo funciona en Google Sheets" },
        { id: "c", text: "BUSCARV suma valores; BUSCARH los cuenta" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bh-fila",
      text: "En BUSCARH, el tercer argumento indica…",
      options: [
        { id: "a", text: "El número de fila cuyo valor quieres devolver" },
        { id: "b", text: "El número de columnas a ocultar" },
        { id: "c", text: "El color de la celda resultado" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bh-ejemplo",
      text: "¿Cuándo conviene usar BUSCARH en lugar de BUSCARV?",
      options: [
        { id: "a", text: "Cuando los meses o categorías están como encabezados en la fila superior" },
        { id: "b", text: "Cuando los datos están siempre en columnas verticales" },
        { id: "c", text: "Nunca; BUSCARH está obsoleto" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bv-uso",
      text: "¿En cuál escenario del curso aparece BUSCARV?",
      options: [
        { id: "a", text: "Código de producto → precio desde catálogo" },
        { id: "b", text: "Sumar ventas solo de la región Norte" },
        { id: "c", text: "Promediar notas de un curso" },
      ],
      correctOptionId: "a",
    },
    {
      id: "bh-formula",
      text: "En el ejemplo de ventas mensuales, ¿qué devuelve =BUSCARH(\"Feb\";B1:E3;2;FALSO)?",
      options: [
        { id: "a", text: "145 (ventas de febrero)" },
        { id: "b", text: "120 (ventas de enero)" },
        { id: "c", text: "El nombre del mes" },
      ],
      correctOptionId: "a",
    },
  ],
};
