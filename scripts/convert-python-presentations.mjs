/**
 * Convierte presentacion.html del python_book a arrays Slide en TypeScript.
 * Uso: node scripts/convert-python-presentations.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BOOK = join(ROOT, "..", "..", "python_book");
const OUT = join(ROOT, "src/data/academy/python/slides");

const MODULES = [
  { file: "01-Fundamentos-Python/presentacion.html", export: "fundamentosSlides" },
  { file: "02-Datos-Primitivos/presentacion.html", export: "datosPrimitivosSlides" },
  { file: "03-Variables/presentacion.html", export: "variablesSlides" },
  { file: "04-Estructuras-de-Datos/presentacion.html", export: "estructurasSlides" },
  { file: "05-Sentencias-de-Control/presentacion.html", export: "controlSlides" },
];

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extract(inner, regex) {
  const m = inner.match(regex);
  return m ? stripTags(m[1]) : undefined;
}

function extractAll(inner, regex) {
  const results = [];
  let m;
  const re = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : regex.flags + "g");
  while ((m = re.exec(inner)) !== null) {
    results.push(stripTags(m[1]));
  }
  return results;
}

function mapCalloutVariant(className) {
  if (/green|teal/.test(className)) return "tip";
  if (/red|orange/.test(className)) return "warning";
  return "note";
}

function parsePreBlocks(inner) {
  return extractAll(inner, /<pre[^>]*>([\s\S]*?)<\/pre>/).map((code) => ({
    type: "code",
    language: "python",
    code: code.replace(/^python\s*/i, "").trim(),
  }));
}

function parseCallouts(inner) {
  return extractAll(inner, /<div class="callout ([^"]+)"[^>]*>([\s\S]*?)<\/div>/).map((_, i, arr) => {
    // extractAll only captures group 1 - need different approach
    return null;
  });
}

function parseCalloutsFixed(inner) {
  const blocks = [];
  const re = /<div class="callout ([^"]+)"[^>]*>([\s\S]*?)<\/div>/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    blocks.push({
      type: "callout",
      variant: mapCalloutVariant(m[1]),
      text: stripTags(m[2]),
    });
  }
  return blocks;
}

function extractDivChunks(inner, classValuePattern) {
  const chunks = [];
  const openRe = new RegExp(`<div class="(${classValuePattern})"[^>]*>`, "g");
  let open;
  while ((open = openRe.exec(inner)) !== null) {
    const start = open.index + open[0].length;
    let depth = 1;
    let pos = start;
    while (pos < inner.length && depth > 0) {
      const nextOpen = inner.indexOf("<div", pos);
      const nextClose = inner.indexOf("</div>", pos);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        pos = nextOpen + 4;
      } else {
        depth -= 1;
        if (depth === 0) {
          chunks.push(inner.slice(start, nextClose));
          break;
        }
        pos = nextClose + 6;
      }
    }
  }
  return chunks;
}

function parseCardsFromRecap(inner) {
  const items = extractDivChunks(inner, "recap-item").map((chunk) => {
    const icon = extract(chunk, /<div class="ri-icon">([^<]*)<\/div>/) ?? "";
    const title = extract(chunk, /<h4>([\s\S]*?)<\/h4>/) ?? "";
    const text = extract(chunk, /<p>([\s\S]*?)<\/p>/) ?? "";
    const codePre = chunk.match(/<pre[^>]*>([\s\S]*?)<\/pre>/);
    const code = codePre ? stripTags(codePre[1]) : "";
    return {
      icon,
      title,
      text: code ? `${text}\n\n\`${code}\`` : text,
    };
  });
  return items.length ? [{ type: "cards", items }] : [];
}

function parseCardsFromGrid(inner) {
  const items = extractDivChunks(inner, "card(?:\\s+[^\"]+)?").map((chunk) => {
    const icon = extract(chunk, /<div class="card-icon">([^<]*)<\/div>/) ?? "";
    const title = extract(chunk, /<h3[^>]*>([\s\S]*?)<\/h3>/) ?? "";
    const paragraphs = extractAll(chunk, /<p[^>]*>([\s\S]*?)<\/p>/);
    return { icon, title: stripTags(title), text: paragraphs.join(" ") };
  });
  return items.length ? [{ type: "cards", items }] : [];
}

function parseAgendaList(inner) {
  const items = [];
  const re = /<li><span class="ag-num">\d+<\/span>\s*([\s\S]*?)<\/li>/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    items.push(stripTags(m[1]));
  }
  if (items.length) return [{ type: "list", style: "numbered", items }];
  return [];
}

