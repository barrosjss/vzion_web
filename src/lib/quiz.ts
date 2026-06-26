import type { Quiz, QuizQuestion } from "../data/academy/types";

export type QuizStudent = {
  fullName: string;
  email: string;
};

export type QuizSubmission = {
  quizId: string;
  quizTitle: string;
  courseId: string;
  courseTitle: string;
  moduleId: string;
  moduleTitle: string;
  lessonId: string;
  student: QuizStudent;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  questionIds: string[];
  submittedAt: string;
};

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function pickRandomQuestions(quiz: Quiz): QuizQuestion[] {
  const count = Math.min(quiz.questionCount, quiz.questions.length);
  return shuffle(quiz.questions).slice(0, count);
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  answers: Record<string, string>,
  passingScore = 70,
): {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
} {
  const total = questions.length;
  const score = questions.reduce((sum, question) => {
    return sum + (answers[question.id] === question.correctOptionId ? 1 : 0);
  }, 0);
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);

  return {
    score,
    total,
    percentage,
    passed: percentage >= passingScore,
  };
}

export function buildQuizSubmission(input: {
  quiz: Quiz;
  courseId: string;
  courseTitle: string;
  moduleId: string;
  moduleTitle: string;
  lessonId: string;
  student: QuizStudent;
  questions: QuizQuestion[];
  answers: Record<string, string>;
}): QuizSubmission {
  const { score, total, percentage, passed } = calculateQuizScore(
    input.questions,
    input.answers,
    input.quiz.passingScore ?? 70,
  );

  return {
    quizId: input.quiz.id,
    quizTitle: input.quiz.title,
    courseId: input.courseId,
    courseTitle: input.courseTitle,
    moduleId: input.moduleId,
    moduleTitle: input.moduleTitle,
    lessonId: input.lessonId,
    student: input.student,
    score,
    total,
    percentage,
    passed,
    questionIds: input.questions.map((question) => question.id),
    submittedAt: new Date().toISOString(),
  };
}

export async function submitQuizResult(
  endpoint: string,
  submission: QuizSubmission,
): Promise<{ ok: boolean; message: string }> {
  if (!endpoint) {
    return {
      ok: false,
      message: "No hay URL de Google Sheets configurada. La calificación se muestra solo en pantalla.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      return { ok: false, message: "No se pudo guardar la calificación. Intenta de nuevo." };
    }

    const payload = (await response.json()) as { ok?: boolean; message?: string };

    if (payload.ok === false) {
      return { ok: false, message: payload.message ?? "El servidor rechazó el envío." };
    }

    return { ok: true, message: "Calificación guardada correctamente." };
  } catch {
    return { ok: false, message: "Error de conexión al guardar la calificación." };
  }
}
