import type { Slide } from "../../types";

/** Unidad 2 — SQLAlchemy y CRUD (PDF págs. 144–157). */
export const sqlalchemySlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · Base de datos",
    title: "SQLAlchemy y CRUD",
    subtitle: "ORM, modelos y operaciones con Python",
  },
  {
    variant: "content",
    title: "¿Qué es un ORM?",
    blocks: [
      {
        type: "paragraph",
        text: "SQLAlchemy mapea clases Python a tablas de base de datos. Defines modelos con clases y operas con objetos en lugar de SQL crudo.",
      },
      {
        type: "code",
        language: "python",
        code: 'from sqlalchemy import Column, Integer, String, create_engine\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nBase = declarative_base()\n\nclass Usuario(Base):\n    __tablename__ = "usuarios"\n    id = Column(Integer, primary_key=True)\n    nombre = Column(String)\n    email = Column(String)',
      },
    ],
  },
  {
    variant: "content",
    title: "Engine y Session",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "create_engine — conexión a la base (SQLite, PostgreSQL, etc.)",
          "SessionLocal — fábrica de sesiones para consultas",
          "Base.metadata.create_all — crea tablas en la DB",
        ],
      },
      {
        type: "code",
        language: "python",
        code: 'DATABASE_URL = "sqlite:///./test.db"\nengine = create_engine(DATABASE_URL)\nSessionLocal = sessionmaker(bind=engine)\nBase.metadata.create_all(bind=engine)',
      },
    ],
  },
  {
    variant: "content",
    title: "CRUD con SQLAlchemy",
    blocks: [
      {
        type: "code",
        language: "python",
        code: "def crear_usuario(nombre, email):\n    session = SessionLocal()\n    usuario = Usuario(nombre=nombre, email=email)\n    session.add(usuario)\n    session.commit()\n    session.close()\n\ndef obtener_usuarios():\n    session = SessionLocal()\n    usuarios = session.query(Usuario).all()\n    session.close()\n    return usuarios",
      },
    ],
  },
  {
    variant: "content",
    title: "session.query y relaciones",
    blocks: [
      {
        type: "paragraph",
        text: "session.query(Modelo) construye consultas. filter_by y filter permiten condiciones. relationship conecta tablas (ej. usuario → posts).",
      },
      {
        type: "callout",
        variant: "note",
        text: "ForeignKey en Column vincula registros entre tablas a nivel de base de datos.",
      },
    ],
  },
  {
    variant: "content",
    title: "Migraciones con Alembic",
    blocks: [
      {
        type: "paragraph",
        text: "Alembic versiona cambios en el esquema de la base de datos de forma segura cuando evolucionan tus modelos.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Inicializar Alembic en el proyecto",
          "Generar revisión al cambiar modelos",
          "Aplicar migraciones en cada entorno",
        ],
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
          "ORM: clases Python ↔ tablas SQL",
          "Engine + Session para conectar y consultar",
          "CRUD: add, query, commit, delete",
          "Alembic gestiona cambios de esquema",
        ],
      },
    ],
  },
];
