const MARK_PATTERN = /\[\[([^\]]+)\]\]/g;

export function stripCodeMarks(code: string): string {
  return code.replace(MARK_PATTERN, "$1");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function highlightCodeMarkup(code: string): string {
  const parts = code.split(/(\[\[[^\]]+\]\])/g);

  return parts
    .map((part) => {
      if (part.startsWith("[[") && part.endsWith("]]")) {
        const inner = part.slice(2, -2);
        return `<mark class="slide-code__mark">${escapeHtml(inner)}</mark>`;
      }

      return escapeHtml(part);
    })
    .join("");
}

export function codeHasMarks(code: string): boolean {
  return MARK_PATTERN.test(code);
}
