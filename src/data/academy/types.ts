export type LessonFormat = "presentation" | "video" | "activity";

export type LessonBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; variant: "tip" | "note" | "warning"; text: string };

export type SlideBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; style?: "bullet" | "check" | "numbered" }
  | { type: "callout"; variant: "tip" | "note" | "warning"; text: string }
  | { type: "code"; language: string; code: string; copyable?: boolean }
  | { type: "quote"; text: string }
  | { type: "columns"; cols: 2 | 3; columns: SlideBlock[][] }
  | { type: "cards"; items: { icon?: string; title: string; text: string }[] }
  | {
      type: "boxes";
      items: {
        variant?: "default" | "brand" | "muted" | "warning";
        title: string;
        blocks: SlideBlock[];
      }[];
    }
  | { type: "figure"; src: string; alt: string; caption?: string }
  | { type: "imagePlaceholder"; label: string; note?: string }
  | { type: "link"; href: string; label: string; external?: boolean }
  | { type: "youtube"; videoId: string; title?: string; caption?: string; short?: boolean }
  | {
      type: "spreadsheet";
      title?: string;
      headers: string[];
      rows: string[][];
      highlights?: { row: number; col: number }[];
      caption?: string;
      copyLabel?: string;
    };

export type Slide = {
  variant?: "cover" | "section" | "content" | "summary" | "practice";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  blocks?: SlideBlock[];
};

export type Lesson = {
  id: string;
  n: string;
  title: string;
  duration?: string;
  summary: string;
  format?: LessonFormat;
  blocks?: LessonBlock[];
  slides?: Slide[];
};

export type AcademyModule = {
  id: string;
  n: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  n: string;
  title: string;
  tag: string;
  desc: string;
  long: string;
  level: string;
  modules: AcademyModule[];
};
