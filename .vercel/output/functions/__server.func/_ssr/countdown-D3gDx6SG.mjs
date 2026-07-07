import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Sun, b as Bell, h as Coffee, i as Timer, l as Moon, n as Utensils, r as UtensilsCrossed, y as BookOpen } from "../_libs/lucide-react.mjs";
import { a as PERIOD_SLOTS, c as currentDayKey, l as fmt12, s as computeNowState, t as AppShell } from "./app-shell-BTcutmU8.mjs";
import { t as useNow } from "./use-now-DwH2zO-0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countdown-D3gDx6SG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountdownPage() {
	const now = useNow(1e3);
	const state = (0, import_react.useMemo)(() => now ? computeNowState(now) : null, [now]);
	if (!now || !state) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-indigo border-t-transparent" })
	}) });
	const dk = currentDayKey(now);
	const nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
	let targetMin = 0;
	let label = "";
	let subLabel = "";
	let startMin = 0;
	let icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-6 w-6 text-white" });
	let cardBg = "bg-indigo-deep text-white";
	if (state.phase === "before-day") {
		targetMin = state.next.startMin;
		label = "Morning Bell";
		subLabel = "First class is starting soon";
		startMin = state.next.startMin - 30;
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-6 w-6 text-white" });
		cardBg = "bg-gradient-to-br from-indigo to-indigo-deep text-white";
	} else if (state.phase === "in-class") {
		targetMin = state.current.endMin;
		label = state.current.subject || "Class period";
		subLabel = `Until this period (${state.current.label}) ends`;
		startMin = state.current.startMin;
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-6 w-6 text-white" });
		cardBg = "bg-gradient-to-br from-indigo-deep to-indigo/90 text-white";
	} else if (state.phase === "break" || state.phase === "lunch") {
		targetMin = state.current.endMin;
		label = state.phase === "lunch" ? "Lunch break" : "Break time";
		subLabel = "Until break ends and next class starts";
		startMin = state.current.startMin;
		icon = state.phase === "lunch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "h-6 w-6 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "h-6 w-6 text-white" });
		cardBg = "bg-gradient-to-br from-lilac to-indigo-deep text-white";
	} else {
		const firstTomorrow = state.tomorrowSchedule?.find((x) => x.kind === "class");
		if (firstTomorrow) {
			let addedMinutes = 0;
			if (dk === "fri") {
				addedMinutes = 1440 * 2;
				label = "Monday's classes";
			} else if (dk === "sat") {
				addedMinutes = 1440;
				label = "Monday's classes";
			} else if (dk === "sun") label = "Monday's classes";
			else label = "Tomorrow's classes";
			subLabel = `Starts at ${firstTomorrow.start} (${firstTomorrow.subject || "First Class"})`;
			targetMin = 1440 + addedMinutes + firstTomorrow.startMin;
			startMin = nowMin;
			icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-6 w-6 text-white" });
			cardBg = "bg-gradient-to-br from-indigo-deep to-slate-900 text-white";
		} else {
			label = "No classes upcoming";
			subLabel = "Enjoy your free time!";
		}
	}
	const totalSecondsLeft = Math.max(0, Math.floor((targetMin - nowMin) * 60));
	const hrs = Math.floor(totalSecondsLeft / 3600);
	const min = Math.floor(totalSecondsLeft % 3600 / 60);
	const sec = totalSecondsLeft % 60;
	const countdownStr = hrs > 0 ? `${hrs}h ${min}m ${sec.toString().padStart(2, "0")}s` : `${min}:${sec.toString().padStart(2, "0")}`;
	const totalDurationSec = (targetMin - startMin) * 60;
	const elapsedSec = totalDurationSec - totalSecondsLeft;
	const progressPercent = totalDurationSec > 0 ? Math.min(100, Math.max(0, elapsedSec / totalDurationSec * 100)) : 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.22em] text-indigo",
				children: "SJCET CSE-B ✦"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-[28px] font-bold text-ink",
				children: "Bell Timer 🔔"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden rounded-[32px] ${cardBg} p-6 shadow-xl`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots opacity-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-md",
						children: icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold leading-tight tracking-wide",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium text-white/80",
						children: subLabel
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-10 flex flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[48px] font-black tracking-tighter tabular-nums leading-none",
						children: countdownStr
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70",
						children: hrs > 0 ? "time remaining" : "minutes & seconds left"
					})]
				}),
				hrs === 0 && targetMin > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-white/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-white transition-all duration-1000 ease-out",
							style: { width: `${progressPercent}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progressPercent), "% completed"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bell 🔔" })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-[28px] border border-border/60 bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-[17px] font-bold text-ink text-center",
					children: "College Bell Schedule ⏰"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-center text-xs text-ink-soft mb-6",
					children: "Bell rings precisely at these period intervals"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative border-l-2 border-border/40 pl-6 ml-3.5 space-y-4",
					children: (() => {
						const parseMin = (t) => {
							const [h, m] = t.split(":").map(Number);
							return h * 60 + m;
						};
						return PERIOD_SLOTS.map((slot) => {
							const isBreak = slot.kind === "break";
							const isLunch = slot.kind === "lunch";
							let icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5" });
							let iconBg = "bg-indigo/10 text-indigo";
							let labelText = slot.label;
							if (isBreak) {
								icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "h-3.5 w-3.5" });
								iconBg = "bg-mint text-emerald-700 dark:text-emerald-400";
								labelText = "Short Break ☕";
							} else if (isLunch) {
								icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-3.5 w-3.5" });
								iconBg = "bg-butter text-amber-700 dark:text-amber-400";
								labelText = "Lunch Break 🍱";
							} else labelText = `Period ${slot.label}`;
							const startM = parseMin(slot.start);
							const endM = parseMin(slot.end);
							const isActive = nowMin >= startM && nowMin < endM && state.phase !== "weekend" && state.phase !== "after-day" && state.phase !== "before-day";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative flex items-center justify-between gap-4 transition-all duration-300 rounded-2xl -mx-3.5 px-3.5 ${isActive ? "bg-indigo-deep/5 dark:bg-indigo-deep/20 border border-indigo/20 dark:border-indigo/40 shadow-sm py-2.5" : "py-2 hover:bg-muted/30 dark:hover:bg-surface-2/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `absolute -left-[37px] grid h-7 w-7 place-items-center rounded-full ${iconBg} border border-background dark:border-surface shadow-sm transition-transform duration-300 ${isActive ? "scale-110 ring-2 ring-indigo animate-bounce z-10" : ""}`,
										children: icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-bold text-ink flex items-center gap-1.5 flex-wrap",
											children: [labelText, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center gap-1 rounded-full bg-indigo text-white dark:bg-lilac dark:text-indigo-deep px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider animate-pulse",
												children: "Here 📍"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] font-semibold text-ink-soft mt-0.5",
											children: [
												fmt12(slot.start),
												" – ",
												fmt12(slot.end)
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${isBreak || isLunch ? "bg-slate-100 dark:bg-surface-2 text-slate-500 dark:text-ink-soft" : "bg-indigo-deep/15 dark:bg-lilac-soft/20 text-indigo-deep dark:text-lilac"}`,
										children: slot.kind
									})
								]
							}, slot.id);
						});
					})()
				})
			]
		})]
	});
}
//#endregion
export { CountdownPage as component };
