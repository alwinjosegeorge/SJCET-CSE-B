import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowUpRight, a as Sparkles, c as Moon, f as Coffee, i as Sun, n as UtensilsCrossed } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-Cur6NV4B.mjs";
import { t as useNow } from "./use-now-DwH2zO-0.mjs";
import { c as fmt12, o as computeNowState, t as DAY_LABEL } from "./schedule-D_kDuoLS.mjs";
import { t as ScheduleRow } from "./schedule-row-D4BtQ9Q2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9QeYu50.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUBJECT_EMOJI = {
	"Elective": "🎨",
	"Computer Networks": "🌐",
	"Machine Learning": "🤖",
	"Microcontrollers": "🔌",
	"Design and Analysis of Algorithms": "🧩",
	"Placement Training": "💼",
	"MC Project": "🛠️",
	"Networks Lab": "🧪",
	"Library / Mentoring": "📚",
	"Activity / Association": "🎉"
};
function subjectEmoji(subject) {
	if (!subject) return "✨";
	return SUBJECT_EMOJI[subject] ?? "📘";
}
function niceTimeLeft(min) {
	if (min <= 1) return "any second";
	if (min < 60) return `${min} min`;
	const h = Math.floor(min / 60);
	const m = min % 60;
	return m === 0 ? `${h} hr` : `${h}h ${m}m`;
}
function progressRingPath(progress, size = 92, stroke = 8) {
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	return {
		r,
		c,
		offset: c * (1 - progress),
		center: size / 2,
		stroke
	};
}
function Home() {
	const now = useNow(1e3);
	const state = (0, import_react.useMemo)(() => now ? computeNowState(now) : null, [now]);
	if (!now || !state) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-indigo border-t-transparent" })
	}) });
	const headerDay = state.phase === "weekend" ? "Weekend" : DAY_LABEL[state.day];
	const dateLabel = now.toLocaleDateString(void 0, {
		day: "numeric",
		month: "long"
	});
	const timeLabel = now.toLocaleTimeString(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.22em] text-indigo",
						children: "SJCET CSE-B ✦"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 truncate font-display text-[28px] font-bold leading-tight text-ink",
						children: headerDay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium text-ink-soft",
						children: [
							dateLabel,
							" · ",
							timeLabel
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 rounded-full bg-indigo-deep px-3 py-2 font-display text-sm font-bold text-white",
				children: getGreetingEmoji(now)
			})]
		}),
		children: [
			state.phase === "in-class" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InClass, { state }),
			(state.phase === "break" || state.phase === "lunch") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakBento, { state }),
			state.phase === "before-day" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeDay, { state }),
			state.phase === "after-day" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterDay, { state }),
			state.phase === "weekend" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weekend, { state }),
			state.phase !== "weekend" && state.phase !== "after-day" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaySchedule, {
				state,
				now
			})
		]
	});
}
function getGreetingEmoji(d) {
	const h = d.getHours();
	if (h < 12) return "🐣🌤️";
	if (h < 17) return "🐼🕶️";
	if (h < 20) return "🐱🌇";
	return "🧸💤";
}
function HeroCurrent({ item, minutesLeft, progress }) {
	const ring = progressRingPath(progress, 96, 9);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative col-span-3 overflow-hidden rounded-[28px] bg-indigo-deep p-5 text-white shadow-[0_20px_60px_-24px_rgba(76,47,115,0.7)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots text-white/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Happening now"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-[26px] font-bold leading-[1.05]",
							children: item.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs font-medium text-white/75",
							children: [
								item.label,
								" · ",
								fmt12(item.start),
								" – ",
								fmt12(item.end)
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-5xl leading-none",
					children: subjectEmoji(item.subject)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative shrink-0",
					style: {
						width: 96,
						height: 96
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: 96,
						height: 96,
						className: "-rotate-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: ring.center,
							cy: ring.center,
							r: ring.r,
							stroke: "rgba(255, 255, 255, 0.18)",
							strokeWidth: ring.stroke,
							fill: "none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: ring.center,
							cy: ring.center,
							r: ring.r,
							stroke: "white",
							strokeWidth: ring.stroke,
							strokeLinecap: "round",
							strokeDasharray: ring.c,
							strokeDashoffset: ring.offset,
							fill: "none",
							className: "transition-[stroke-dashoffset] duration-700"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-bold",
							children: [Math.round(progress * 100), "%"]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold uppercase tracking-wider text-white/70",
							children: "Time left"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-bold leading-tight",
							children: niceTimeLeft(minutesLeft)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/70",
							children: "until the bell 🔔"
						})
					]
				})]
			})
		]
	});
}
function NextUpTile({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative col-span-2 overflow-hidden rounded-[24px] bg-lilac-soft p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold uppercase tracking-wider text-indigo-deep/70",
				children: "Up next"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[17px] font-bold leading-tight text-indigo-deep",
					children: item.subject
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl leading-none",
					children: subjectEmoji(item.subject)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-[11px] font-medium text-indigo-deep/70",
				children: [
					fmt12(item.start),
					" – ",
					fmt12(item.end)
				]
			})
		]
	});
}
function StatTile({ bg, label, value, sub, emoji, span = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${span === 1 ? "col-span-1" : span === 2 ? "col-span-2" : "col-span-3"} rounded-[24px] ${bg} p-4`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold uppercase tracking-wider text-ink-soft",
					children: label
				}), emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg leading-none",
					children: emoji
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl font-bold text-ink",
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[11px] font-medium text-ink-soft",
				children: sub
			})
		]
	});
}
function InClass({ state }) {
	const remainingClasses = state.today.filter((x) => x.kind === "class" && x.startMin > state.current.startMin).length;
	const lastItem = state.today[state.today.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-3 gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCurrent, {
				item: state.current,
				minutesLeft: state.minutesLeft,
				progress: state.progress
			}),
			state.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextUpTile, { item: state.next }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-mint",
				label: "Almost done",
				value: "Last one",
				sub: "No more after this ✌️",
				emoji: "🎯",
				span: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-blush",
				label: "Left today",
				value: `${remainingClasses}`,
				sub: remainingClasses === 1 ? "class to go" : "classes to go",
				emoji: "📚"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-butter",
				label: "Day ends",
				value: fmt12(lastItem.end),
				sub: "then freedom 🕊️",
				span: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-mint",
				label: "Vibe check",
				value: pickVibe(state.progress),
				emoji: pickVibeEmoji(state.progress)
			})
		]
	});
}
function pickVibe(p) {
	if (p < .25) return "Warmup 🐣";
	if (p < .6) return "Cruising 🦦";
	if (p < .9) return "Cooking 🚀";
	return "Freedom 🎉";
}
function pickVibeEmoji(p) {
	if (p < .25) return "🌱";
	if (p < .6) return "🕶️";
	if (p < .9) return "🔥";
	return "🥳";
}
function BreakBento({ state }) {
	const isLunch = state.phase === "lunch";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-3 gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative col-span-3 overflow-hidden rounded-[28px] bg-indigo-deep p-5 text-white shadow-[0_20px_60px_-24px_rgba(76,47,115,0.7)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots text-white/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(isLunch ? UtensilsCrossed : Coffee, { className: "h-3 w-3" }),
								" ",
								isLunch ? "Lunch time" : "Break time"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-[26px] font-bold leading-[1.05]",
							children: [
								"Breathe. ",
								niceTimeLeft(state.minutesUntilNext),
								" of peace."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-white/75",
							children: ["Until ", fmt12(state.current.end)]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: isLunch ? "🐼🍱" : "🍩☕"
					})]
				})]
			}),
			state.next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextUpTile, { item: state.next }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-butter",
				label: "Starts in",
				value: niceTimeLeft(state.minutesUntilNext),
				emoji: "⏳"
			})
		]
	});
}
function BeforeDay({ state }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-3 gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative col-span-3 overflow-hidden rounded-[28px] bg-indigo-deep p-5 text-white shadow-[0_20px_60px_-24px_rgba(76,47,115,0.7)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots text-white/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3 w-3" }), " Morning"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-[26px] font-bold leading-[1.05]",
							children: ["First class in ", niceTimeLeft(state.minutesUntilNext)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-white/75",
							children: "You've got time. Grab chai ☕"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: "🐣🌤️"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextUpTile, { item: state.next }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-butter",
				label: "Kicks off",
				value: fmt12(state.next.start),
				emoji: "🚀"
			})
		]
	});
}
function AfterDay({ state }) {
	const firstTomorrow = state.tomorrowSchedule.find((x) => x.kind === "class");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-3 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative col-span-3 overflow-hidden rounded-[28px] bg-indigo-deep p-6 text-white shadow-[0_20px_60px_-24px_rgba(76,47,115,0.7)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots text-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3 w-3" }), " Wrapped"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-[30px] font-bold leading-[1.03]",
							children: "Innathekk mathi 🧸✨"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "Classes done. Go rest, superstar."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: "🌙"
					})]
				})
			]
		}), firstTomorrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-3 mt-2 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold text-ink",
					children: "Tomorrow ✨"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold text-ink-soft",
					children: state.tomorrow ? DAY_LABEL[state.tomorrow] : ""
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextUpTile, { item: firstTomorrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-butter",
				label: "Starts at",
				value: fmt12(firstTomorrow.start),
				emoji: "⏰"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-3 mt-2 space-y-2.5",
				children: state.tomorrowSchedule.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleRow, {
					item,
					status: "upcoming"
				}, item.key))
			})
		] })]
	});
}
function Weekend({ state }) {
	const firstTomorrow = state.tomorrowSchedule.find((x) => x.kind === "class");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-3 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative col-span-3 overflow-hidden rounded-[28px] bg-indigo-deep p-6 text-white shadow-[0_20px_60px_-24px_rgba(76,47,115,0.7)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-dots text-white/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
					children: "Weekend"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-[28px] font-bold leading-[1.05]",
					children: [
						"No classes today.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Enjoy 🎈"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-5xl",
					children: "🐼💤"
				})]
			})]
		}), firstTomorrow && state.tomorrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-3 mt-2 flex items-baseline justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-lg font-bold text-ink",
					children: [DAY_LABEL[state.tomorrow], " coming up"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextUpTile, { item: firstTomorrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
				bg: "bg-butter",
				label: "Kicks off",
				value: fmt12(firstTomorrow.start),
				emoji: "🎯"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-3 mt-2 space-y-2.5",
				children: state.tomorrowSchedule.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleRow, {
					item,
					status: "upcoming"
				}, item.key))
			})
		] })]
	});
}
function TodaySchedule({ state, now }) {
	const nowMin = now.getHours() * 60 + now.getMinutes();
	const total = state.today.filter((x) => x.kind === "class").length;
	const done = state.today.filter((x) => x.kind === "class" && nowMin >= x.endMin).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold text-ink",
					children: "Today's flow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 rounded-full bg-lilac-soft px-2.5 py-1 text-[11px] font-bold text-indigo-deep",
					children: [
						done,
						"/",
						total,
						" done"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2.5",
				children: state.today.map((item) => {
					let status = "upcoming";
					if (nowMin >= item.endMin) status = "done";
					else if (nowMin >= item.startMin) status = "current";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleRow, {
						item,
						status
					}, item.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-[11px] font-medium text-ink-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mr-1 inline h-3 w-3" }), "Full week in the Schedule tab"]
			})
		]
	});
}
//#endregion
export { Home as component };
