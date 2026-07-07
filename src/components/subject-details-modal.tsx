import { X, BookOpen, GraduationCap, Layers } from "lucide-react";
import { subjectEmoji } from "@/lib/timetable";

export interface SubjectDetails {
  code: string;
  name: string;
  type: string;
  teachers: string[];
}

export const SUBJECT_DETAILS: Record<string, SubjectDetails> = {
  "Computer Networks": {
    code: "24SJPCCST501",
    name: "Computer Networks",
    type: "Theory",
    teachers: ["Mary Treesa Thomas"],
  },
  "Design and Analysis of Algorithms": {
    code: "24SJPCCST502",
    name: "Design and Analysis of Algorithms",
    type: "Theory",
    teachers: ["Renju Renjith"],
  },
  "Machine Learning": {
    code: "24SJPCCST503",
    name: "Machine Learning",
    type: "Theory",
    teachers: ["Sarju S"],
  },
  "Microcontrollers": {
    code: "24SJPBCST504",
    name: "Microcontrollers",
    type: "Theory",
    teachers: ["Anjumol Antony"],
  },
  "Networks Lab": {
    code: "24SJPCCSL507",
    name: "Networks Lab",
    type: "Practical",
    teachers: ["Ashly Thomas", "Mary Treesa Thomas"],
  },
  "Machine Learning Lab": {
    code: "24SJPCCSL508",
    name: "Machine Learning Lab",
    type: "Practical",
    teachers: ["Sarju S", "Merlin Joshi"],
  },
  "Placement Training": {
    code: "24SJPLS5",
    name: "In-House Placement Training",
    type: "No University Exam and No Internal Exam (Theory)",
    teachers: ["Neena K Pius", "Amala Maria Kuruvilla"],
  },
  "Activity / Association": {
    code: "24SJACT",
    name: "Activity Slot",
    type: "No University Exam and No Internal Exam (Theory)",
    teachers: ["Anu V Kottath", "Sarju S"],
  },
  "Library / Mentoring": {
    code: "24SJLIBM",
    name: "Library/Mentoring",
    type: "No University Exam and No Internal Exam (Theory)",
    teachers: ["Anu V Kottath", "Sarju S"],
  },
  "Elective": {
    code: "24SJPECST521",
    name: "Software Project Management",
    type: "Program Elective",
    teachers: ["N/A"],
  },
  "MC Project": {
    code: "24SJPCCSL508",
    name: "Microcontroller Project",
    type: "Practical / Project",
    teachers: ["Anjumol Antony"],
  }
};

interface SubjectDetailsModalProps {
  subjectName: string | null;
  onClose: () => void;
}

export function SubjectDetailsModal({ subjectName, onClose }: SubjectDetailsModalProps) {
  if (!subjectName) return null;

  const details = SUBJECT_DETAILS[subjectName] || {
    code: "N/A",
    name: subjectName,
    type: "Theory",
    teachers: ["N/A"],
  };

  const emoji = subjectEmoji(subjectName);

  const isLab = subjectName === "Lab";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card content */}
      <div className="relative w-full max-w-md transform rounded-[32px] bg-surface p-6 shadow-2xl transition-all duration-300 border border-border/80 animate-slide-up mb-2">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-muted text-ink-soft hover:text-ink transition active:scale-[0.9]"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Emoji Circle */}
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-[28px] bg-lilac-soft text-4xl shadow-inner mb-4">
          {emoji}
        </div>

        <h3 className="text-center font-display text-xl font-extrabold text-ink px-4 leading-tight">
          {isLab ? "Networks & ML Lab" : details.name}
        </h3>

        {isLab ? (
          <div className="mt-6 space-y-4">
            <p className="text-center text-xs text-ink-soft px-4">
              Class is split into two batches running in parallel sessions:
            </p>

            {/* Batch A (Networks Lab) */}
            <div className="rounded-2xl border border-border/60 bg-coral/5 p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="rounded-lg bg-indigo-deep px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                  Batch A
                </span>
                <h4 className="text-sm font-bold text-ink">Networks Lab</h4>
              </div>
              <div className="space-y-1.5 text-xs text-ink-soft pl-1">
                <p>
                  <span className="font-semibold text-ink-soft">Course Code:</span>{" "}
                  <code className="font-mono bg-surface px-1 py-0.5 rounded border border-border/60 text-[11px] text-ink font-semibold">
                    24SJPCCSL507
                  </code>
                </p>
                <p>
                  <span className="font-semibold text-ink-soft">Teachers:</span>{" "}
                  Mary Treesa Thomas & Ashly Thomas
                </p>
              </div>
            </div>

            {/* Batch B (Machine Learning Lab) */}
            <div className="rounded-2xl border border-border/60 bg-sage/5 p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="rounded-lg bg-indigo px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                  Batch B
                </span>
                <h4 className="text-sm font-bold text-ink">Machine Learning Lab</h4>
              </div>
              <div className="space-y-1.5 text-xs text-ink-soft pl-1">
                <p>
                  <span className="font-semibold text-ink-soft">Course Code:</span>{" "}
                  <code className="font-mono bg-surface px-1 py-0.5 rounded border border-border/60 text-[11px] text-ink font-semibold">
                    24SJPCCSL508
                  </code>
                </p>
                <p>
                  <span className="font-semibold text-ink-soft">Teachers:</span>{" "}
                  Sarju S & Merlin Joshi
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-3.5">
            {/* Course Code */}
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blush text-ink">
                <BookOpen className="h-4.5 w-4.5 text-indigo-deep" strokeWidth={2.4} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  Course Code
                </p>
                <p className="font-mono text-[13px] font-bold text-ink truncate mt-0.5">
                  {details.code}
                </p>
              </div>
            </div>

            {/* Class Type */}
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-ink">
                <Layers className="h-4.5 w-4.5 text-ink" strokeWidth={2.4} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  Class Type
                </p>
                <p className="text-[13px] font-bold text-ink truncate mt-0.5">
                  {details.type}
                </p>
              </div>
            </div>

            {/* Teacher */}
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-butter text-ink">
                <GraduationCap className="h-4.5 w-4.5 text-ink" strokeWidth={2.4} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  Teacher
                </p>
                <p className="text-[13px] font-bold text-ink mt-0.5 leading-tight">
                  {details.teachers.join(" & ")}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-[0_8px_24px_-8px_oklch(0.32_0.19_285_/_0.5)] active:scale-[0.98] transition"
        >
          Got it! 👍
        </button>
      </div>
    </div>
  );
}