function parseExerciseList(inner) {
  const items = [];
  const re = /<div class="exercise-item">([\s\S]*?)<\/div>/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    const text = stripTags(m[1].replace(/<span class="ex-num">[^<]*<\/span>/, ""));
    items.push(text);
  }
  return items.length ? [{ type: "list", style: "numbered", items }] : [];
}

function parseHighlightBox(inner) {
  const m = inner.match(/<div class="highlight-box[^"]*">([\s\S]*?)<\/div>/);
  if (!m) return [];
  return [{ type: "callout", variant: "note", text: stripTags(m[1]) }];
}

function parsePlayground(inner) {
  const m = inner.match(/<div class="playground-card">([\s\S]*?)<\/div>\s*(?:<\/div>)?/);
  if (!m) return [];
  const chunk = m[1];
  const title = extract(chunk, /<h3[^>]*>([\s\S]*?)<\/h3>/) ?? "Playground";
  const note = extract(chunk, /<p[^>]*class="pg-note"[^>]*>([\s\S]*?)<\/p>/);
  const link = extract(chunk, /<a[^>]*href="([^"]+)"[^>]*>/);
  const blocks = [
    { type: "callout", variant: "tip", text: `Prueba en el playground: ${link ?? "online-python.com"}` },
  ];
  if (note) blocks.push({ type: "paragraph", text: note });
  return blocks;
}

function parseProject(inner) {
  const m = inner.match(/<div class="project-card">([\s\S]*?)<\/div>/);
  if (!m) return [];
  const chunk = m[1];
  const title = extract(chunk, /<h3[^>]*>([\s\S]*?)<\/h3>/) ?? "Proyecto";
  const paragraphs = extractAll(chunk, /<p[^>]*>([\s\S]*?)<\/p>/);
  const listItems = extractAll(chunk, /<li>([\s\S]*?)<\/li>/);
  const blocks = [{ type: "heading", text: title, level: 3 }];
  for (const p of paragraphs) blocks.push({ type: "paragraph", text: p });
  if (listItems.length) blocks.push({ type: "list", style: "bullet", items: listItems });
  return blocks;
}

function parseSlide(inner, slideClass, index, total) {
  const isCover = slideClass.includes("slide-title") || inner.includes('class="cover"');
  const isSection = slideClass.includes("slide-section") || inner.includes("section-divider");

  if (isCover) {
    return {
      variant: "cover",
      eyebrow:
        extract(inner, /<span class="badge">([\s\S]*?)<\/span>/) ??
        extract(inner, /<span class="title-tag">([\s\S]*?)<\/span>/),
      title:
        extract(inner, /<h1>([\s\S]*?)<\/h1>/)?.replace(/\s+/g, " ").trim(),
      subtitle:
        extract(inner, /<p class="subtitle">([\s\S]*?)<\/p>/) ??
        extract(inner, /<p class="title-sub">([\s\S]*?)<\/p>/),
    };
  }

  // Section divider — M05 .section-divider; M01–M04 .slide-section
  if (isSection) {
    return {
      variant: "section",
      eyebrow:
        extract(inner, /<span class="section-num">([\s\S]*?)<\/span>/) ??
        extract(inner, /<span class="section-label">([\s\S]*?)<\/span>/),
      title:
        extract(inner, /<h2>([\s\S]*?)<\/h2>/) ??
        extract(inner, /<div class="section-title">([\s\S]*?)<\/div>/),
      subtitle:
        extract(inner, /<div class="section-divider">[\s\S]*?<h2>[\s\S]*?<\/h2>\s*<p>([\s\S]*?)<\/p>/) ??
        extract(inner, /<p class="section-sub">([\s\S]*?)<\/p>/),
    };
  }

  const h2 = extract(inner, /<h2>([\s\S]*?)<\/h2>/);
  const isPractice =
    inner.includes("exercise-list") ||
    inner.includes("playground-card") ||
    inner.includes("project-card") ||
    /actividad|ejercicio|proyecto/i.test(h2 ?? "");

  const isSummary =
    index === total - 1 ||
    /cierre|resumen|¡hasta|hasta la próxima|próxima clase/i.test(h2 ?? "");

  let variant = "content";
  if (isSummary && !isPractice) variant = "summary";
  else if (isPractice) variant = "practice";

  const blocks = [];

  // Paragraphs before grids (not inside cards)
  const topParagraphs = [];
  const pRe = /<p(?![^>]*class="subtitle")[^>]*>([\s\S]*?)<\/p>/g;
  let pm;
  while ((pm = pRe.exec(inner)) !== null) {
    const text = stripTags(pm[1]);
    if (text && !/class="pg-note"/.test(pm[0])) topParagraphs.push(text);
  }
  for (const p of topParagraphs.slice(0, 2)) {
    if (!blocks.some((b) => b.type === "paragraph" && b.text === p)) {
      blocks.push({ type: "paragraph", text: p });
    }
  }

  blocks.push(...parseCardsFromRecap(inner));
  blocks.push(...parseCardsFromGrid(inner));
  blocks.push(...parseAgendaList(inner));
  blocks.push(...parseExerciseList(inner));
  blocks.push(...parseHighlightBox(inner));
  blocks.push(...parsePlayground(inner));
  blocks.push(...parseProject(inner));
  blocks.push(...parseCalloutsFixed(inner));

  for (const code of parsePreBlocks(inner)) {
    if (!blocks.some((b) => b.type === "code" && b.code === code.code)) {
      blocks.push(code);
    }
  }

  // Tables
  const tableMatch = inner.match(/<table>([\s\S]*?)<\/table>/);
  if (tableMatch) {
    const rows = [];
    const trRe = /<tr>([\s\S]*?)<\/tr>/g;
    let tr;
    while ((tr = trRe.exec(tableMatch[1])) !== null) {
      const cells = extractAll(tr[1], /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/);
      if (cells.length) rows.push(cells.join(" | "));
    }
    if (rows.length) {
      blocks.push({ type: "list", style: "bullet", items: rows });
    }
  }

  const slide = { variant };
  if (h2) slide.title = h2;
  if (blocks.length) {
    const deduped = blocks.filter((b) => {
      if (b.type !== "code") return true;
      return !blocks.some(
        (c) =>
          c.type === "cards" &&
          c.items.some((item) => item.text.includes(b.code)),
      );
    });
    slide.blocks = deduped;
  }

  return slide;
}

