import type { Slide } from "../../types";

/** Unidad 4 — FastAPI (PDF págs. 172–205). */
export const fastapiSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 4 · FastAPI",
    title: "FastAPI",
    subtitle: "APIs REST modernas con Python",
  },
  {
    variant: "section",
    eyebrow: "HTTP",
    title: "Métodos y rutas",
    subtitle: "GET · POST · PUT · DELETE",
  },
  {
    variant: "content",
    title: "Métodos HTTP",
    blocks: [
      {
        type: "cards",
        items: [
          { icon: "📥", title: "GET", text: "Obtener recursos." },
          { icon: "📤", title: "POST", text: "Crear recursos." },
          { icon: "✏️", title: "PUT/PATCH", text: "Actualizar recursos." },
          { icon: "🗑️", title: "DELETE", text: "Eliminar recursos." },
        ],
      },
      {
        type: "paragraph",
        text: "Las rutas organizan URLs para acceder a recursos: /api/usuarios, /api/usuarios/{id}, /api/posts, etc.",
      },
    ],
  },
  {
    variant: "content",
    title: "Flujo Usuario → API → Base de datos",
    blocks: [
      {
        type: "list",
        style: "numbered",
        items: [
          "El cliente envía una petición HTTP (Request).",
          "FastAPI enruta a la función del endpoint.",
          "La función consulta o modifica la base de datos.",
          "Se devuelve una respuesta JSON (Response).",
        ],
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Paso 1",
    title: "Creación del servidor",
    subtitle: "requirements.txt · uvicorn",
  },
  {
    variant: "content",
    title: "Inicializando FastAPI",
    blocks: [
      {
        type: "code",
        language: "python",
        code: "# requirements.txt\n# fastapi\n# uvicorn\n# sqlalchemy\n\nfrom fastapi import FastAPI\nimport uvicorn\n\napp = FastAPI(title=\"Blog FastAPI\")\n\nif __name__ == \"__main__\":\n    uvicorn.run(\"main:app\", host=\"localhost\", port=8080, reload=True)",
      },
      {
        type: "callout",
        variant: "tip",
        text: "Documentación interactiva en /docs (Swagger UI).",
      },
    ],
  },
  {
    variant: "content",
    title: "Rutas en FastAPI",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "Cada ruta usa un decorador: @app.get, @app.post, etc.",
          "La función maneja la lógica del endpoint.",
          "Debe retornar un diccionario o modelo Pydantic.",
        ],
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Paso 2",
    title: "Creación de rutas",
    subtitle: "register · login · users · posts",
  },
  {
    variant: "content",
    title: "Endpoints de ejemplo",
    blocks: [
      {
        type: "code",
        language: "python",
        code: '@app.post("/register")\ndef register(user: UserCreate):\n    return {"message": "crear usuario"}\n\n@app.get("/users/{user_id}")\ndef get_user(user_id: int):\n    return {"id": user_id}',
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Paso 3",
    title: "Schemas JSON",
    subtitle: "Modelos Pydantic para validación",
  },
  {
    variant: "content",
    title: "Schemas con Pydantic",
    blocks: [
      {
        type: "paragraph",
        text: "Los schemas definen la forma de los datos de entrada y salida. FastAPI valida automáticamente el JSON recibido.",
      },
      {
        type: "code",
        language: "python",
        code: "from pydantic import BaseModel\n\nclass UserCreate(BaseModel):\n    username: str\n    password: str\n    name: str\n    email: str",
      },
    ],
  },
  {
    variant: "summary",
    title: "Resumen FastAPI",
    blocks: [
      {
        type: "list",
        style: "check",
        items: [
          "FastAPI crea APIs REST con tipado y docs automáticas",
          "Decoradores @app.get/post definen rutas",
          "Pydantic valida request y response bodies",
          "uvicorn ejecuta el servidor ASGI",
        ],
      },
    ],
  },
];
