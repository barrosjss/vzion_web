#!/usr/bin/env python3
"""Genera slides TypeScript desde pages.json (OCR del PDF del curso)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OCR_JSON = ROOT / ".tmp/pdf-ocr/pages.json"
OUT_DIR = ROOT / "src/data/academy/python/slides"

MODULE_RANGES: dict[str, tuple[list[tuple[int, int]], str]] = {
    # Unidad 2+ — Unidad 1 se genera desde python_book HTML (convert-python-presentations.mjs)
    "funcionesSlides": ([(79, 88)], "Unidad 2 · Funciones"),
    "erroresSlides": ([(89, 98)], "Unidad 2 · Errores"),
    "pooSlides": ([(99, 104), (105, 157)], "Unidad 2 · POO y archivos"),
    "streamlitSlides": ([(158, 171)], "Unidad 3 · Streamlit"),
    "fastapiSlides": ([(172, 215)], "Unidad 4-5 · FastAPI"),
    "fastapiDbSlides": ([(216, 229)], "Unidad 5 · FastAPI y DB"),
}

GARBAGE_MARKERS = (
    "makeameme",
    "memegenerator",
    "hollymotion",
    "abadango cluster princess",
    "rick and morty api",
)

CODE_HINTS = re.compile(
    r"\b(import|def|print|if|else|elif|for|while|return|class|with|try|except|from)\b|="
)

SECTION_ONLY = re.compile(
    r"^(Fundamentos|Datos|Primitivos|Variables|Sentencias|de Control|de Python|"
    r"Programacion|Objetos|Streamlit|try\s*-\s*except|Gestión de|Biblioteca)$",
    re.I,
)


def load_pages() -> dict[int, str]:
    data = json.loads(OCR_JSON.read_text(encoding="utf-8"))
    return {item["page"]: item["text"] for item in data}


def clean_line(line: str) -> str:
    line = line.strip()
    line = re.sub(r"\s+", " ", line)
    line = line.replace("FCA", "").replace("python O Copy", "").strip()
    return line


def is_garbage(text: str) -> bool:
    compact = re.sub(r"\s+", " ", text).strip()
    if len(compact) < 20:
        return True
    lower = compact.lower()
    if any(marker in lower for marker in GARBAGE_MARKERS):
        return True
    letters = sum(ch.isalpha() for ch in compact)
    if letters / max(len(compact), 1) < 0.35:
        return True
    return False


def extract_code(lines: list[str]) -> list[str]:
    blocks: list[str] = []
    buf: list[str] = []
    for line in lines:
        if CODE_HINTS.search(line) and not line.startswith("✅"):
            buf.append(line)
        elif buf:
            blocks.append("\n".join(buf))
            buf = []
    if buf:
        blocks.append("\n".join(buf))
    return blocks


def split_lines(text: str) -> list[str]:
    return [clean_line(line) for line in text.split("\n") if clean_line(line)]


def infer_variant(title: str, lines: list[str], index: int, total: int) -> str:
    joined = " ".join(lines).lower()
    if index == 0 and len(lines) <= 4:
        return "cover"
    if re.search(r"ejercicio", joined) and not CODE_HINTS.search(joined):
        return "practice"
    if len(lines) <= 3 and any(
        kw in joined
        for kw in (
            "fundamentos",
            "primitivos",
            "variables",
            "sentencias",
            "funciones",
            "streamlit",
            "fastapi",
            "programacion",
            "objetos",
        )
    ):
        return "section"
    if index == total - 1 and "resumen" in joined:
        return "summary"
    return "content"


def page_to_slide(text: str, eyebrow: str, index: int, total: int) -> dict | None:
    if is_garbage(text):
        return None

    lines = split_lines(text)
    if not lines:
        return None

    title = lines[0]
    body_lines = lines[1:]
    variant = infer_variant(title, lines, index, total)

    if variant == "cover":
        subtitle = body_lines[0] if body_lines else None
        slide: dict = {
            "variant": "cover",
            "eyebrow": eyebrow,
            "title": title if len(title) > 3 else " ".join(lines[:2]),
        }
        if subtitle:
            slide["subtitle"] = subtitle
        return slide

    if variant == "section":
        return {
            "variant": "section",
            "eyebrow": eyebrow.split("·")[-1].strip(),
            "title": " ".join(lines[:2]) if len(lines) > 1 and len(lines[0]) < 12 else title,
            "subtitle": body_lines[0] if body_lines else None,
        }

    blocks: list[dict] = []
    prose = [line for line in body_lines if not CODE_HINTS.search(line)]

    if prose:
        if len(prose) == 1:
            blocks.append({"type": "paragraph", "text": prose[0]})
        else:
            blocks.append({"type": "list", "style": "bullet", "items": prose[:12]})

    for code in extract_code(body_lines):
        cleaned = re.sub(r"\s*#\s.*", "", code)
        cleaned = cleaned.replace("Copy Edit", "").strip()
        if len(cleaned) > 8:
            blocks.append({"type": "code", "language": "python", "code": cleaned})

    if title.lower().startswith("tipo de datos") and prose:
        blocks.insert(0, {"type": "heading", "text": title, "level": 3})

    slide = {"variant": variant, "title": title}
    if blocks:
        slide["blocks"] = blocks
    elif body_lines:
        slide["blocks"] = [{"type": "paragraph", "text": " ".join(body_lines[:6])}]
    else:
        return None

    return slide


def merge_casos_uso(slides: list[dict]) -> list[dict]:
    """Inserta slide de casos de uso si el módulo fundamentos quedó con huecos."""
    if not slides or slides[0].get("title") != "¿Qué es Python?":
        return slides

    casos = {
        "variant": "content",
        "title": "¿Para qué se usa Python?",
        "blocks": [
            {
                "type": "cards",
                "items": [
                    {
                        "icon": "🌐",
                        "title": "Desarrollo web",
                        "text": "Frameworks como Django y Flask.",
                    },
                    {
                        "icon": "📊",
                        "title": "Ciencia de datos",
                        "text": "pandas, NumPy y matplotlib para análisis.",
                    },
                    {
                        "icon": "🤖",
                        "title": "IA y machine learning",
                        "text": "TensorFlow, scikit-learn y PyTorch.",
                    },
                    {
                        "icon": "⚙️",
                        "title": "Automatización",
                        "text": "Scripts para tareas repetitivas y DevOps.",
                    },
                ],
            }
        ],
    }
    # Tras características (índice ~2)
    insert_at = min(3, len(slides))
    slides.insert(insert_at, casos)
    return slides


def generate_export(
    export_name: str,
    ranges: list[tuple[int, int]],
    eyebrow: str,
    pages: dict[int, str],
) -> str:
    raw_slides: list[dict] = []
    page_nums: list[int] = []
    for start, end in ranges:
        page_nums.extend(range(start, end + 1))

    for i, page_num in enumerate(page_nums):
        text = pages.get(page_num, "")
        slide = page_to_slide(text, eyebrow, i, len(page_nums))
        if slide:
            raw_slides.append(slide)

    page_label = f"{page_nums[0]}–{page_nums[-1]}" if page_nums else "?"

    if export_name == "fundamentosSlides":
        raw_slides = merge_casos_uso(raw_slides)
        raw_slides.insert(
            1,
            {
                "variant": "content",
                "title": "Ecosistema Python en la industria",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "Python no es solo sintaxis: es el lenguaje detrás de sitios web, análisis de datos, IA, automatización y APIs modernas.",
                    },
                    {
                        "type": "cards",
                        "items": [
                            {"icon": "🌐", "title": "Web", "text": "Django, Flask y FastAPI."},
                            {"icon": "📊", "title": "Datos", "text": "NumPy, pandas y matplotlib."},
                            {"icon": "🎬", "title": "Creatividad", "text": "Blender, animación y pipelines 3D."},
                            {"icon": "🚀", "title": "APIs", "text": "Servicios REST y dashboards con Streamlit."},
                        ],
                    },
                ],
            },
        )

    if raw_slides and raw_slides[0].get("variant") != "cover":
        raw_slides.insert(
            0,
            {
                "variant": "cover",
                "eyebrow": eyebrow,
                "title": eyebrow.split("·")[-1].strip(),
                "subtitle": f"Material del curso FCA (págs. {page_label})",
            },
        )

    json_body = json.dumps(raw_slides, ensure_ascii=False, indent=2)
    for variant in ("cover", "section", "content", "summary", "practice"):
        json_body = json_body.replace(f'"variant": "{variant}"', f'"variant": "{variant}" as const')
    for style in ("bullet", "numbered", "check"):
        json_body = json_body.replace(f'"style": "{style}"', f'"style": "{style}" as const')
    for variant in ("tip", "note", "warning"):
        json_body = json_body.replace(f'"variant": "{variant}"', f'"variant": "{variant}" as const')
    json_body = json_body.replace('"level": 3', '"level": 3 as const')

    return (
        'import type { Slide } from "../../types";\n\n'
        f"/** Generado desde PDF «Fundamentos de python» — páginas {page_label}. */\n"
        f"export const {export_name}: Slide[] = {json_body};\n"
    )


def main() -> None:
    if not OCR_JSON.exists():
        raise SystemExit(f"Missing {OCR_JSON}. Run OCR extraction first.")

    pages = load_pages()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for export_name, (ranges, eyebrow) in MODULE_RANGES.items():
        content = generate_export(export_name, ranges, eyebrow, pages)
        out = OUT_DIR / f"{export_name}.ts"
        out.write_text(content, encoding="utf-8")
        count = content.count('"variant"')
        print(f"Wrote {out.name} (~{count} slides)")


if __name__ == "__main__":
    main()
