import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Bell, h as CalendarDays, o as Settings, u as House } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-DWt6SLuI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/schedule",
		label: "Schedule",
		icon: CalendarDays
	},
	{
		to: "/countdown",
		label: "Countdown",
		icon: Bell
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function BottomNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-[max(env(safe-area-inset-bottom),0.75rem)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto mx-4 flex w-full max-w-md items-center justify-between rounded-full border border-border/60 bg-surface/95 p-1.5 shadow-[0_16px_40px_-16px_oklch(0.32_0.19_285_/_0.35)] backdrop-blur",
			children: items.map(({ to, label, icon: Icon }) => {
				const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					"aria-label": label,
					className: `flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[12px] font-bold transition-all ${active ? "bg-indigo-deep text-white shadow-[0_10px_20px_-10px_oklch(0.32_0.19_285_/_0.6)]" : "text-ink-soft"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[16px] w-[16px]",
						strokeWidth: 2.4
					}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
				}, to);
			})
		})
	});
}
var PERIOD_SLOTS = [
	{
		id: "p1",
		kind: "class",
		label: "P1",
		start: "09:00",
		end: "09:55"
	},
	{
		id: "p2",
		kind: "class",
		label: "P2",
		start: "09:55",
		end: "10:50"
	},
	{
		id: "b1",
		kind: "break",
		label: "Break",
		start: "10:50",
		end: "11:05"
	},
	{
		id: "p3",
		kind: "class",
		label: "P3",
		start: "11:05",
		end: "11:55"
	},
	{
		id: "p4",
		kind: "class",
		label: "P4",
		start: "11:55",
		end: "12:45"
	},
	{
		id: "lunch",
		kind: "lunch",
		label: "Lunch Break",
		start: "12:45",
		end: "13:35"
	},
	{
		id: "p5",
		kind: "class",
		label: "P5",
		start: "13:35",
		end: "14:30"
	},
	{
		id: "p6",
		kind: "class",
		label: "P6",
		start: "14:30",
		end: "15:25"
	},
	{
		id: "b2",
		kind: "break",
		label: "Break",
		start: "15:25",
		end: "15:40"
	},
	{
		id: "p7",
		kind: "class",
		label: "P7",
		start: "15:40",
		end: "16:30"
	}
];
var DAY_ORDER = [
	"mon",
	"tue",
	"wed",
	"thu",
	"fri"
];
var DAY_LABEL = {
	mon: "Monday",
	tue: "Tuesday",
	wed: "Wednesday",
	thu: "Thursday",
	fri: "Friday"
};
var DAY_SHORT = {
	mon: "Mon",
	tue: "Tue",
	wed: "Wed",
	thu: "Thu",
	fri: "Fri"
};
var TIMETABLE = {
	mon: [
		"Elective",
		"Computer Networks",
		"Machine Learning",
		"Microcontrollers",
		"Elective",
		"Design and Analysis of Algorithms",
		"Design and Analysis of Algorithms"
	],
	tue: [
		"Computer Networks",
		"Machine Learning",
		"Design and Analysis of Algorithms",
		"Computer Networks",
		"Placement Training",
		"Machine Learning",
		"Placement Training"
	],
	wed: [
		"Machine Learning",
		"Computer Networks",
		"Design and Analysis of Algorithms",
		"Microcontrollers",
		"Elective",
		"Elective",
		"Activity / Association"
	],
	thu: [
		"Computer Networks",
		"Machine Learning",
		"MC Project",
		"Design and Analysis of Algorithms",
		"Networks Lab",
		"Networks Lab",
		"Networks Lab"
	],
	fri: [
		"Elective",
		"Networks Lab",
		"Networks Lab",
		"Networks Lab",
		"Microcontrollers",
		"Library / Mentoring",
		"Microcontrollers"
	]
};
function subjectEmoji(subject) {
	return {
		"Elective": "🎨",
		"Computer Networks": "🌐",
		"Machine Learning": "🤖",
		"Microcontrollers": "⚡",
		"Design and Analysis of Algorithms": "🧩",
		"Placement Training": "💼",
		"MC Project": "🚀",
		"Networks Lab": "🧪",
		"Library / Mentoring": "📖",
		"Activity / Association": "🎉"
	}[subject] ?? "📚";
}
function toMinutes(hhmm) {
	const [h, m] = hhmm.split(":").map(Number);
	return h * 60 + m;
}
function fmt12(hhmm) {
	const [h, m] = hhmm.split(":").map(Number);
	const suffix = h >= 12 ? "PM" : "AM";
	return `${(h + 11) % 12 + 1}:${m.toString().padStart(2, "0")} ${suffix}`;
}
var MERGEABLE = /* @__PURE__ */ new Set(["Networks Lab"]);
function buildDaySchedule(day) {
	const subjects = TIMETABLE[day];
	const items = [];
	const classSlots = [];
	let ci = 0;
	for (const slot of PERIOD_SLOTS) if (slot.kind === "class") {
		classSlots.push({
			slot,
			idx: ci
		});
		ci++;
	}
	let i = 0;
	const nonClassSlots = PERIOD_SLOTS;
	let classCursor = 0;
	while (i < nonClassSlots.length) {
		const slot = nonClassSlots[i];
		if (slot.kind !== "class") {
			items.push({
				key: `${day}-${slot.id}`,
				kind: slot.kind,
				label: slot.label,
				start: slot.start,
				end: slot.end,
				startMin: toMinutes(slot.start),
				endMin: toMinutes(slot.end),
				periodIndexes: [],
				isMerged: false
			});
			i++;
			continue;
		}
		const subj = subjects[classCursor];
		let j = i;
		const indexes = [];
		let lastEnd = slot.end;
		let cursor = classCursor;
		while (j < nonClassSlots.length) {
			const s = nonClassSlots[j];
			if (s.kind !== "class") break;
			const sSubj = subjects[cursor];
			if (indexes.length === 0) {
				indexes.push(cursor);
				lastEnd = s.end;
				cursor++;
				j++;
				continue;
			}
			if (MERGEABLE.has(subj) && sSubj === subj) {
				indexes.push(cursor);
				lastEnd = s.end;
				cursor++;
				j++;
			} else break;
		}
		const startSlot = slot;
		const merged = indexes.length > 1;
		items.push({
			key: `${day}-p${indexes[0] + 1}${merged ? `-p${indexes[indexes.length - 1] + 1}` : ""}`,
			kind: "class",
			subject: subj,
			label: merged ? `P${indexes[0] + 1}–P${indexes[indexes.length - 1] + 1}` : `P${indexes[0] + 1}`,
			start: startSlot.start,
			end: lastEnd,
			startMin: toMinutes(startSlot.start),
			endMin: toMinutes(lastEnd),
			periodIndexes: indexes,
			isMerged: merged
		});
		classCursor = cursor;
		i = j;
	}
	return items;
}
function currentDayKey(date) {
	return {
		0: "sun",
		1: "mon",
		2: "tue",
		3: "wed",
		4: "thu",
		5: "fri",
		6: "sat"
	}[date.getDay()];
}
function nextWeekdayKey(day) {
	const order = [
		"sun",
		"mon",
		"tue",
		"wed",
		"thu",
		"fri",
		"sat"
	];
	const idx = order.indexOf(day);
	for (let i = 1; i <= 7; i++) {
		const k = order[(idx + i) % 7];
		if (DAY_ORDER.includes(k)) return k;
	}
	return "mon";
}
function computeNowState(date) {
	const dk = currentDayKey(date);
	const nowMin = date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
	if (dk === "sat" || dk === "sun") {
		const tomorrow = nextWeekdayKey(dk);
		return {
			phase: "weekend",
			day: "mon",
			today: [],
			tomorrow,
			tomorrowSchedule: buildDaySchedule(tomorrow)
		};
	}
	const today = buildDaySchedule(dk);
	const firstClass = today.find((x) => x.kind === "class");
	const lastItem = today[today.length - 1];
	if (nowMin < firstClass.startMin) return {
		phase: "before-day",
		day: dk,
		today,
		next: firstClass,
		minutesUntilNext: Math.max(0, Math.ceil(firstClass.startMin - nowMin))
	};
	if (nowMin >= lastItem.endMin) {
		const tomorrow = nextWeekdayKey(dk);
		return {
			phase: "after-day",
			day: dk,
			today,
			tomorrow,
			tomorrowSchedule: buildDaySchedule(tomorrow)
		};
	}
	const idx = today.findIndex((x) => nowMin >= x.startMin && nowMin < x.endMin);
	if (idx === -1) return {
		phase: "after-day",
		day: dk,
		today,
		tomorrow: nextWeekdayKey(dk),
		tomorrowSchedule: buildDaySchedule(nextWeekdayKey(dk))
	};
	const current = today[idx];
	const nextClass = today.slice(idx + 1).find((x) => x.kind === "class");
	if (current.kind === "class") {
		const duration = current.endMin - current.startMin;
		const elapsed = nowMin - current.startMin;
		return {
			phase: "in-class",
			day: dk,
			today,
			current,
			next: nextClass,
			minutesLeft: Math.max(0, Math.ceil(current.endMin - nowMin)),
			progress: Math.min(1, Math.max(0, elapsed / duration))
		};
	}
	return {
		phase: current.kind,
		day: dk,
		today,
		current,
		next: nextClass,
		minutesUntilNext: Math.max(0, Math.ceil(current.endMin - nowMin))
	};
}
function AppShell({ header, children }) {
	(0, import_react.useEffect)(() => {
		const checkSchedule = () => {
			if (typeof window === "undefined" || !("Notification" in window)) return;
			if (Notification.permission !== "granted") return;
			if (localStorage.getItem("sjcet_notifications_enabled") !== "true") return;
			const now = /* @__PURE__ */ new Date();
			const dk = currentDayKey(now);
			if (dk === "sat" || dk === "sun") return;
			const currentMinutes = now.getHours() * 60 + now.getMinutes();
			const schedule = buildDaySchedule(dk);
			for (const item of schedule) {
				if (item.kind !== "class") continue;
				const diff = item.startMin - currentMinutes;
				if (diff > 0 && diff <= 10) {
					if (localStorage.getItem("sjcet_last_notified_class") !== item.key) {
						new Notification(`${item.subject} starting soon! ⏰`, {
							body: `Class starts in ${Math.round(diff)} minutes (${item.start} – ${item.end})! 🧸✨`,
							icon: "/favicon.png"
						});
						if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([
							100,
							50,
							100
						]);
						localStorage.setItem("sjcet_last_notified_class", item.key);
					}
					break;
				}
			}
		};
		checkSchedule();
		const id = setInterval(checkSchedule, 3e4);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-md flex-col px-5 pb-32 pt-[max(env(safe-area-inset-top),1.25rem)]",
			children: [header, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})]
	});
}
//#endregion
export { PERIOD_SLOTS as a, currentDayKey as c, DAY_SHORT as i, fmt12 as l, DAY_LABEL as n, buildDaySchedule as o, DAY_ORDER as r, computeNowState as s, AppShell as t, subjectEmoji as u };
