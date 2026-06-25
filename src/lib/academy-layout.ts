import type { SlideBlock } from "../data/academy/types";

const asideBlockTypes = new Set<SlideBlock["type"]>(["list", "callout", "cards", "code", "boxes"]);

const mediaBlockTypes = new Set<SlideBlock["type"]>(["figure", "imagePlaceholder", "youtube"]);

/** Imagen a la izquierda y texto a la derecha en pantallas grandes. */
export function usesSplitSlideLayout(blocks?: SlideBlock[]): boolean {
  if (!blocks?.length) return false;

  const hasMedia = blocks.some((block) => mediaBlockTypes.has(block.type));
  const hasAside = blocks.some((block) => asideBlockTypes.has(block.type));

  return hasMedia && hasAside;
}

/** Slide con un solo video: sin caja alrededor del contenido. */
export function usesBareSlideBody(blocks?: SlideBlock[]): boolean {
  return blocks?.length === 1 && blocks[0].type === "youtube";
}
