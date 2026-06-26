import type { Quiz } from "../../types";

export const fundamentosQuiz: Quiz = {
  id: "fundamentos-python-quiz",
  title: "Cuestionario — Fundamentos de Python",
  description:
    "Evalúa lo aprendido en el módulo. Se eligen preguntas al azar del banco; necesitas al menos 70 % para aprobar.",
  questionCount: 8,
  passingScore: 70,
  questions: [
    {
      id: "f-interpretado",
      text: "¿Python es principalmente un lenguaje interpretado o compilado?",
      options: [
        { id: "a", text: "Interpretado" },
        { id: "b", text: "Compilado a binario antes de ejecutar" },
        { id: "c", text: "Solo funciona en servidores web" },
      ],
      correctOptionId: "a",
      explanation: "Python ejecuta el código mediante un intérprete, línea por línea.",
    },
    {
      id: "f-indentacion",
      text: "¿Qué define los bloques de código en Python?",
      options: [
        { id: "a", text: "Llaves { }" },
        { id: "b", text: "La indentación (espacios o tabulaciones)" },
        { id: "c", text: "La palabra clave end" },
      ],
      correctOptionId: "b",
      explanation: "La indentación es parte de la sintaxis; no es solo estilo.",
    },
    {
      id: "f-print",
      text: "¿Cuál es la forma correcta de mostrar texto en consola?",
      options: [
        { id: "a", text: 'echo("Hola")' },
        { id: "b", text: 'print("Hola")' },
        { id: "c", text: 'console.log("Hola")' },
      ],
      correctOptionId: "b",
      explanation: "print() es la función estándar para salida en Python.",
    },
    {
      id: "f-extension",
      text: "¿Cuál es la extensión habitual de un archivo de código Python?",
      options: [
        { id: "a", text: ".py" },
        { id: "b", text: ".python" },
        { id: "c", text: ".pt" },
      ],
      correctOptionId: "a",
    },
    {
      id: "f-pip",
      text: "¿Para qué sirve pip en el ecosistema Python?",
      options: [
        { id: "a", text: "Ejecutar el intérprete más rápido" },
        { id: "b", text: "Instalar y gestionar paquetes de terceros" },
        { id: "c", text: "Convertir Python a JavaScript" },
      ],
      correctOptionId: "b",
    },
    {
      id: "f-creador",
      text: "¿Quién creó el lenguaje Python?",
      options: [
        { id: "a", text: "Guido van Rossum" },
        { id: "b", text: "James Gosling" },
        { id: "c", text: "Brendan Eich" },
      ],
      correctOptionId: "a",
    },
    {
      id: "f-zen",
      text: "¿Cómo se accede al Zen de Python desde el intérprete?",
      options: [
        { id: "a", text: "import zen" },
        { id: "b", text: "import this" },
        { id: "c", text: "from python import philosophy" },
      ],
      correctOptionId: "b",
    },
    {
      id: "f-hola-mundo",
      text: '¿Qué imprime print("Hola Mundo")?',
      options: [
        { id: "a", text: "Hola Mundo" },
        { id: "b", text: '"Hola Mundo"' },
        { id: "c", text: "Error de sintaxis" },
      ],
      correctOptionId: "a",
    },
    {
      id: "f-version",
      text: "¿Qué comando muestra la versión instalada de Python en la terminal?",
      options: [
        { id: "a", text: "python --version" },
        { id: "b", text: "python -v" },
        { id: "c", text: "pip version" },
      ],
      correctOptionId: "a",
    },
    {
      id: "f-comentarios",
      text: "¿Cómo se escribe un comentario de una línea en Python?",
      options: [
        { id: "a", text: "// comentario" },
        { id: "b", text: "# comentario" },
        { id: "c", text: "/* comentario */" },
      ],
      correctOptionId: "b",
    },
    {
      id: "f-entorno",
      text: "¿Qué herramienta ayuda a aislar dependencias por proyecto?",
      options: [
        { id: "a", text: "Un entorno virtual (venv)" },
        { id: "b", text: "Un firewall" },
        { id: "c", text: "Un compilador C++" },
      ],
      correctOptionId: "a",
    },
    {
      id: "f-usos",
      text: "Python se usa comúnmente para…",
      options: [
        { id: "a", text: "Solo páginas web estáticas sin lógica" },
        { id: "b", text: "Automatización, datos, APIs y scripting" },
        { id: "c", text: "Únicamente control de hardware embebido" },
      ],
      correctOptionId: "b",
    },
  ],
};
