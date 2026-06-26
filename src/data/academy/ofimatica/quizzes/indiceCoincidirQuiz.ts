import type { Quiz } from "../../types";

export const indiceCoincidirQuiz: Quiz = {
  id: "indice-coincidir-quiz",
  title: "Cuestionario — INDICE + COINCIDIR y funciones condicionales",
  description:
    "Evalúa búsqueda flexible y SUMAR.SI, CONTAR.SI, PROMEDIO.SI. Preguntas aleatorias; necesitas al menos 70 % para aprobar.",
  questionCount: 8,
  passingScore: 70,
  questions: [
    {
      id: "ic-porque",
      text: "¿Por qué usar INDICE + COINCIDIR en lugar de BUSCARV?",
      options: [
        { id: "a", text: "Permite traer datos de columnas a la izquierda del criterio" },
        { id: "b", text: "Porque BUSCARV no existe en Excel en español" },
        { id: "c", text: "Solo funciona con texto, no con números" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ic-formula",
      text: "¿Cuál es la estructura general de INDICE + COINCIDIR?",
      options: [
        { id: "a", text: "=INDICE(rango_resultado; COINCIDIR(valor_buscado; tabla; 0))" },
        { id: "b", text: "=BUSCARV(valor_buscado; tabla; 0)" },
        { id: "c", text: "=SUMA(INDICE; COINCIDIR)" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ic-coincidir",
      text: "¿Qué hace COINCIDIR en la fórmula combinada?",
      options: [
        { id: "a", text: "Encuentra en qué fila (o columna) está el valor buscado" },
        { id: "b", text: "Suma todos los valores de la tabla" },
        { id: "c", text: "Formatea la celda en negrita" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ic-ejemplo",
      text: "En el ejemplo del catálogo, buscar «Bolígrafo» y traer su código devuelve…",
      options: [
        { id: "a", text: "P002" },
        { id: "b", text: "1200" },
        { id: "c", text: "Bolígrafo" },
      ],
      correctOptionId: "a",
      explanation: "El código está a la izquierda del producto; BUSCARV no podría traerlo.",
    },
    {
      id: "ss-funcion",
      text: "¿Qué hace SUMAR.SI?",
      options: [
        { id: "a", text: "Suma valores solo cuando otra columna cumple un criterio" },
        { id: "b", text: "Cuenta cuántas celdas cumplen un criterio" },
        { id: "c", text: "Calcula el promedio de un rango sin condiciones" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ss-resultado",
      text: "Con =SUMAR.SI(B2:B5;\"Norte\";C2:C5) sobre la tabla de ventas del curso, el resultado es…",
      options: [
        { id: "a", text: "3620" },
        { id: "b", text: "850" },
        { id: "c", text: "3" },
      ],
      correctOptionId: "a",
      explanation: "Suma 1200 + 1500 + 920 de las filas con región Norte.",
    },
    {
      id: "cs-funcion",
      text: "¿Qué hace CONTAR.SI?",
      options: [
        { id: "a", text: "Cuenta cuántas celdas cumplen un criterio (no suma montos)" },
        { id: "b", text: "Suma los valores que cumplen un criterio" },
        { id: "c", text: "Promedia los valores de todo el rango" },
      ],
      correctOptionId: "a",
    },
    {
      id: "cs-resultado",
      text: "=CONTAR.SI(B2:B5;\"Norte\") sobre la tabla de ventas devuelve…",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "3620" },
        { id: "c", text: "1206,67" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ps-funcion",
      text: "¿Qué hace PROMEDIO.SI?",
      options: [
        { id: "a", text: "Calcula el promedio de valores que cumplen un criterio" },
        { id: "b", text: "Cuenta filas vacías" },
        { id: "c", text: "Busca un valor en la primera columna" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ps-resultado",
      text: "PROMEDIO.SI(B2:B5;\"Norte\";C2:C5) sobre la tabla de ventas da aproximadamente…",
      options: [
        { id: "a", text: "1206,67" },
        { id: "b", text: "3620" },
        { id: "c", text: "850" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ic-cero",
      text: "En COINCIDIR, ¿qué significa el argumento 0?",
      options: [
        { id: "a", text: "Coincidencia exacta" },
        { id: "b", text: "Buscar el valor más pequeño" },
        { id: "c", text: "Ignorar mayúsculas y minúsculas siempre" },
      ],
      correctOptionId: "a",
    },
    {
      id: "ss-comodin",
      text: "En SUMAR.SI, ¿para qué sirve un criterio como «Norte*»?",
      options: [
        { id: "a", text: "Incluir cualquier texto que empiece por Norte (Norte, Noreste…)" },
        { id: "b", text: "Multiplicar por el número de filas" },
        { id: "c", text: "Excluir la región Norte" },
      ],
      correctOptionId: "a",
    },
  ],
};
