# Cuestionarios → Google Sheets

Los cuestionarios de Academy envían la calificación a una hoja de cálculo mediante un **Web App de Google Apps Script**. Tú configuras la hoja y el script; el sitio solo necesita la URL pública del Web App.

## 1. Crear la hoja

En Google Sheets, crea una hoja (por ejemplo **「Calificaciones Academy」**) con estas columnas en la fila 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Fecha (ISO) | Nombre | Correo | Curso | Módulo | Lección | Cuestionario ID | Título cuestionario | Aciertos | Total | Porcentaje | Aprobado | IDs preguntas |

Puedes renombrar la pestaña a `Respuestas` o ajustar el nombre en el script.

## 2. Apps Script

En la hoja: **Extensiones → Apps Script**. Pega este código y sustituye `SPREADSHEET_ID` y, si quieres, el nombre de la pestaña:

```javascript
const SPREADSHEET_ID = "PEGA_AQUI_EL_ID_DE_LA_HOJA";
const SHEET_NAME = "Respuestas";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet =
      SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME) ||
      SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.student?.fullName || "",
      data.student?.email || "",
      data.courseTitle || data.courseId || "",
      data.moduleTitle || data.moduleId || "",
      data.lessonId || "",
      data.quizId || "",
      data.quizTitle || "",
      data.score ?? "",
      data.total ?? "",
      data.percentage ?? "",
      data.passed ? "Sí" : "No",
      (data.questionIds || []).join(", "),
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, message: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

**ID de la hoja:** en la URL de Google Sheets, es el fragmento entre `/d/` y `/edit`:

`https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit`

## 3. Desplegar el Web App

1. **Implementar → Nueva implementación**
2. Tipo: **Aplicación web**
3. Ejecutar como: **Yo**
4. Quién tiene acceso: **Cualquier persona**
5. Copia la URL que termina en `/exec` (no uses la de `/dev` en producción).

## 4. Configurar el sitio (vzion_web)

En la raíz del proyecto crea o edita `.env`:

```env
PUBLIC_QUIZ_SHEETS_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

Reinicia el servidor de desarrollo (`pnpm dev`) o vuelve a desplegar el sitio para que Astro lea la variable.

**Archivo de referencia en el repo:** `src/data/academy/quiz-sheets.config.ts`  
**Lógica de envío:** `src/lib/quiz.ts` → `submitQuizResult()`

Si `PUBLIC_QUIZ_SHEETS_URL` está vacía, el cuestionario funciona igual pero **no guarda** en Sheets (solo muestra el resultado en pantalla).

## 5. Cuestionarios actuales

| Módulo | Lección | ID cuestionario |
|--------|---------|-----------------|
| Fundamentos de Python | Cuestionario — Fundamentos | `fundamentos-python-quiz` |
| Datos Primitivos | Cuestionario — Datos Primitivos | `datos-primitivos-quiz` |

Bancos de preguntas:

- `src/data/academy/python/quizzes/fundamentosQuiz.ts`
- `src/data/academy/python/quizzes/datosPrimitivosQuiz.ts`

Para añadir otro cuestionario: define un `Quiz` en datos, asigna `format: "quiz"` y `quiz` en `course.ts`.

## 6. Probar

1. Abre `/academy/python/fundamentos-python-quiz` (o la lección de Datos Primitivos).
2. Completa nombre y correo, responde el cuestionario.
3. Verifica que aparece una fila nueva en la hoja.

Si falla el guardado, revisa en Apps Script **Ejecuciones** y que el Web App esté publicado con acceso **Cualquier persona**.

## Payload JSON (referencia)

```json
{
  "quizId": "fundamentos-python-quiz",
  "quizTitle": "Cuestionario — Fundamentos de Python",
  "courseId": "python",
  "courseTitle": "Programación con Python",
  "moduleId": "fundamentos",
  "moduleTitle": "Fundamentos de Python",
  "lessonId": "fundamentos-python-quiz",
  "student": {
    "fullName": "Ana García López",
    "email": "ana@ejemplo.com"
  },
  "score": 7,
  "total": 8,
  "percentage": 88,
  "passed": true,
  "questionIds": ["f-print", "f-pip", "..."],
  "submittedAt": "2026-06-25T12:00:00.000Z"
}
```
