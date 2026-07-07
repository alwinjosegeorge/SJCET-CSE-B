import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Bell, c as Palette, d as Info, g as CodeXml, p as Heart } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-Dp86dGwd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CijyeWAC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
		hint: "",
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
	const [notificationsEnabled, setNotificationsEnabled] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		setNotificationsEnabled(localStorage.getItem("sjcet_notifications_enabled") === "true");
		setTheme(localStorage.getItem("sjcet_theme") || "light");
	}, []);
	const applyTheme = (targetTheme) => {
		if (targetTheme === "dark" || targetTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	};
	const changeTheme = (newTheme) => {
		setTheme(newTheme);
		localStorage.setItem("sjcet_theme", newTheme);
		applyTheme(newTheme);
		if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(40);
	};
	const toggleNotifications = async () => {
		if (!notificationsEnabled) {
			if (!("Notification" in window)) {
				alert("This browser does not support desktop notifications.");
				return;
			}
			if (await Notification.requestPermission() === "granted") {
				localStorage.setItem("sjcet_notifications_enabled", "true");
				setNotificationsEnabled(true);
				new Notification("Class reminders active! 🔔", {
					body: "We will notify you 10 minutes before each class starts! 🧸✨",
					icon: "/favicon.png"
				});
				if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([
					100,
					50,
					100
				]);
			} else alert("Notification permissions denied. Please enable them in your browser settings.");
		} else {
			localStorage.setItem("sjcet_notifications_enabled", "false");
			setNotificationsEnabled(false);
		}
	};
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
				const isLink = !!r.href;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(isLink ? "a" : "div", {
					...isLink ? {
						href: r.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-3 rounded-3xl border border-border/60 bg-surface px-4 py-3.5 no-underline hover:no-underline cursor-pointer transition active:scale-[0.99]"
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
							className: "min-w-0 flex-1 truncate text-sm font-bold text-ink no-underline",
							children: r.label
						}),
						r.label === "Class reminders" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								toggleNotifications();
							},
							className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${notificationsEnabled ? "bg-indigo" : "bg-border/80"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notificationsEnabled ? "translate-x-5" : "translate-x-0"}` })
						}) : r.label === "Appearance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex p-0.5 bg-muted/65 dark:bg-surface-2 rounded-full border border-border/40 shrink-0",
							children: [
								{
									id: "light",
									icon: "☀️",
									name: "Light"
								},
								{
									id: "dark",
									icon: "🌙",
									name: "Dark"
								},
								{
									id: "system",
									icon: "💻",
									name: "Sys"
								}
							].map((t) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: (e) => {
										e.stopPropagation();
										changeTheme(t.id);
									},
									className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold transition-all duration-200 active:scale-[0.93] ${theme === t.id ? "bg-indigo-deep text-white shadow-[0_4px_12px_-4px_oklch(0.32_0.19_285_/_0.5)] dark:bg-indigo dark:text-white" : "text-ink-soft hover:text-ink"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.name })]
								}, t.id);
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
