import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-now-DwH2zO-0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useNow(intervalMs = 1e3) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), intervalMs);
		return () => clearInterval(id);
	}, [intervalMs]);
	return now;
}
//#endregion
export { useNow as t };
