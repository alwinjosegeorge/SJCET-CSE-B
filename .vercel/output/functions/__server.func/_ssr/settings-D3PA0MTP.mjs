import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Bell, d as Heart, l as Info, p as CodeXml, s as Palette } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-Ds2zUS8U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-D3PA0MTP.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	{
		icon: Bell,
		label: "Class reminders",
		hint: "Soon ⏰",
		tone: "bg-blush"
	},
	{
		icon: Palette,
		label: "Appearance",
		hint: "System",
		tone: "bg-mint"
	},
	{
		icon: Heart,
		label: "Made for SJCET CSE-B",
		hint: "",
		tone: "bg-butter"
	},
	{
		icon: CodeXml,
		label: "Made by Codexora Studio",
		hint: "Visit 🌐",
		tone: "bg-lilac-soft",
		href: "https://codexorastudio.vercel.app/"
	},
	{
		icon: Info,
		label: "About",
		hint: "v1.0",
		tone: "bg-surface-2"
	}
];
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.22em] text-indigo",
				children: "SJCET CSE-B ✦"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-[28px] font-bold text-ink",
				children: "Settings ⚙️"
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2.5",
			children: rows.map((r) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r.href ? "a" : "div", {
					...r.href ? {
						href: r.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-3 rounded-3xl border border-border/60 bg-surface px-4 py-3.5 transition hover:scale-[1.01] hover:border-indigo/30 active:scale-[0.99] cursor-pointer"
					} : { className: "flex items-center gap-3 rounded-3xl border border-border/60 bg-surface px-4 py-3.5" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${r.tone} text-ink`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
								className: "h-4 w-4",
								strokeWidth: 2.4
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 flex-1 truncate text-sm font-bold text-ink",
							children: r.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "shrink-0 text-[11px] font-semibold text-ink-soft",
							children: r.hint
						})
					]
				}, r.label);
			})
		})
	});
}
//#endregion
export { SettingsPage as component };
