import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Bell, m as CalendarDays, o as Settings, u as House } from "../_libs/lucide-react.mjs";
require_react();
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
			className: "pointer-events-auto mx-4 flex w-full max-w-md items-center justify-between rounded-full border border-border/60 bg-surface/95 p-1.5 shadow-[0_16px_40px_-16px_rgba(76,47,115,0.35)] backdrop-blur",
			children: items.map(({ to, label, icon: Icon }) => {
				const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					"aria-label": label,
					className: `flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[12px] font-bold transition-all ${active ? "bg-indigo-deep text-white shadow-[0_10px_20px_-10px_rgba(76,47,115,0.6)]" : "text-ink-soft"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[16px] w-[16px]",
						strokeWidth: 2.4
					}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
				}, to);
			})
		})
	});
}
function AppShell({ header, children }) {
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
export { AppShell as t };
