import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Check, h as Coffee, m as GraduationCap, o as Sparkles, r as UtensilsCrossed, t as X, u as Layers, y as BookOpen } from "../_libs/lucide-react.mjs";
import { l as fmt12, u as subjectEmoji } from "./app-shell-Dp86dGwd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subject-details-modal-SRxbIx5R.js
var import_jsx_runtime = require_jsx_runtime();
function ScheduleRow({ item, status, onClick }) {
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
		onClick,
		className: `relative flex items-center gap-3 rounded-3xl border px-4 py-3.5 transition cursor-pointer hover:border-indigo/35 active:scale-[0.99] ${isCurrent ? "border-transparent bg-indigo-deep text-white shadow-[0_16px_40px_-16px_oklch(0.32_0.19_285_/_0.55)]" : "border-border bg-surface text-ink"} ${isDone ? "opacity-50" : ""}`,
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
var SUBJECT_DETAILS = {
	"Computer Networks": {
		code: "24SJPCCST501",
		name: "Computer Networks",
		type: "Theory",
		teachers: ["Mary Treesa Thomas"]
	},
	"Design and Analysis of Algorithms": {
		code: "24SJPCCST502",
		name: "Design and Analysis of Algorithms",
		type: "Theory",
		teachers: ["Renju Renjith"]
	},
	"Machine Learning": {
		code: "24SJPCCST503",
		name: "Machine Learning",
		type: "Theory",
		teachers: ["Sarju S"]
	},
	"Microcontrollers": {
		code: "24SJPBCST504",
		name: "Microcontrollers",
		type: "Theory",
		teachers: ["Anjumol Antony"]
	},
	"Networks Lab": {
		code: "24SJPCCSL507",
		name: "Networks Lab",
		type: "Practical",
		teachers: ["Ashly Thomas", "Mary Treesa Thomas"]
	},
	"Machine Learning Lab": {
		code: "24SJPCCSL508",
		name: "Machine Learning Lab",
		type: "Practical",
		teachers: ["Sarju S", "Merlin Joshi"]
	},
	"Placement Training": {
		code: "24SJPLS5",
		name: "In-House Placement Training",
		type: "No University Exam and No Internal Exam (Theory)",
		teachers: ["Neena K Pius", "Amala Maria Kuruvilla"]
	},
	"Activity / Association": {
		code: "24SJACT",
		name: "Activity Slot",
		type: "No University Exam and No Internal Exam (Theory)",
		teachers: ["Anu V Kottath", "Sarju S"]
	},
	"Library / Mentoring": {
		code: "24SJLIBM",
		name: "Library/Mentoring",
		type: "No University Exam and No Internal Exam (Theory)",
		teachers: ["Anu V Kottath", "Sarju S"]
	},
	"Elective": {
		code: "24SJPECST521",
		name: "Software Project Management",
		type: "Program Elective",
		teachers: ["N/A"]
	},
	"MC Project": {
		code: "24SJPCCSL508",
		name: "Microcontroller Project",
		type: "Practical / Project",
		teachers: ["Anjumol Antony"]
	}
};
function SubjectDetailsModal({ subjectName, onClose }) {
	if (!subjectName) return null;
	const details = SUBJECT_DETAILS[subjectName] || {
		code: "N/A",
		name: subjectName,
		type: "Theory",
		teachers: ["N/A"]
	};
	const emoji = subjectEmoji(subjectName);
	const isLab = subjectName === "Lab";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md transform rounded-[32px] bg-surface p-6 shadow-2xl transition-all duration-300 border border-border/80 animate-slide-up mb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-muted text-ink-soft hover:text-ink transition active:scale-[0.9]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-20 w-20 place-items-center rounded-[28px] bg-lilac-soft text-4xl shadow-inner mb-4",
					children: emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-center font-display text-xl font-extrabold text-ink px-4 leading-tight",
					children: isLab ? "Networks & ML Lab" : details.name
				}),
				isLab ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-ink-soft px-4",
							children: "Class is split into two batches running in parallel sessions:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-coral/5 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg bg-indigo-deep px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider",
									children: "Batch A"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-ink",
									children: "Networks Lab"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 text-xs text-ink-soft pl-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink-soft",
										children: "Course Code:"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono bg-surface px-1 py-0.5 rounded border border-border/60 text-[11px] text-ink font-semibold",
										children: "24SJPCCSL507"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink-soft",
										children: "Teachers:"
									}),
									" ",
									"Mary Treesa Thomas & Ashly Thomas"
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-sage/5 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg bg-indigo px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider",
									children: "Batch B"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-ink",
									children: "Machine Learning Lab"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 text-xs text-ink-soft pl-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink-soft",
										children: "Course Code:"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono bg-surface px-1 py-0.5 rounded border border-border/60 text-[11px] text-ink font-semibold",
										children: "24SJPCCSL508"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink-soft",
										children: "Teachers:"
									}),
									" ",
									"Sarju S & Merlin Joshi"
								] })]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blush text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
									className: "h-4.5 w-4.5 text-indigo-deep",
									strokeWidth: 2.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-wider text-ink-soft",
									children: "Course Code"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[13px] font-bold text-ink truncate mt-0.5",
									children: details.code
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
									className: "h-4.5 w-4.5 text-ink",
									strokeWidth: 2.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-wider text-ink-soft",
									children: "Class Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-ink truncate mt-0.5",
									children: details.type
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-butter text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
									className: "h-4.5 w-4.5 text-ink",
									strokeWidth: 2.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-wider text-ink-soft",
									children: "Teacher"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-ink mt-0.5 leading-tight",
									children: details.teachers.join(" & ")
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "mt-6 w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-[0_8px_24px_-8px_oklch(0.32_0.19_285_/_0.5)] active:scale-[0.98] transition",
					children: "Got it! 👍"
				})
			]
		})]
	});
}
//#endregion
export { SubjectDetailsModal as n, ScheduleRow as t };
