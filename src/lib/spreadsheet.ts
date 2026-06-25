export function spreadsheetToTsv(headers: string[], rows: string[][]): string {
  return [headers, ...rows].map((row) => row.join("\t")).join("\n");
}

export function isSpreadsheetCellHighlighted(
  highlights: { row: number; col: number }[] | undefined,
  row: number,
  col: number,
): boolean {
  return highlights?.some((cell) => cell.row === row && cell.col === col) ?? false;
}
