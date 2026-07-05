import type { ScheduleItem } from "@/lib/schedule";

// Cute emoji per subject
const SUBJECT_EMOJI: Record<string, string> = {
  "Elective": "🎨",
  "Computer Networks": "🌐",
  "Machine Learning": "🤖",
  "Microcontrollers": "🔌",
  "Design and Analysis of Algorithms": "🧩",
  "Placement Training": "💼",
  "MC Project": "🛠️",
  "Networks Lab": "🧪",
  "Library / Mentoring": "📚",
  "Activity / Association": "🎉",
};

export function subjectEmoji(subject?: string): string {
  if (!subject) return "✨";
  return SUBJECT_EMOJI[subject] ?? "📘";
}

// Compact time-remaining message
export function niceTimeLeft(min: number): string {
  if (min <= 1) return "any second";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} hr` : `${h}h ${m}m`;
}

export function progressRingPath(progress: number, size = 92, stroke = 8) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return {
    r,
    c,
    offset: c * (1 - progress),
    center: size / 2,
    stroke,
  };
}

export type BentoStatus = ScheduleItem["kind"];
