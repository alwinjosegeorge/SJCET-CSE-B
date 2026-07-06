import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppShell } from "./app-shell-Cur6NV4B.mjs";
import { a as buildDaySchedule, n as DAY_ORDER, r as DAY_SHORT, s as currentDayKey, t as DAY_LABEL } from "./schedule-D_kDuoLS.mjs";
import { t as ScheduleRow } from "./schedule-row-D4BtQ9Q2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule-IGmi54rd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SchedulePage() {
	const [day, setDay] = (0, import_react.useState)("mon");
	const [todayKey, setTodayKey] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const key = currentDayKey(/* @__PURE__ */ new Date());
		setTodayKey(key);
		if (DAY_ORDER.includes(key)) setDay(key);
	}, []);
	const items = buildDaySchedule(day);
	const classCount = items.filter((x) => x.kind === "class").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.22em] text-indigo",
				children: "SJCET CSE-B ✦"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-[28px] font-bold text-ink",
				children: "The week 🗓️"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-5 mb-5 flex gap-2 overflow-x-auto px-5",
				children: DAY_ORDER.map((d) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setDay(d),
						className: `relative shrink-0 rounded-2xl px-4 py-2.5 text-sm font-bold transition ${d === day ? "bg-indigo-deep text-white shadow-[0_10px_24px_-12px_rgba(76,47,115,0.6)]" : "bg-surface text-ink-soft"}`,
						children: DAY_SHORT[d]
					}, d);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate font-display text-lg font-bold text-ink",
					children: DAY_LABEL[day]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 rounded-full bg-lilac-soft px-2.5 py-1 text-[11px] font-bold text-indigo-deep",
					children: [classCount, " classes"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2.5",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleRow, {
					item,
					status: "upcoming"
				}, item.key))
			})
		]
	});
}
//#endregion
export { SchedulePage as component };
