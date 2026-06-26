import type { Slide } from "../../types";

/** Unidad 5 — FastAPI y base de datos (PDF págs. 196–229). */
export const fastapiDbSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 5 · FastAPI + DB",
    title: "FastAPI y Bases de Datos",
    subtitle: "Conexión, modelos, Depends y autenticación",
  },
  {
    variant: "section",
    eyebrow: "Paso 4",
    title: "Conexión a la DB",
    subtitle: "SQLAlchemy + SQLite",
  },
  {
    variant: "content",
    title: "Configurar la base de datos",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'from sqlalchemy import create_engine, Column, Integer, String, ForeignKey\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nDATABASE_URL = "sqlite:///./test.db"\nengine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})\nSessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)\nBase = declarative_base()',
      },
    ],
  },
  {
    variant: "content",
    title: "Modelos y tablas",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'class UserModel(Base):\n    __tablename__ = "users"\n    id = Column(Integer, primary_key=True)\n    username = Column(String, unique=True)\n    email = Column(String)\n\nBase.metadata.create_all(bind=engine)',
      },
      {
        type: "callout",
        variant: "note",
        text: "ForeignKey vincula tablas: user_id = Column(Integer, ForeignKey(\"users.id\"))",
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Paso 5-6",
    title: "Utilities y autenticación",
    subtitle: "JWT · hash de contraseñas",
  },
  {
    variant: "content",
    title: "OAuth2 y tokens",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'from fastapi.security import OAuth2PasswordBearer\n\noauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")',
      },
      {
        type: "paragraph",
        text: "El cliente envía credenciales a /login, recibe un access_token y lo incluye en peticiones posteriores.",
      },
    ],
  },
  {
    variant: "section",
    eyebrow: "Depends",
    title: "Inyección de dependencias",
    subtitle: "get_db · get_current_user",
  },
  {
    variant: "content",
    title: "¿Qué es Depends?",
    blocks: [
      {
        type: "paragraph",
        text: "Depends inyecta dependencias automáticamente antes de ejecutar el endpoint: sesión de DB, usuario autenticado, etc.",
      },
      {
        type: "code",
        language: "python",
        code: "def get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.get(\"/users/me\")\ndef read_users_me(db=Depends(get_db), token: str = Depends(oauth2_scheme)):\n    ...",
      },
    ],
  },
  {
    variant: "content",
    title: "Ventajas de Depends",
    blocks: [
      {
        type: "cards",
        items: [
          { icon: "♻️", title: "Reutilización", text: "get_db y get_current_user en muchos endpoints." },
          { icon: "🧪", title: "Testeable", text: "Fácil de mockear en pruebas." },
          { icon: "🔒", title: "Seguridad", text: "Centraliza auth y permisos." },
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Lógica del servidor",
    blocks: [
      {
        type: "list",
        style: "numbered",
        items: [
          "Verificar que el usuario no exista antes de registrar.",
          "Encriptar contraseña antes de guardar.",
          "Consultar DB para login y emitir token.",
          "Proteger rutas con Depends(get_current_user).",
          "Crear y listar posts asociados al usuario autenticado.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "model_dump() convierte modelos Pydantic a dict para persistir o responder.",
      },
    ],
  },
  {
    variant: "summary",
    title: "Resumen",
    blocks: [
      {
        type: "list",
        style: "check",
        items: [
          "SQLAlchemy conecta FastAPI a la base de datos",
          "Modelos definen tablas; create_all las crea",
          "Depends inyecta sesión y usuario actual",
          "OAuth2 + JWT protegen endpoints privados",
        ],
      },
    ],
  },
];
