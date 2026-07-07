export type PeriodKind = "class" | "break" | "lunch";

export interface PeriodSlot {
  id: string;
  kind: PeriodKind;
  label: string; // P1, Break, Lunch, etc.
  start: string; // "HH:MM" 24h
  end: string;
}

export const PERIOD_SLOTS: PeriodSlot[] = [
  { id: "p1", kind: "class", label: "P1", start: "09:00", end: "09:55" },
  { id: "p2", kind: "class", label: "P2", start: "09:55", end: "10:50" },
  { id: "b1", kind: "break", label: "Break", start: "10:50", end: "11:05" },
  { id: "p3", kind: "class", label: "P3", start: "11:05", end: "11:55" },
  { id: "p4", kind: "class", label: "P4", start: "11:55", end: "12:45" },
  { id: "lunch", kind: "lunch", label: "Lunch Break", start: "12:45", end: "13:35" },
  { id: "p5", kind: "class", label: "P5", start: "13:35", end: "14:30" },
  { id: "p6", kind: "class", label: "P6", start: "14:30", end: "15:25" },
  { id: "b2", kind: "break", label: "Break", start: "15:25", end: "15:40" },
  { id: "p7", kind: "class", label: "P7", start: "15:40", end: "16:30" },
];

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri";

export const DAY_ORDER: DayKey[] = ["mon", "tue", "wed", "thu", "fri"];
export const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
};
export const DAY_SHORT: Record<DayKey, string> = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
};

// Subject per class-period index (P1..P7 = 0..6)
export const TIMETABLE: Record<DayKey, string[]> = {
  mon: [
    "Elective",
    "Computer Networks",
    "Machine Learning",
    "Microcontrollers",
    "Elective",
    "Design and Analysis of Algorithms",
    "Design and Analysis of Algorithms",
  ],
  tue: [
    "Computer Networks",
    "Machine Learning",
    "Design and Analysis of Algorithms",
    "Computer Networks",
    "Placement Training",
    "Machine Learning",
    "Placement Training",
  ],
  wed: [
    "Machine Learning",
    "Computer Networks",
    "Design and Analysis of Algorithms",
    "Microcontrollers",
    "Elective",
    "Elective",
    "Activity / Association",
  ],
  thu: [
    "Computer Networks",
    "Machine Learning",
    "MC Project",
    "Design and Analysis of Algorithms",
    "Lab",
    "Lab",
    "Lab",
  ],
  fri: [
    "Elective",
    "Lab",
    "Lab",
    "Lab",
    "Microcontrollers",
    "Library / Mentoring",
    "Microcontrollers",
  ],
};

// Subject visual tone (soft rotating palette).
const TONE_MAP: Record<string, string> = {
  "Elective": "lilac",
  "Computer Networks": "coral",
  "Machine Learning": "sage",
  "Microcontrollers": "butter",
  "Design and Analysis of Algorithms": "coral",
  "Placement Training": "sage",
  "MC Project": "butter",
  "Lab": "coral",
  "Library / Mentoring": "lilac",
  "Activity / Association": "sage",
};

export function subjectTone(subject: string): "coral" | "sage" | "butter" | "lilac" {
  return (TONE_MAP[subject] ?? "sage") as "coral" | "sage" | "butter" | "lilac";
}

export function subjectInitial(subject: string): string {
  const s = subject.replace(/[^A-Za-z]/g, "");
  return (s[0] ?? "?").toUpperCase();
}

export function subjectEmoji(subject: string): string {
  const map: Record<string, string> = {
    "Elective": "🎨",
    "Computer Networks": "🌐",
    "Machine Learning": "🤖",
    "Microcontrollers": "⚡",
    "Design and Analysis of Algorithms": "🧩",
    "Placement Training": "💼",
    "MC Project": "🚀",
    "Lab": "🧪",
    "Library / Mentoring": "📖",
    "Activity / Association": "🎉",
  };
  return map[subject] ?? "📚";
}