function extractSlideInners(html) {
  const wrapperMatch = html.match(/<div class="slides-wrapper">([\s\S]*?)<\/div>\s*<!--\s*\/slides-wrapper\s*-->/);
  const content = wrapperMatch?.[1] ?? html.match(/<div class="slides-wrapper">([\s\S]*?)<\/div>\s*<script/i)?.[1];
  if (!content) throw new Error("No slides-wrapper found");

  const inners = [];
  const openRe = /<div class="(slide(?:\s+(?:slide-title|slide-section))?(?:\s+active)?)">/g;
  let open;
  while ((open = openRe.exec(content)) !== null) {
    const slideClass = open[1];
    let pos = open.index + open[0].length;
    let depth = 1;
    while (pos < content.length && depth > 0) {
      const nextOpen = content.indexOf("<div", pos);
      const nextClose = content.indexOf("</div>", pos);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        pos = nextOpen + 4;
      } else {
        depth -= 1;
        if (depth === 0) {
          inners.push({ inner: content.slice(open.index + open[0].length, nextClose), slideClass });
          break;
        }
        pos = nextClose + 6;
      }
    }
  }
  return inners;
}

function convertFile(relPath) {
  const html = readFileSync(join(BOOK, relPath), "utf8");
  const slideChunks = extractSlideInners(html);
  if (!slideChunks.length) throw new Error(`No slides in ${relPath}`);
  return slideChunks.map(({ inner, slideClass }, i) => parseSlide(inner, slideClass, i, slideChunks.length));
}

function toTs(exportName, slides) {
  const json = JSON.stringify(slides, null, 2)
    .replace(/"variant": "cover"/g, '"variant": "cover" as const')
    .replace(/"variant": "section"/g, '"variant": "section" as const')
    .replace(/"variant": "content"/g, '"variant": "content" as const')
    .replace(/"variant": "summary"/g, '"variant": "summary" as const')
    .replace(/"variant": "practice"/g, '"variant": "practice" as const')
    .replace(/"style": "bullet"/g, '"style": "bullet" as const')
    .replace(/"style": "numbered"/g, '"style": "numbered" as const')
    .replace(/"style": "check"/g, '"style": "check" as const')
    .replace(/"variant": "tip"/g, '"variant": "tip" as const')
    .replace(/"variant": "note"/g, '"variant": "note" as const')
    .replace(/"variant": "warning"/g, '"variant": "warning" as const')
    .replace(/"level": 3/g, '"level": 3 as const');

  return `import type { Slide } from "../../types";

/** Generado desde python_book — no editar a mano salvo videos/recursos externos. */
export const ${exportName}: Slide[] = ${json};
`;
}

mkdirSync(OUT, { recursive: true });

for (const mod of MODULES) {
  const slides = convertFile(mod.file);
  const outPath = join(OUT, `${mod.export}.ts`);
  writeFileSync(outPath, toTs(mod.export, slides));
  console.log(`Wrote ${outPath} (${slides.length} slides)`);
}
