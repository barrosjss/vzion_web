import type { Slide } from "../../types";

/** Unidad 3 — Streamlit (PDF págs. 158–171). */
export const streamlitSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 3 · Streamlit",
    title: "Streamlit",
    subtitle: "Dashboards y apps de datos en pocas líneas",
  },
  {
    variant: "content",
    title: "¿Qué es Streamlit?",
    blocks: [
      {
        type: "cards",
        items: [
          { icon: "⚡", title: "Pocas líneas", text: "UI interactiva sin HTML ni CSS." },
          { icon: "🚀", title: "Deploy rápido", text: "Publica apps en minutos." },
          { icon: "📊", title: "Datos y ML", text: "Ideal para dashboards y prototipos." },
        ],
      },
      {
        type: "code",
        language: "python",
        code: "pip install streamlit\n\n# uv add streamlit",
      },
    ],
  },
  {
    variant: "content",
    title: "Mi primera app",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'import streamlit as st\nimport pandas as pd\nimport numpy as np\n\nst.title("Mi primera app con Streamlit")\nst.write("Hola, mundo desde Streamlit")\n\ndf = pd.DataFrame(np.random.randn(10, 3), columns=["A", "B", "C"])\nst.dataframe(df)',
      },
      {
        type: "callout",
        variant: "tip",
        text: "Ejecuta con: streamlit run streamlit_1.py",
      },
    ],
  },
  {
    variant: "content",
    title: "Interactividad",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'import streamlit as st\n\nst.title("Interactividad en Streamlit")\nnombre = st.text_input("¿Cómo te llamas?")\nif st.button("Saludar"):\n    st.write(f"¡Hola, {nombre}!")',
      },
      {
        type: "paragraph",
        text: "El usuario escribe, presiona el botón y Streamlit re-ejecuta el script mostrando el resultado.",
      },
    ],
  },
  {
    variant: "content",
    title: "Elementos de visualización",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "st.write() — texto, datos y gráficos",
          "st.markdown() — formato rich text",
          "st.dataframe() / st.table() — tablas",
          "st.metric() — KPIs numéricos",
          "st.button(), st.checkbox(), st.radio() — widgets",
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Consumir una API",
    blocks: [
      {
        type: "paragraph",
        text: "Combina requests con Streamlit para mostrar datos de una API REST en un dashboard.",
      },
      {
        type: "code",
        language: "python",
        code: 'import streamlit as st\nimport requests\n\nrespuesta = requests.get("https://api.example.com/users")\nif respuesta.ok:\n    st.json(respuesta.json())',
      },
    ],
  },
  {
    variant: "practice",
    title: "Proyecto — Gestión de usuarios",
    blocks: [
      {
        type: "paragraph",
        text: "Crea una app Streamlit que liste usuarios desde un JSON o API, permita agregar uno nuevo y muestre métricas (total usuarios, último agregado).",
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
          "Streamlit = apps web en Python puro",
          "Widgets actualizan la UI al interactuar",
          "Ideal para dashboards y demos de datos",
          "Se integra con pandas, APIs y modelos ML",
        ],
      },
    ],
  },
];
