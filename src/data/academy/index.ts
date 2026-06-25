import type { Course, Lesson, LessonFormat } from "./types";
import { ofimaticaCourse } from "./ofimatica";
import { pythonCourse } from "./python";

export * from "./types";

export const courses: Course[] = [pythonCourse, ofimaticaCourse];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getModuleById(courseId: string, moduleId: string) {
  return getCourseById(courseId)?.modules.find((m) => m.id === moduleId);
}

export function getLessonById(courseId: string, lessonId: string) {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return { course, module, lesson };
  }

  return undefined;
}

export function getLessonPath(courseId: string, lessonId: string): string {
  return `/academy/${courseId}/${lessonId}`;
}

export function getCourseStats(course: Course) {
  const moduleCount = course.modules.length;
  const lessonCount = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  return { moduleCount, lessonCount };
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const course = getCourseById(courseId);
  if (!course) return { prev: undefined, next: undefined };

  const flat = course.modules.flatMap((m) => m.lessons.map((l) => ({ module: m, lesson: l })));
  const index = flat.findIndex((item) => item.lesson.id === lessonId);

  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  };
}

export function lessonUsesSlides(lesson: { slides?: unknown[]; blocks?: unknown[] }): boolean {
  return Boolean(lesson.slides && lesson.slides.length > 0);
}

export const lessonFormatMeta = {
  presentation: {
    label: "Presentación",
    description: "Slides con teoría, ejemplos y material de clase.",
  },
  video: {
    label: "Video",
    description: "Clase en formato audiovisual.",
  },
  activity: {
    label: "Actividad",
    description: "Ejercicio práctico, taller o evaluación.",
  },
} satisfies Record<LessonFormat, { label: string; description: string }>;

export const lessonFormats = Object.keys(lessonFormatMeta) as LessonFormat[];

export function getLessonFormat(lesson: Lesson): LessonFormat {
  if (lesson.format) return lesson.format;

  const slides = lesson.slides ?? [];

  if (slides.some((slide) => slide.blocks?.some((block) => block.type === "youtube"))) {
    return "video";
  }

  return "presentation";
}
