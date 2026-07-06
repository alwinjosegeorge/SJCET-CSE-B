import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Info, Bell, Palette, Heart } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · SJCET CSE-B" },
      { name: "description", content: "App preferences for SJCET CSE-B Timetable." },
    ],
  }),
  component: SettingsPage,
});

const rows = [
  { icon: Bell, label: "Class reminders", hint: "Soon ⏰", tone: "bg-blush" },
  { icon: Palette, label: "Appearance", hint: "System", tone: "bg-mint" },
  { icon: Heart, label: "Made for SJCET CSE-B", hint: "", tone: "bg-butter" },
  { icon: Info, label: "About", hint: "v1.0", tone: "bg-lilac-soft" },
];

function SettingsPage() {
  return (
    <AppShell
      header={
        <header className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo">
            SJCET CSE-B ✦
          </p>
          <h1 className="mt-1 font-display text-[28px] font-bold text-ink">
            Settings ⚙️
          </h1>
        </header>
      }
    >
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center gap-3 rounded-3xl border border-border/60 bg-surface px-4 py-3.5"
          >
            <div
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${r.tone} text-ink`}
            >
              <r.icon className="h-4 w-4" strokeWidth={2.4} />
            </div>
            <p className="min-w-0 flex-1 truncate text-sm font-bold text-ink">
              {r.label}
            </p>
            <p className="shrink-0 text-[11px] font-semibold text-ink-soft">
              {r.hint}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-1.5 pb-6">
        <a
          href="https://codexorastudio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full bg-lilac-soft/60 px-4 py-2.5 text-xs font-bold text-indigo transition-all duration-300 hover:bg-lilac-soft hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          <span>Made with 💖 by</span>
          <span className="underline decoration-indigo/35 decoration-2 underline-offset-2 group-hover:decoration-indigo">
            Codexora Studio
          </span>
          <span className="text-sm">✨</span>
        </a>
      </div>
    </AppShell>
  );
}
