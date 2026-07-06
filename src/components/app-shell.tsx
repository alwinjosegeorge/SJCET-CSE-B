import { useState, useEffect, type ReactNode } from "react";
import { BottomNav } from "./bottom-nav";

interface AppShellProps {
  header?: ReactNode;
  children: ReactNode;
}

export function AppShell({ header, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-32 pt-[max(env(safe-area-inset-top),1.25rem)]">
        {header}
        <main className="flex-1">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}

export function AppHeader({ day }: { day: string }) {
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    setDateStr(
      new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      })
    );
  }, []);

  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          CS-B
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink">{day}</h1>
      </div>
      <div className="rounded-full border border-border/60 bg-surface px-3 py-1.5 text-[11px] font-medium text-ink-soft">
        {dateStr}
      </div>
    </header>
  );
}
