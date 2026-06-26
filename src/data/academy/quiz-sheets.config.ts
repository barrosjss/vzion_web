/**
 * URL del Web App de Google Apps Script que recibe las calificaciones.
 *
 * Configúrala en `.env` como PUBLIC_QUIZ_SHEETS_URL.
 * Guía completa: docs/academy/google-sheets-quizzes.md
 */
export function getQuizSheetsEndpoint(): string {
  return import.meta.env.PUBLIC_QUIZ_SHEETS_URL?.trim() ?? "";
}
