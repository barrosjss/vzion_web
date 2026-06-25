import type { SlideBlock } from "../data/academy/types";

const asideBlockTypes = new Set<SlideBlock["type"]>(["list", "callout", "cards", "code", "boxes"]);

const complementBlockTypes = new Set<SlideBlock["type"]>([
  "heading",
  "paragraph",
  "quote",
  ...asideBlockTypes,
]);

const mediaBlockTypes = new Set<SlideBlock["type"]>(["figure", "imagePlaceholder", "youtube", "spreadsheet"]);

function hasShortYoutube(blocks: SlideBlock[]): boolean {
  return blocks.some((block) => block.type === "youtube" && block.short);
}

function hasComplements(blocks: SlideBlock[]): boolean {
  return blocks.some((block) => complementBlockTypes.has(block.type));
}

/** Short a la derecha y complementos de la slide a la izquierda en pantallas grandes. */
export function usesSplitShortLayout(blocks?: SlideBlock[]): boolean {
  if (!blocks?.length) return false;

  return hasShortYoutube(blocks) && hasComplements(blocks);
}

/** Imagen a la izquierda y texto a la derecha en pantallas grandes. */
export function usesSplitSlideLayout(blocks?: SlideBlock[]): boolean {
  if (!blocks?.length || usesSplitShortLayout(blocks)) return false;

  const hasMedia = blocks.some((block) => mediaBlockTypes.has(block.type));
  const hasAside = blocks.some((block) => asideBlockTypes.has(block.type));

  return hasMedia && hasAside;
}

/** Slide con un solo video: sin caja alrededor del contenido. */
export function usesBareSlideBody(blocks?: SlideBlock[]): boolean {
  return blocks?.length === 1 && blocks[0].type === "youtube";
}

export function getSplitShortBlocks(blocks?: SlideBlock[]) {
  if (!blocks?.length) {
    return { complements: [], short: [] as SlideBlock[] };
  }

  const short = blocks.filter((block) => block.type === "youtube" && block.short);
  const complements = blocks.filter((block) => !(block.type === "youtube" && block.short));

  return { complements, short };
}
