//#region node_modules/.nitro/vite/services/ssr/assets/schedule-D_kDuoLS.js
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
//#endregion
export { buildDaySchedule as a, fmt12 as c, PERIOD_SLOTS as i, subjectEmoji as l, DAY_ORDER as n, computeNowState as o, DAY_SHORT as r, currentDayKey as s, DAY_LABEL as t };
