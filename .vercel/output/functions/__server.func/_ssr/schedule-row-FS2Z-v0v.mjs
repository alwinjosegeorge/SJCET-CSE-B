import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Sparkles, f as Coffee, n as UtensilsCrossed, p as Check } from "../_libs/lucide-react.mjs";
import { c as fmt12, l as subjectEmoji } from "./schedule-BMKYyNHL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule-row-FS2Z-v0v.js
var import_jsx_runtime = require_jsx_runtime();
function ScheduleRow({ item, status }) {
	if (item.kind === "break" || item.kind === "lunch") {
		const Icon = item.kind === "lunch" ? UtensilsCrossed : Coffee;
		const isCurrent = status === "current";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex items-center gap-3 rounded-3xl border border-dashed px-4 py-3 ${isCurrent ? "border-indigo bg-lilac-soft" : "border-border bg-surface/60"} ${status === "done" ? "opacity-45" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${isCurrent ? "bg-indigo text-white" : "bg-muted text-ink-soft"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold text-ink",
						children: item.kind === "lunch" ? "Lunch Break 🍱" : "Chill Break ☕"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-ink-soft",
						children: [
							fmt12(item.start),
							" – ",
							fmt12(item.end)
						]
					})]
				}),
				isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full bg-indigo-deep px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white",
					children: "Now"
				})
			]
		});
	}
	const isCurrent = status === "current";
	const isDone = status === "done";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex items-center gap-3 rounded-3xl border px-4 py-3.5 transition ${isCurrent ? "border-transparent bg-indigo-deep text-white shadow-[0_16px_40px_-16px_rgba(76,47,115,0.55)]" : "border-border bg-surface text-ink"} ${isDone ? "opacity-50" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold ${isCurrent ? "bg-white/15 text-white" : isDone ? "bg-mint text-ink" : "bg-lilac-soft text-indigo-deep"}`,
				children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-5 w-5",
					strokeWidth: 2.6
				}) : subjectEmoji(item.subject)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[15px] font-bold",
						children: item.subject
					}), item.isMerged && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${isCurrent ? "bg-white/20 text-white" : "bg-lilac-soft text-indigo-deep"}`,
						children: "Lab"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `mt-0.5 text-[11px] ${isCurrent ? "text-white/75" : "text-ink-soft"}`,
					children: [
						item.label,
						" · ",
						fmt12(item.start),
						" – ",
						fmt12(item.end)
					]
				})]
			}),
			isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 shrink-0 text-white/80" })
		]
	});
}
//#endregion
export { ScheduleRow as t };
