import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { buildDaySchedule } from "@/lib/schedule";
import { DAY_ORDER, DAY_SHORT, TIMETABLE } from "@/lib/timetable";
import { subjectEmoji } from "@/lib/cute";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats · CS-B" },
      { name: "description", content: "Weekly subject breakdown for CS-B." },
    ],
  }),
  component: StatsPage,
});

function StatsPage() {
  const counts: Record<string, number> = {};
  for (const day of DAY_ORDER) {
    for (const s of TIMETABLE[day]) counts[s] = (counts[s] ?? 0) + 1;
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...sorted.map((s) => s[1]));

  const classesPerDay = DAY_ORDER.map((d) => {
    const items = buildDaySchedule(d);
    return { day: d, count: items.filter((x) => x.kind === "class").length };
  });
  const dayMax = Math.max(...classesPerDay.map((d) => d.count));

  return (
    <AppShell
      header={
        <header className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo">
            CS-B ✦
          </p>
          <h1 className="mt-1 font-display text-[28px] font-bold text-ink">
            The numbers 📊
          </h1>
        </header>
      }
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 rounded-[24px] bg-indigo-deep p-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
            Total periods
          </p>
          <p className="mt-2 font-display text-3xl font-bold">{total}</p>
          <p className="mt-0.5 text-[11px] text-white/70">per week</p>
        </div>
        <div className="col-span-1 rounded-[24px] bg-blush p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
            Subjects
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-ink">
            {sorted.length}
          </p>
          <p className="mt-0.5 text-[11px] text-ink-soft">this term</p>
        </div>
      </div>

      <section className="mt-6 rounded-[28px] border border-border/60 bg-surface p-5">
        <h3 className="font-display text-lg font-bold text-ink">By subject</h3>
        <div className="mt-4 space-y-3.5">
          {sorted.map(([subject, count]) => (
            <div key={subject}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-sm">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="text-base leading-none">
                    {subjectEmoji(subject)}
                  </span>
                  <span className="truncate font-semibold text-ink">
                    {subject}
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-lilac-soft px-2 py-0.5 text-[11px] font-bold text-indigo-deep">
                  {count}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-indigo-deep"
                  style={{ width: `${(count / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-[28px] border border-border/60 bg-surface p-5">
        <h3 className="font-display text-lg font-bold text-ink">
          Load by day
        </h3>
        <div className="mt-5 flex items-end justify-between gap-2">
          {classesPerDay.map(({ day, count }) => (
            <div key={day} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-[11px] font-bold text-ink">{count}</span>
              <div
                className="w-full rounded-2xl bg-indigo-deep"
                style={{ height: `${8 + (count / dayMax) * 100}px` }}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                {DAY_SHORT[day]}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
