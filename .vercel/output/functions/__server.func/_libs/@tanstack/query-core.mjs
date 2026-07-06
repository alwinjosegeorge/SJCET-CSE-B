//#region \0@oxc-project+runtime@0.138.0/helpers/esm/checkPrivateRedeclaration.js
function _checkPrivateRedeclaration(e, t) {
	if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
//#endregion
//#region \0@oxc-project+runtime@0.138.0/helpers/esm/classPrivateMethodInitSpec.js
function _classPrivateMethodInitSpec(e, a) {
	_checkPrivateRedeclaration(e, a), a.add(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.138.0/helpers/esm/classPrivateFieldInitSpec.js
function _classPrivateFieldInitSpec(e, t, a) {
	_checkPrivateRedeclaration(e, t), t.set(e, a);
}
//#endregion
//#region \0@oxc-project+runtime@0.138.0/helpers/esm/assertClassBrand.js
function _assertClassBrand(e, t, n) {
	if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw new TypeError("Private element is not present on this object");
}
//#endregion
//#region \0@oxc-project+runtime@0.138.0/helpers/esm/classPrivateFieldSet2.js
function _classPrivateFieldSet2(s, a, r) {
	return s.set(_assertClassBrand(s, a), r), r;
}
//#endregion
//#region \0@oxc-project+runtime@0.138.0/helpers/esm/classPrivateFieldGet2.js
function _classPrivateFieldGet2(s, a) {
	return s.get(_assertClassBrand(s, a));
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = this.subscribe.bind(this);
	}
	subscribe(listener) {
		this.listeners.add(listener);
		this.onSubscribe();
		return () => {
			this.listeners.delete(listener);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/focusManager.js
var _focused, _cleanup$1, _setup$1;
var focusManager = new (_focused = /* @__PURE__ */ new WeakMap(), _cleanup$1 = /* @__PURE__ */ new WeakMap(), _setup$1 = /* @__PURE__ */ new WeakMap(), class extends Subscribable {
	constructor() {
		super();
		_classPrivateFieldInitSpec(this, _focused, void 0);
		_classPrivateFieldInitSpec(this, _cleanup$1, void 0);
		_classPrivateFieldInitSpec(this, _setup$1, void 0);
		_classPrivateFieldSet2(_setup$1, this, (onFocus) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const listener = () => onFocus();
				window.addEventListener("visibilitychange", listener, false);
				return () => {
					window.removeEventListener("visibilitychange", listener);
				};
			}
		});
	}
	onSubscribe() {
		if (!_classPrivateFieldGet2(_cleanup$1, this)) this.setEventListener(_classPrivateFieldGet2(_setup$1, this));
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			var _classPrivateFieldGet2$6;
			(_classPrivateFieldGet2$6 = _classPrivateFieldGet2(_cleanup$1, this)) === null || _classPrivateFieldGet2$6 === void 0 || _classPrivateFieldGet2$6.call(this);
			_classPrivateFieldSet2(_cleanup$1, this, void 0);
		}
	}
	setEventListener(setup) {
		var _classPrivateFieldGet3;
		_classPrivateFieldSet2(_setup$1, this, setup);
		(_classPrivateFieldGet3 = _classPrivateFieldGet2(_cleanup$1, this)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.call(this);
		_classPrivateFieldSet2(_cleanup$1, this, setup((focused) => {
			if (typeof focused === "boolean") this.setFocused(focused);
			else this.onFocus();
		}));
	}
	setFocused(focused) {
		if (_classPrivateFieldGet2(_focused, this) !== focused) {
			_classPrivateFieldSet2(_focused, this, focused);
			this.onFocus();
		}
	}
	onFocus() {
		const isFocused = this.isFocused();
		this.listeners.forEach((listener) => {
			listener(isFocused);
		});
	}
	isFocused() {
		var _globalThis$document;
		if (typeof _classPrivateFieldGet2(_focused, this) === "boolean") return _classPrivateFieldGet2(_focused, this);
		return ((_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.visibilityState) !== "hidden";
	}
})();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var _provider, _providerCalled;
var defaultTimeoutProvider = {
	setTimeout: (callback, delay) => setTimeout(callback, delay),
	clearTimeout: (timeoutId) => clearTimeout(timeoutId),
	setInterval: (callback, delay) => setInterval(callback, delay),
	clearInterval: (intervalId) => clearInterval(intervalId)
};
var timeoutManager = new (_provider = /* @__PURE__ */ new WeakMap(), _providerCalled = /* @__PURE__ */ new WeakMap(), class {
	constructor() {
		_classPrivateFieldInitSpec(this, _provider, defaultTimeoutProvider);
		_classPrivateFieldInitSpec(this, _providerCalled, false);
	}
	setTimeoutProvider(provider) {
		_classPrivateFieldSet2(_provider, this, provider);
	}
	setTimeout(callback, delay) {
		return _classPrivateFieldGet2(_provider, this).setTimeout(callback, delay);
	}
	clearTimeout(timeoutId) {
		_classPrivateFieldGet2(_provider, this).clearTimeout(timeoutId);
	}
	setInterval(callback, delay) {
		return _classPrivateFieldGet2(_provider, this).setInterval(callback, delay);
	}
	clearInterval(intervalId) {
		_classPrivateFieldGet2(_provider, this).clearInterval(intervalId);
	}
})();
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
	return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveQueryBoolean(option, query) {
	return typeof option === "function" ? option(query) : option;
}
function matchQuery(filters, query) {
	const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== "all") {
		const isActive = query.isActive();
		if (type === "active" && !isActive) return false;
		if (type === "inactive" && isActive) return false;
	}
	if (typeof stale === "boolean" && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return ((options === null || options === void 0 ? void 0 : options.queryKeyHashFn) || hashKey)(queryKey);
}
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
		result[key] = val[key];
		return result;
	}, {}) : val);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
	return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	if (Object.getPrototypeOf(o) !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
	return data;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
	if (!options.queryFn && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise)) return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
	return options.queryFn;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, "signal", {
		enumerable: true,
		get: () => {
			var _signal;
			(_signal = signal) !== null && _signal !== void 0 || (signal = getSignal());
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener("abort", onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager = /* @__PURE__ */ (() => {
	let isServerFn = () => isServer;
	return {
		/**
		* Returns whether the current runtime should be treated as a server environment.
		*/
		isServer() {
			return isServerFn();
		},
		/**
		* Overrides the server check globally.
		*/
		setIsServer(isServerValue) {
			isServerFn = isServerValue;
		}
	};
})();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
	let resolve;
	let reject;
	const thenable = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	thenable.status = "pending";
	thenable.catch(() => {});
	function finalize(data) {
		Object.assign(thenable, data);
		delete thenable.resolve;
		delete thenable.reject;
	}
	thenable.resolve = (value) => {
		finalize({
			status: "fulfilled",
			value
		});
		resolve(value);
	};
	thenable.reject = (reason) => {
		finalize({
			status: "rejected",
			reason
		});
		reject(reason);
	};
	return thenable;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/notifyManager.js
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else scheduleFn(() => {
			notifyFn(callback);
		});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length) scheduleFn(() => {
			batchNotifyFn(() => {
				originalQueue.forEach((callback) => {
					notifyFn(callback);
				});
			});
		});
	};
	return {
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		/**
		* All calls to the wrapped function will be batched.
		*/
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		schedule,
		/**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		*/
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		/**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* By default React Query will use the batch function provided by ReactDOM or React Native.
		*/
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
var notifyManager = createNotifyManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/onlineManager.js
var _online, _cleanup, _setup;
var onlineManager = new (_online = /* @__PURE__ */ new WeakMap(), _cleanup = /* @__PURE__ */ new WeakMap(), _setup = /* @__PURE__ */ new WeakMap(), class extends Subscribable {
	constructor() {
		super();
		_classPrivateFieldInitSpec(this, _online, true);
		_classPrivateFieldInitSpec(this, _cleanup, void 0);
		_classPrivateFieldInitSpec(this, _setup, void 0);
		_classPrivateFieldSet2(_setup, this, (onOnline) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const onlineListener = () => onOnline(true);
				const offlineListener = () => onOnline(false);
				window.addEventListener("online", onlineListener, false);
				window.addEventListener("offline", offlineListener, false);
				return () => {
					window.removeEventListener("online", onlineListener);
					window.removeEventListener("offline", offlineListener);
				};
			}
		});
	}
	onSubscribe() {
		if (!_classPrivateFieldGet2(_cleanup, this)) this.setEventListener(_classPrivateFieldGet2(_setup, this));
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			var _classPrivateFieldGet2$5;
			(_classPrivateFieldGet2$5 = _classPrivateFieldGet2(_cleanup, this)) === null || _classPrivateFieldGet2$5 === void 0 || _classPrivateFieldGet2$5.call(this);
			_classPrivateFieldSet2(_cleanup, this, void 0);
		}
	}
	setEventListener(setup) {
		var _classPrivateFieldGet3;
		_classPrivateFieldSet2(_setup, this, setup);
		(_classPrivateFieldGet3 = _classPrivateFieldGet2(_cleanup, this)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.call(this);
		_classPrivateFieldSet2(_cleanup, this, setup(this.setOnline.bind(this)));
	}
	setOnline(online) {
		if (_classPrivateFieldGet2(_online, this) !== online) {
			_classPrivateFieldSet2(_online, this, online);
			this.listeners.forEach((listener) => {
				listener(online);
			});
		}
	}
	isOnline() {
		return _classPrivateFieldGet2(_online, this);
	}
})();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode !== null && networkMode !== void 0 ? networkMode : "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
	constructor(options) {
		super("CancelledError");
		this.revert = options === null || options === void 0 ? void 0 : options.revert;
		this.silent = options === null || options === void 0 ? void 0 : options.silent;
	}
};
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	const thenable = pendingThenable();
	const isResolved = () => thenable.status !== "pending";
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			var _config$onCancel;
			const error = new CancelledError(cancelOptions);
			reject(error);
			(_config$onCancel = config.onCancel) === null || _config$onCancel === void 0 || _config$onCancel.call(config, error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn === null || continueFn === void 0 || continueFn();
			thenable.resolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn === null || continueFn === void 0 || continueFn();
			thenable.reject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			var _config$onPause;
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			(_config$onPause = config.onPause) === null || _config$onPause === void 0 || _config$onPause.call(config);
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) {
				var _config$onContinue;
				(_config$onContinue = config.onContinue) === null || _config$onContinue === void 0 || _config$onContinue.call(config);
			}
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise !== null && initialPromise !== void 0 ? initialPromise : config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
			var _config$retry, _config$retryDelay, _config$onFail;
			if (isResolved()) return;
			const retry = (_config$retry = config.retry) !== null && _config$retry !== void 0 ? _config$retry : environmentManager.isServer() ? 0 : 3;
			const retryDelay = (_config$retryDelay = config.retryDelay) !== null && _config$retryDelay !== void 0 ? _config$retryDelay : defaultRetryDelay;
			const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
			const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
			if (isRetryCancelled || !shouldRetry) {
				reject(error);
				return;
			}
			failureCount++;
			(_config$onFail = config.onFail) === null || _config$onFail === void 0 || _config$onFail.call(config, failureCount, error);
			sleep(delay).then(() => {
				return canContinue() ? void 0 : pause();
			}).then(() => {
				if (isRetryCancelled) reject(error);
				else run();
			});
		});
	};
	return {
		promise: thenable,
		status: () => thenable.status,
		cancel,
		continue: () => {
			continueFn === null || continueFn === void 0 || continueFn();
			return thenable;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return thenable;
		}
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/removable.js
var _gcTimeout;
var Removable = (_gcTimeout = /* @__PURE__ */ new WeakMap(), class {
	constructor() {
		_classPrivateFieldInitSpec(this, _gcTimeout, void 0);
	}
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout();
		if (isValidTimeout(this.gcTime)) _classPrivateFieldSet2(_gcTimeout, this, timeoutManager.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(newGcTime) {
		this.gcTime = Math.max(this.gcTime || 0, newGcTime !== null && newGcTime !== void 0 ? newGcTime : environmentManager.isServer() ? Infinity : 300 * 1e3);
	}
	clearGcTimeout() {
		if (_classPrivateFieldGet2(_gcTimeout, this) !== void 0) {
			timeoutManager.clearTimeout(_classPrivateFieldGet2(_gcTimeout, this));
			_classPrivateFieldSet2(_gcTimeout, this, void 0);
		}
	}
});
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
	return { onFetch: (context, query) => {
		var _context$fetchOptions, _context$state$data, _context$state$data2;
		const options = context.options;
		const direction = (_context$fetchOptions = context.fetchOptions) === null || _context$fetchOptions === void 0 || (_context$fetchOptions = _context$fetchOptions.meta) === null || _context$fetchOptions === void 0 || (_context$fetchOptions = _context$fetchOptions.fetchMore) === null || _context$fetchOptions === void 0 ? void 0 : _context$fetchOptions.direction;
		const oldPages = ((_context$state$data = context.state.data) === null || _context$state$data === void 0 ? void 0 : _context$state$data.pages) || [];
		const oldPageParams = ((_context$state$data2 = context.state.data) === null || _context$state$data2 === void 0 ? void 0 : _context$state$data2.pageParams) || [];
		let result = {
			pages: [],
			pageParams: []
		};
		let currentPage = 0;
		const fetchFn = async () => {
			let cancelled = false;
			const addSignalProperty = (object) => {
				addConsumeAwareSignal(object, () => context.signal, () => cancelled = true);
			};
			const queryFn = ensureQueryFn(context.options, context.fetchOptions);
			const fetchPage = async (data, param, previous) => {
				if (cancelled) return Promise.reject(context.signal.reason);
				if (param == null && data.pages.length) return Promise.resolve(data);
				const createQueryFnContext = () => {
					const queryFnContext2 = {
						client: context.client,
						queryKey: context.queryKey,
						pageParam: param,
						direction: previous ? "backward" : "forward",
						meta: context.options.meta
					};
					addSignalProperty(queryFnContext2);
					return queryFnContext2;
				};
				const queryFnContext = createQueryFnContext();
				const page = await queryFn(queryFnContext);
				const { maxPages } = context.options;
				const addTo = previous ? addToStart : addToEnd;
				return {
					pages: addTo(data.pages, page, maxPages),
					pageParams: addTo(data.pageParams, param, maxPages)
				};
			};
			if (direction && oldPages.length) {
				const previous = direction === "backward";
				const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
				const oldData = {
					pages: oldPages,
					pageParams: oldPageParams
				};
				result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
			} else {
				const remainingPages = pages !== null && pages !== void 0 ? pages : oldPages.length;
				do {
					var _oldPageParams$;
					const param = currentPage === 0 ? (_oldPageParams$ = oldPageParams[0]) !== null && _oldPageParams$ !== void 0 ? _oldPageParams$ : options.initialPageParam : getNextPageParam(options, result);
					if (currentPage > 0 && param == null) break;
					result = await fetchPage(result, param);
					currentPage++;
				} while (currentPage < remainingPages);
			}
			return result;
		};
		if (context.options.persister) context.fetchFn = () => {
			var _context$options$pers, _context$options;
			return (_context$options$pers = (_context$options = context.options).persister) === null || _context$options$pers === void 0 ? void 0 : _context$options$pers.call(_context$options, fetchFn, {
				client: context.client,
				queryKey: context.queryKey,
				meta: context.options.meta,
				signal: context.signal
			}, query);
		};
		else context.fetchFn = fetchFn;
	} };
}
function getNextPageParam(options, { pages, pageParams }) {
	const lastIndex = pages.length - 1;
	return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
	var _options$getPreviousP;
	return pages.length > 0 ? (_options$getPreviousP = options.getPreviousPageParam) === null || _options$getPreviousP === void 0 ? void 0 : _options$getPreviousP.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/query.js
var _queryType, _initialState, _revertState, _cache, _client$1, _retryer$1, _defaultOptions$1, _abortSignalConsumed, _Class_brand$1;
var Query = (_queryType = /* @__PURE__ */ new WeakMap(), _initialState = /* @__PURE__ */ new WeakMap(), _revertState = /* @__PURE__ */ new WeakMap(), _cache = /* @__PURE__ */ new WeakMap(), _client$1 = /* @__PURE__ */ new WeakMap(), _retryer$1 = /* @__PURE__ */ new WeakMap(), _defaultOptions$1 = /* @__PURE__ */ new WeakMap(), _abortSignalConsumed = /* @__PURE__ */ new WeakMap(), _Class_brand$1 = /* @__PURE__ */ new WeakSet(), class extends Removable {
	constructor(config) {
		var _config$state;
		super();
		_classPrivateMethodInitSpec(this, _Class_brand$1);
		_classPrivateFieldInitSpec(this, _queryType, void 0);
		_classPrivateFieldInitSpec(this, _initialState, void 0);
		_classPrivateFieldInitSpec(this, _revertState, void 0);
		_classPrivateFieldInitSpec(this, _cache, void 0);
		_classPrivateFieldInitSpec(this, _client$1, void 0);
		_classPrivateFieldInitSpec(this, _retryer$1, void 0);
		_classPrivateFieldInitSpec(this, _defaultOptions$1, void 0);
		_classPrivateFieldInitSpec(this, _abortSignalConsumed, void 0);
		_classPrivateFieldSet2(_abortSignalConsumed, this, false);
		_classPrivateFieldSet2(_defaultOptions$1, this, config.defaultOptions);
		this.setOptions(config.options);
		this.observers = [];
		_classPrivateFieldSet2(_client$1, this, config.client);
		_classPrivateFieldSet2(_cache, this, _classPrivateFieldGet2(_client$1, this).getQueryCache());
		this.queryKey = config.queryKey;
		this.queryHash = config.queryHash;
		_classPrivateFieldSet2(_initialState, this, getDefaultState$1(this.options));
		this.state = (_config$state = config.state) !== null && _config$state !== void 0 ? _config$state : _classPrivateFieldGet2(_initialState, this);
		this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return _classPrivateFieldGet2(_queryType, this);
	}
	get promise() {
		var _classPrivateFieldGet2$4;
		return (_classPrivateFieldGet2$4 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet2$4 === void 0 ? void 0 : _classPrivateFieldGet2$4.promise;
	}
	setOptions(options) {
		this.options = {
			..._classPrivateFieldGet2(_defaultOptions$1, this),
			...options
		};
		if (options === null || options === void 0 ? void 0 : options._type) _classPrivateFieldSet2(_queryType, this, options._type);
		this.updateGcTime(this.options.gcTime);
		if (this.state && this.state.data === void 0) {
			const defaultState = getDefaultState$1(this.options);
			if (defaultState.data !== void 0) {
				this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
				_classPrivateFieldSet2(_initialState, this, defaultState);
			}
		}
	}
	optionalRemove() {
		if (!this.observers.length && this.state.fetchStatus === "idle") _classPrivateFieldGet2(_cache, this).remove(this);
	}
	setData(newData, options) {
		const data = replaceData(this.state.data, newData, this.options);
		_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, {
			data,
			type: "success",
			dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt,
			manual: options === null || options === void 0 ? void 0 : options.manual
		});
		return data;
	}
	setState(state) {
		_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, {
			type: "setState",
			state
		});
	}
	cancel(options) {
		var _classPrivateFieldGet3, _classPrivateFieldGet4;
		const promise = (_classPrivateFieldGet3 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.promise;
		(_classPrivateFieldGet4 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet4 === void 0 || _classPrivateFieldGet4.cancel(options);
		return promise ? promise.then(noop).catch(noop) : Promise.resolve();
	}
	destroy() {
		super.destroy();
		this.cancel({ silent: true });
	}
	get resetState() {
		return _classPrivateFieldGet2(_initialState, this);
	}
	reset() {
		this.destroy();
		this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((observer) => resolveQueryBoolean(observer.options.enabled, this) !== false);
	}
	isDisabled() {
		if (this.getObserversCount() > 0) return !this.isActive();
		return this.options.queryFn === skipToken || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
		return false;
	}
	isStale() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
		return this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(staleTime = 0) {
		if (this.state.data === void 0) return true;
		if (staleTime === "static") return false;
		if (this.state.isInvalidated) return true;
		return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
	}
	onFocus() {
		var _classPrivateFieldGet5;
		const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
		observer === null || observer === void 0 || observer.refetch({ cancelRefetch: false });
		(_classPrivateFieldGet5 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet5 === void 0 || _classPrivateFieldGet5.continue();
	}
	onOnline() {
		var _classPrivateFieldGet6;
		const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
		observer === null || observer === void 0 || observer.refetch({ cancelRefetch: false });
		(_classPrivateFieldGet6 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet6 === void 0 || _classPrivateFieldGet6.continue();
	}
	addObserver(observer) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			this.clearGcTimeout();
			_classPrivateFieldGet2(_cache, this).notify({
				type: "observerAdded",
				query: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		if (this.observers.includes(observer)) {
			this.observers = this.observers.filter((x) => x !== observer);
			if (!this.observers.length) {
				if (_classPrivateFieldGet2(_retryer$1, this)) if (_classPrivateFieldGet2(_abortSignalConsumed, this) || _assertClassBrand(_Class_brand$1, this, _isInitialPausedFetch).call(this)) _classPrivateFieldGet2(_retryer$1, this).cancel({ revert: true });
				else _classPrivateFieldGet2(_retryer$1, this).cancelRetry();
				this.scheduleGc();
			}
			_classPrivateFieldGet2(_cache, this).notify({
				type: "observerRemoved",
				query: this,
				observer
			});
		}
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		if (!this.state.isInvalidated) _assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, { type: "invalidate" });
	}
	async fetch(options, fetchOptions) {
		var _classPrivateFieldGet7, _context$fetchOptions;
		if (this.state.fetchStatus !== "idle" && ((_classPrivateFieldGet7 = _classPrivateFieldGet2(_retryer$1, this)) === null || _classPrivateFieldGet7 === void 0 ? void 0 : _classPrivateFieldGet7.status()) !== "rejected") {
			if (this.state.data !== void 0 && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)) this.cancel({ silent: true });
			else if (_classPrivateFieldGet2(_retryer$1, this)) {
				_classPrivateFieldGet2(_retryer$1, this).continueRetry();
				return _classPrivateFieldGet2(_retryer$1, this).promise;
			}
		}
		if (options) this.setOptions(options);
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) this.setOptions(observer.options);
		}
		const abortController = new AbortController();
		const addSignalProperty = (object) => {
			Object.defineProperty(object, "signal", {
				enumerable: true,
				get: () => {
					_classPrivateFieldSet2(_abortSignalConsumed, this, true);
					return abortController.signal;
				}
			});
		};
		const fetchFn = () => {
			const queryFn = ensureQueryFn(this.options, fetchOptions);
			const createQueryFnContext = () => {
				const queryFnContext2 = {
					client: _classPrivateFieldGet2(_client$1, this),
					queryKey: this.queryKey,
					meta: this.meta
				};
				addSignalProperty(queryFnContext2);
				return queryFnContext2;
			};
			const queryFnContext = createQueryFnContext();
			_classPrivateFieldSet2(_abortSignalConsumed, this, false);
			if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
			return queryFn(queryFnContext);
		};
		const createFetchContext = () => {
			const context2 = {
				fetchOptions,
				options: this.options,
				queryKey: this.queryKey,
				client: _classPrivateFieldGet2(_client$1, this),
				state: this.state,
				fetchFn
			};
			addSignalProperty(context2);
			return context2;
		};
		const context = createFetchContext();
		const behavior = _classPrivateFieldGet2(_queryType, this) === "infinite" ? infiniteQueryBehavior(this.options.pages) : this.options.behavior;
		behavior === null || behavior === void 0 || behavior.onFetch(context, this);
		_classPrivateFieldSet2(_revertState, this, this.state);
		if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) === null || _context$fetchOptions === void 0 ? void 0 : _context$fetchOptions.meta)) {
			var _context$fetchOptions2;
			_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, {
				type: "fetch",
				meta: (_context$fetchOptions2 = context.fetchOptions) === null || _context$fetchOptions2 === void 0 ? void 0 : _context$fetchOptions2.meta
			});
		}
		_classPrivateFieldSet2(_retryer$1, this, createRetryer({
			initialPromise: fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise,
			fn: context.fetchFn,
			onCancel: (error) => {
				if (error instanceof CancelledError && error.revert) this.setState({
					..._classPrivateFieldGet2(_revertState, this),
					fetchStatus: "idle"
				});
				abortController.abort();
			},
			onFail: (failureCount, error) => {
				_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, {
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, { type: "pause" });
			},
			onContinue: () => {
				_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, { type: "continue" });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay,
			networkMode: context.options.networkMode,
			canRun: () => true
		}));
		try {
			var _classPrivateFieldGet8, _classPrivateFieldGet9, _classPrivateFieldGet10, _classPrivateFieldGet11;
			const data = await _classPrivateFieldGet2(_retryer$1, this).start();
			if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
			this.setData(data);
			(_classPrivateFieldGet8 = (_classPrivateFieldGet9 = _classPrivateFieldGet2(_cache, this).config).onSuccess) === null || _classPrivateFieldGet8 === void 0 || _classPrivateFieldGet8.call(_classPrivateFieldGet9, data, this);
			(_classPrivateFieldGet10 = (_classPrivateFieldGet11 = _classPrivateFieldGet2(_cache, this).config).onSettled) === null || _classPrivateFieldGet10 === void 0 || _classPrivateFieldGet10.call(_classPrivateFieldGet11, data, this.state.error, this);
			return data;
		} catch (error) {
			var _classPrivateFieldGet12, _classPrivateFieldGet13, _classPrivateFieldGet14, _classPrivateFieldGet15;
			if (error instanceof CancelledError) {
				if (error.silent) return _classPrivateFieldGet2(_retryer$1, this).promise;
				else if (error.revert) {
					if (this.state.data === void 0) throw error;
					return this.state.data;
				}
			}
			_assertClassBrand(_Class_brand$1, this, _dispatch$1).call(this, {
				type: "error",
				error
			});
			(_classPrivateFieldGet12 = (_classPrivateFieldGet13 = _classPrivateFieldGet2(_cache, this).config).onError) === null || _classPrivateFieldGet12 === void 0 || _classPrivateFieldGet12.call(_classPrivateFieldGet13, error, this);
			(_classPrivateFieldGet14 = (_classPrivateFieldGet15 = _classPrivateFieldGet2(_cache, this).config).onSettled) === null || _classPrivateFieldGet14 === void 0 || _classPrivateFieldGet14.call(_classPrivateFieldGet15, this.state.data, error, this);
			throw error;
		} finally {
			this.scheduleGc();
		}
	}
});
function _isInitialPausedFetch() {
	return this.state.fetchStatus === "paused" && this.state.status === "pending";
}
function _dispatch$1(action) {
	const reducer = (state) => {
		switch (action.type) {
			case "failed": return {
				...state,
				fetchFailureCount: action.failureCount,
				fetchFailureReason: action.error
			};
			case "pause": return {
				...state,
				fetchStatus: "paused"
			};
			case "continue": return {
				...state,
				fetchStatus: "fetching"
			};
			case "fetch":
				var _action$meta;
				return {
					...state,
					...fetchState(state.data, this.options),
					fetchMeta: (_action$meta = action.meta) !== null && _action$meta !== void 0 ? _action$meta : null
				};
			case "success":
				const newState = {
					...state,
					...successState(action.data, action.dataUpdatedAt),
					dataUpdateCount: state.dataUpdateCount + 1,
					...!action.manual && {
						fetchStatus: "idle",
						fetchFailureCount: 0,
						fetchFailureReason: null
					}
				};
				_classPrivateFieldSet2(_revertState, this, action.manual ? newState : void 0);
				return newState;
			case "error":
				const error = action.error;
				return {
					...state,
					error,
					errorUpdateCount: state.errorUpdateCount + 1,
					errorUpdatedAt: Date.now(),
					fetchFailureCount: state.fetchFailureCount + 1,
					fetchFailureReason: error,
					fetchStatus: "idle",
					status: "error",
					isInvalidated: true
				};
			case "invalidate": return {
				...state,
				isInvalidated: true
			};
			case "setState": return {
				...state,
				...action.state
			};
		}
	};
	this.state = reducer(this.state);
	notifyManager.batch(() => {
		this.observers.forEach((observer) => {
			observer.onQueryUpdate();
		});
		_classPrivateFieldGet2(_cache, this).notify({
			query: this,
			type: "updated",
			action
		});
	});
}
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
		...data === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt !== null && dataUpdatedAt !== void 0 ? dataUpdatedAt : Date.now(),
		error: null,
		isInvalidated: false,
		status: "success"
	};
}
function getDefaultState$1(options) {
	const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0 ? initialDataUpdatedAt : Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutation.js
var _client, _observers, _mutationCache$1, _retryer, _Class_brand;
var Mutation = (_client = /* @__PURE__ */ new WeakMap(), _observers = /* @__PURE__ */ new WeakMap(), _mutationCache$1 = /* @__PURE__ */ new WeakMap(), _retryer = /* @__PURE__ */ new WeakMap(), _Class_brand = /* @__PURE__ */ new WeakSet(), class extends Removable {
	constructor(config) {
		super();
		_classPrivateMethodInitSpec(this, _Class_brand);
		_classPrivateFieldInitSpec(this, _client, void 0);
		_classPrivateFieldInitSpec(this, _observers, void 0);
		_classPrivateFieldInitSpec(this, _mutationCache$1, void 0);
		_classPrivateFieldInitSpec(this, _retryer, void 0);
		_classPrivateFieldSet2(_client, this, config.client);
		this.mutationId = config.mutationId;
		_classPrivateFieldSet2(_mutationCache$1, this, config.mutationCache);
		_classPrivateFieldSet2(_observers, this, []);
		this.state = config.state || getDefaultState();
		this.setOptions(config.options);
		this.scheduleGc();
	}
	setOptions(options) {
		this.options = options;
		this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(observer) {
		if (!_classPrivateFieldGet2(_observers, this).includes(observer)) {
			_classPrivateFieldGet2(_observers, this).push(observer);
			this.clearGcTimeout();
			_classPrivateFieldGet2(_mutationCache$1, this).notify({
				type: "observerAdded",
				mutation: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		_classPrivateFieldSet2(_observers, this, _classPrivateFieldGet2(_observers, this).filter((x) => x !== observer));
		this.scheduleGc();
		_classPrivateFieldGet2(_mutationCache$1, this).notify({
			type: "observerRemoved",
			mutation: this,
			observer
		});
	}
	optionalRemove() {
		if (!_classPrivateFieldGet2(_observers, this).length) if (this.state.status === "pending") this.scheduleGc();
		else _classPrivateFieldGet2(_mutationCache$1, this).remove(this);
	}
	continue() {
		var _this$retryer$continu, _classPrivateFieldGet2$3;
		return (_this$retryer$continu = (_classPrivateFieldGet2$3 = _classPrivateFieldGet2(_retryer, this)) === null || _classPrivateFieldGet2$3 === void 0 ? void 0 : _classPrivateFieldGet2$3.continue()) !== null && _this$retryer$continu !== void 0 ? _this$retryer$continu : this.execute(this.state.variables);
	}
	async execute(variables) {
		var _this$options$retry;
		const onContinue = () => {
			_assertClassBrand(_Class_brand, this, _dispatch).call(this, { type: "continue" });
		};
		const mutationFnContext = {
			client: _classPrivateFieldGet2(_client, this),
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		_classPrivateFieldSet2(_retryer, this, createRetryer({
			fn: () => {
				if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
				return this.options.mutationFn(variables, mutationFnContext);
			},
			onFail: (failureCount, error) => {
				_assertClassBrand(_Class_brand, this, _dispatch).call(this, {
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				_assertClassBrand(_Class_brand, this, _dispatch).call(this, { type: "pause" });
			},
			onContinue,
			retry: (_this$options$retry = this.options.retry) !== null && _this$options$retry !== void 0 ? _this$options$retry : 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => _classPrivateFieldGet2(_mutationCache$1, this).canRun(this)
		}));
		const restored = this.state.status === "pending";
		const isPaused = !_classPrivateFieldGet2(_retryer, this).canStart();
		try {
			var _classPrivateFieldGet3, _classPrivateFieldGet4, _this$options$onSucce, _this$options2, _classPrivateFieldGet5, _classPrivateFieldGet6, _this$options$onSettl, _this$options3;
			if (restored) onContinue();
			else {
				var _this$options$onMutat, _this$options;
				_assertClassBrand(_Class_brand, this, _dispatch).call(this, {
					type: "pending",
					variables,
					isPaused
				});
				if (_classPrivateFieldGet2(_mutationCache$1, this).config.onMutate) await _classPrivateFieldGet2(_mutationCache$1, this).config.onMutate(variables, this, mutationFnContext);
				const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) === null || _this$options$onMutat === void 0 ? void 0 : _this$options$onMutat.call(_this$options, variables, mutationFnContext));
				if (context !== this.state.context) _assertClassBrand(_Class_brand, this, _dispatch).call(this, {
					type: "pending",
					context,
					variables,
					isPaused
				});
			}
			const data = await _classPrivateFieldGet2(_retryer, this).start();
			await ((_classPrivateFieldGet3 = (_classPrivateFieldGet4 = _classPrivateFieldGet2(_mutationCache$1, this).config).onSuccess) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.call(_classPrivateFieldGet4, data, variables, this.state.context, this, mutationFnContext));
			await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) === null || _this$options$onSucce === void 0 ? void 0 : _this$options$onSucce.call(_this$options2, data, variables, this.state.context, mutationFnContext));
			await ((_classPrivateFieldGet5 = (_classPrivateFieldGet6 = _classPrivateFieldGet2(_mutationCache$1, this).config).onSettled) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.call(_classPrivateFieldGet6, data, null, this.state.variables, this.state.context, this, mutationFnContext));
			await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) === null || _this$options$onSettl === void 0 ? void 0 : _this$options$onSettl.call(_this$options3, data, null, variables, this.state.context, mutationFnContext));
			_assertClassBrand(_Class_brand, this, _dispatch).call(this, {
				type: "success",
				data
			});
			return data;
		} catch (error) {
			try {
				var _classPrivateFieldGet7, _classPrivateFieldGet8;
				await ((_classPrivateFieldGet7 = (_classPrivateFieldGet8 = _classPrivateFieldGet2(_mutationCache$1, this).config).onError) === null || _classPrivateFieldGet7 === void 0 ? void 0 : _classPrivateFieldGet7.call(_classPrivateFieldGet8, error, variables, this.state.context, this, mutationFnContext));
			} catch (e) {
				Promise.reject(e);
			}
			try {
				var _this$options$onError, _this$options4;
				await ((_this$options$onError = (_this$options4 = this.options).onError) === null || _this$options$onError === void 0 ? void 0 : _this$options$onError.call(_this$options4, error, variables, this.state.context, mutationFnContext));
			} catch (e) {
				Promise.reject(e);
			}
			try {
				var _classPrivateFieldGet9, _classPrivateFieldGet10;
				await ((_classPrivateFieldGet9 = (_classPrivateFieldGet10 = _classPrivateFieldGet2(_mutationCache$1, this).config).onSettled) === null || _classPrivateFieldGet9 === void 0 ? void 0 : _classPrivateFieldGet9.call(_classPrivateFieldGet10, void 0, error, this.state.variables, this.state.context, this, mutationFnContext));
			} catch (e) {
				Promise.reject(e);
			}
			try {
				var _this$options$onSettl2, _this$options5;
				await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) === null || _this$options$onSettl2 === void 0 ? void 0 : _this$options$onSettl2.call(_this$options5, void 0, error, variables, this.state.context, mutationFnContext));
			} catch (e) {
				Promise.reject(e);
			}
			_assertClassBrand(_Class_brand, this, _dispatch).call(this, {
				type: "error",
				error
			});
			throw error;
		} finally {
			_classPrivateFieldGet2(_mutationCache$1, this).runNext(this);
		}
	}
});
function _dispatch(action) {
	const reducer = (state) => {
		switch (action.type) {
			case "failed": return {
				...state,
				failureCount: action.failureCount,
				failureReason: action.error
			};
			case "pause": return {
				...state,
				isPaused: true
			};
			case "continue": return {
				...state,
				isPaused: false
			};
			case "pending": return {
				...state,
				context: action.context,
				data: void 0,
				failureCount: 0,
				failureReason: null,
				error: null,
				isPaused: action.isPaused,
				status: "pending",
				variables: action.variables,
				submittedAt: Date.now()
			};
			case "success": return {
				...state,
				data: action.data,
				failureCount: 0,
				failureReason: null,
				error: null,
				status: "success",
				isPaused: false
			};
			case "error": return {
				...state,
				data: void 0,
				error: action.error,
				failureCount: state.failureCount + 1,
				failureReason: action.error,
				isPaused: false,
				status: "error"
			};
		}
	};
	this.state = reducer(this.state);
	notifyManager.batch(() => {
		_classPrivateFieldGet2(_observers, this).forEach((observer) => {
			observer.onMutationUpdate(action);
		});
		_classPrivateFieldGet2(_mutationCache$1, this).notify({
			mutation: this,
			type: "updated",
			action
		});
	});
}
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutationCache.js
var _mutations, _scopes, _mutationId;
var MutationCache = (_mutations = /* @__PURE__ */ new WeakMap(), _scopes = /* @__PURE__ */ new WeakMap(), _mutationId = /* @__PURE__ */ new WeakMap(), class extends Subscribable {
	constructor(config = {}) {
		super();
		_classPrivateFieldInitSpec(this, _mutations, void 0);
		_classPrivateFieldInitSpec(this, _scopes, void 0);
		_classPrivateFieldInitSpec(this, _mutationId, void 0);
		this.config = config;
		_classPrivateFieldSet2(_mutations, this, /* @__PURE__ */ new Set());
		_classPrivateFieldSet2(_scopes, this, /* @__PURE__ */ new Map());
		_classPrivateFieldSet2(_mutationId, this, 0);
	}
	build(client, options, state) {
		var _this$mutationId;
		const mutation = new Mutation({
			client,
			mutationCache: this,
			mutationId: _classPrivateFieldSet2(_mutationId, this, (_this$mutationId = _classPrivateFieldGet2(_mutationId, this), ++_this$mutationId)),
			options: client.defaultMutationOptions(options),
			state
		});
		this.add(mutation);
		return mutation;
	}
	add(mutation) {
		_classPrivateFieldGet2(_mutations, this).add(mutation);
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const scopedMutations = _classPrivateFieldGet2(_scopes, this).get(scope);
			if (scopedMutations) scopedMutations.push(mutation);
			else _classPrivateFieldGet2(_scopes, this).set(scope, [mutation]);
		}
		this.notify({
			type: "added",
			mutation
		});
	}
	remove(mutation) {
		if (_classPrivateFieldGet2(_mutations, this).delete(mutation)) {
			const scope = scopeFor(mutation);
			if (typeof scope === "string") {
				const scopedMutations = _classPrivateFieldGet2(_scopes, this).get(scope);
				if (scopedMutations) {
					if (scopedMutations.length > 1) {
						const index = scopedMutations.indexOf(mutation);
						if (index !== -1) scopedMutations.splice(index, 1);
					} else if (scopedMutations[0] === mutation) _classPrivateFieldGet2(_scopes, this).delete(scope);
				}
			}
		}
		this.notify({
			type: "removed",
			mutation
		});
	}
	canRun(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const mutationsWithSameScope = _classPrivateFieldGet2(_scopes, this).get(scope);
			const firstPendingMutation = mutationsWithSameScope === null || mutationsWithSameScope === void 0 ? void 0 : mutationsWithSameScope.find((m) => m.state.status === "pending");
			return !firstPendingMutation || firstPendingMutation === mutation;
		} else return true;
	}
	runNext(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			var _classPrivateFieldGet2$2, _foundMutation$contin;
			const foundMutation = (_classPrivateFieldGet2$2 = _classPrivateFieldGet2(_scopes, this).get(scope)) === null || _classPrivateFieldGet2$2 === void 0 ? void 0 : _classPrivateFieldGet2$2.find((m) => m !== mutation && m.state.isPaused);
			return (_foundMutation$contin = foundMutation === null || foundMutation === void 0 ? void 0 : foundMutation.continue()) !== null && _foundMutation$contin !== void 0 ? _foundMutation$contin : Promise.resolve();
		} else return Promise.resolve();
	}
	clear() {
		notifyManager.batch(() => {
			_classPrivateFieldGet2(_mutations, this).forEach((mutation) => {
				this.notify({
					type: "removed",
					mutation
				});
			});
			_classPrivateFieldGet2(_mutations, this).clear();
			_classPrivateFieldGet2(_scopes, this).clear();
		});
	}
	getAll() {
		return Array.from(_classPrivateFieldGet2(_mutations, this));
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
	}
	findAll(filters = {}) {
		return this.getAll().filter((mutation) => matchMutation(filters, mutation));
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	resumePausedMutations() {
		const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
		return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
	}
});
function scopeFor(mutation) {
	var _mutation$options$sco;
	return (_mutation$options$sco = mutation.options.scope) === null || _mutation$options$sco === void 0 ? void 0 : _mutation$options$sco.id;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryCache.js
var _queries;
var QueryCache = (_queries = /* @__PURE__ */ new WeakMap(), class extends Subscribable {
	constructor(config = {}) {
		super();
		_classPrivateFieldInitSpec(this, _queries, void 0);
		this.config = config;
		_classPrivateFieldSet2(_queries, this, /* @__PURE__ */ new Map());
	}
	build(client, options, state) {
		var _options$queryHash;
		const queryKey = options.queryKey;
		const queryHash = (_options$queryHash = options.queryHash) !== null && _options$queryHash !== void 0 ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
		let query = this.get(queryHash);
		if (!query) {
			query = new Query({
				client,
				queryKey,
				queryHash,
				options: client.defaultQueryOptions(options),
				state,
				defaultOptions: client.getQueryDefaults(queryKey)
			});
			this.add(query);
		}
		return query;
	}
	add(query) {
		if (!_classPrivateFieldGet2(_queries, this).has(query.queryHash)) {
			_classPrivateFieldGet2(_queries, this).set(query.queryHash, query);
			this.notify({
				type: "added",
				query
			});
		}
	}
	remove(query) {
		const queryInMap = _classPrivateFieldGet2(_queries, this).get(query.queryHash);
		if (queryInMap) {
			query.destroy();
			if (queryInMap === query) _classPrivateFieldGet2(_queries, this).delete(query.queryHash);
			this.notify({
				type: "removed",
				query
			});
		}
	}
	clear() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				this.remove(query);
			});
		});
	}
	get(queryHash) {
		return _classPrivateFieldGet2(_queries, this).get(queryHash);
	}
	getAll() {
		return [..._classPrivateFieldGet2(_queries, this).values()];
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((query) => matchQuery(defaultedFilters, query));
	}
	findAll(filters = {}) {
		const queries = this.getAll();
		return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	onFocus() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onFocus();
			});
		});
	}
	onOnline() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onOnline();
			});
		});
	}
});
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryClient.js
var _queryCache, _mutationCache, _defaultOptions, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline;
var QueryClient = (_queryCache = /* @__PURE__ */ new WeakMap(), _mutationCache = /* @__PURE__ */ new WeakMap(), _defaultOptions = /* @__PURE__ */ new WeakMap(), _queryDefaults = /* @__PURE__ */ new WeakMap(), _mutationDefaults = /* @__PURE__ */ new WeakMap(), _mountCount = /* @__PURE__ */ new WeakMap(), _unsubscribeFocus = /* @__PURE__ */ new WeakMap(), _unsubscribeOnline = /* @__PURE__ */ new WeakMap(), class {
	constructor(config = {}) {
		_classPrivateFieldInitSpec(this, _queryCache, void 0);
		_classPrivateFieldInitSpec(this, _mutationCache, void 0);
		_classPrivateFieldInitSpec(this, _defaultOptions, void 0);
		_classPrivateFieldInitSpec(this, _queryDefaults, void 0);
		_classPrivateFieldInitSpec(this, _mutationDefaults, void 0);
		_classPrivateFieldInitSpec(this, _mountCount, void 0);
		_classPrivateFieldInitSpec(this, _unsubscribeFocus, void 0);
		_classPrivateFieldInitSpec(this, _unsubscribeOnline, void 0);
		_classPrivateFieldSet2(_queryCache, this, config.queryCache || new QueryCache());
		_classPrivateFieldSet2(_mutationCache, this, config.mutationCache || new MutationCache());
		_classPrivateFieldSet2(_defaultOptions, this, config.defaultOptions || {});
		_classPrivateFieldSet2(_queryDefaults, this, /* @__PURE__ */ new Map());
		_classPrivateFieldSet2(_mutationDefaults, this, /* @__PURE__ */ new Map());
		_classPrivateFieldSet2(_mountCount, this, 0);
	}
	mount() {
		var _this$mountCount;
		_classPrivateFieldSet2(_mountCount, this, (_this$mountCount = _classPrivateFieldGet2(_mountCount, this), _this$mountCount++, _this$mountCount));
		if (_classPrivateFieldGet2(_mountCount, this) !== 1) return;
		_classPrivateFieldSet2(_unsubscribeFocus, this, focusManager.subscribe(async (focused) => {
			if (focused) {
				await this.resumePausedMutations();
				_classPrivateFieldGet2(_queryCache, this).onFocus();
			}
		}));
		_classPrivateFieldSet2(_unsubscribeOnline, this, onlineManager.subscribe(async (online) => {
			if (online) {
				await this.resumePausedMutations();
				_classPrivateFieldGet2(_queryCache, this).onOnline();
			}
		}));
	}
	unmount() {
		var _this$mountCount3, _classPrivateFieldGet2$1, _classPrivateFieldGet3;
		_classPrivateFieldSet2(_mountCount, this, (_this$mountCount3 = _classPrivateFieldGet2(_mountCount, this), _this$mountCount3--, _this$mountCount3));
		if (_classPrivateFieldGet2(_mountCount, this) !== 0) return;
		(_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_unsubscribeFocus, this)) === null || _classPrivateFieldGet2$1 === void 0 || _classPrivateFieldGet2$1.call(this);
		_classPrivateFieldSet2(_unsubscribeFocus, this, void 0);
		(_classPrivateFieldGet3 = _classPrivateFieldGet2(_unsubscribeOnline, this)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.call(this);
		_classPrivateFieldSet2(_unsubscribeOnline, this, void 0);
	}
	isFetching(filters) {
		return _classPrivateFieldGet2(_queryCache, this).findAll({
			...filters,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(filters) {
		return _classPrivateFieldGet2(_mutationCache, this).findAll({
			...filters,
			status: "pending"
		}).length;
	}
	/**
	* Imperative (non-reactive) way to retrieve data for a QueryKey.
	* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
	*
	* Hint: Do not use this function inside a component, because it won't receive updates.
	* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
	*/
	getQueryData(queryKey) {
		var _classPrivateFieldGet4;
		const options = this.defaultQueryOptions({ queryKey });
		return (_classPrivateFieldGet4 = _classPrivateFieldGet2(_queryCache, this).get(options.queryHash)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.state.data;
	}
	ensureQueryData(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		const query = _classPrivateFieldGet2(_queryCache, this).build(this, defaultedOptions);
		const cachedData = query.state.data;
		if (cachedData === void 0) return this.fetchQuery(options);
		if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
		return Promise.resolve(cachedData);
	}
	getQueriesData(filters) {
		return _classPrivateFieldGet2(_queryCache, this).findAll(filters).map(({ queryKey, state }) => {
			return [queryKey, state.data];
		});
	}
	setQueryData(queryKey, updater, options) {
		const defaultedOptions = this.defaultQueryOptions({ queryKey });
		const query = _classPrivateFieldGet2(_queryCache, this).get(defaultedOptions.queryHash);
		const data = functionalUpdate(updater, query === null || query === void 0 ? void 0 : query.state.data);
		if (data === void 0) return;
		return _classPrivateFieldGet2(_queryCache, this).build(this, defaultedOptions).setData(data, {
			...options,
			manual: true
		});
	}
	setQueriesData(filters, updater, options) {
		return notifyManager.batch(() => _classPrivateFieldGet2(_queryCache, this).findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
	}
	getQueryState(queryKey) {
		var _classPrivateFieldGet5;
		const options = this.defaultQueryOptions({ queryKey });
		return (_classPrivateFieldGet5 = _classPrivateFieldGet2(_queryCache, this).get(options.queryHash)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.state;
	}
	removeQueries(filters) {
		const queryCache = _classPrivateFieldGet2(_queryCache, this);
		notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				queryCache.remove(query);
			});
		});
	}
	resetQueries(filters, options) {
		const queryCache = _classPrivateFieldGet2(_queryCache, this);
		return notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				query.reset();
			});
			return this.refetchQueries({
				type: "active",
				...filters
			}, options);
		});
	}
	cancelQueries(filters, cancelOptions = {}) {
		const defaultedCancelOptions = {
			revert: true,
			...cancelOptions
		};
		const promises = notifyManager.batch(() => _classPrivateFieldGet2(_queryCache, this).findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
		return Promise.all(promises).then(noop).catch(noop);
	}
	invalidateQueries(filters, options = {}) {
		return notifyManager.batch(() => {
			var _ref, _filters$refetchType;
			_classPrivateFieldGet2(_queryCache, this).findAll(filters).forEach((query) => {
				query.invalidate();
			});
			if ((filters === null || filters === void 0 ? void 0 : filters.refetchType) === "none") return Promise.resolve();
			return this.refetchQueries({
				...filters,
				type: (_ref = (_filters$refetchType = filters === null || filters === void 0 ? void 0 : filters.refetchType) !== null && _filters$refetchType !== void 0 ? _filters$refetchType : filters === null || filters === void 0 ? void 0 : filters.type) !== null && _ref !== void 0 ? _ref : "active"
			}, options);
		});
	}
	refetchQueries(filters, options = {}) {
		var _options$cancelRefetc;
		const fetchOptions = {
			...options,
			cancelRefetch: (_options$cancelRefetc = options.cancelRefetch) !== null && _options$cancelRefetc !== void 0 ? _options$cancelRefetc : true
		};
		const promises = notifyManager.batch(() => _classPrivateFieldGet2(_queryCache, this).findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
			let promise = query.fetch(void 0, fetchOptions);
			if (!fetchOptions.throwOnError) promise = promise.catch(noop);
			return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
		}));
		return Promise.all(promises).then(noop);
	}
	fetchQuery(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
		const query = _classPrivateFieldGet2(_queryCache, this).build(this, defaultedOptions);
		return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
	}
	prefetchQuery(options) {
		return this.fetchQuery(options).then(noop).catch(noop);
	}
	fetchInfiniteQuery(options) {
		options._type = "infinite";
		return this.fetchQuery(options);
	}
	prefetchInfiniteQuery(options) {
		return this.fetchInfiniteQuery(options).then(noop).catch(noop);
	}
	ensureInfiniteQueryData(options) {
		options._type = "infinite";
		return this.ensureQueryData(options);
	}
	resumePausedMutations() {
		if (onlineManager.isOnline()) return _classPrivateFieldGet2(_mutationCache, this).resumePausedMutations();
		return Promise.resolve();
	}
	getQueryCache() {
		return _classPrivateFieldGet2(_queryCache, this);
	}
	getMutationCache() {
		return _classPrivateFieldGet2(_mutationCache, this);
	}
	getDefaultOptions() {
		return _classPrivateFieldGet2(_defaultOptions, this);
	}
	setDefaultOptions(options) {
		_classPrivateFieldSet2(_defaultOptions, this, options);
	}
	setQueryDefaults(queryKey, options) {
		_classPrivateFieldGet2(_queryDefaults, this).set(hashKey(queryKey), {
			queryKey,
			defaultOptions: options
		});
	}
	getQueryDefaults(queryKey) {
		const defaults = [..._classPrivateFieldGet2(_queryDefaults, this).values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	setMutationDefaults(mutationKey, options) {
		_classPrivateFieldGet2(_mutationDefaults, this).set(hashKey(mutationKey), {
			mutationKey,
			defaultOptions: options
		});
	}
	getMutationDefaults(mutationKey) {
		const defaults = [..._classPrivateFieldGet2(_mutationDefaults, this).values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	defaultQueryOptions(options) {
		if (options._defaulted) return options;
		const defaultedOptions = {
			..._classPrivateFieldGet2(_defaultOptions, this).queries,
			...this.getQueryDefaults(options.queryKey),
			...options,
			_defaulted: true
		};
		if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
		if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
		if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
		if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
		if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
		return defaultedOptions;
	}
	defaultMutationOptions(options) {
		if (options === null || options === void 0 ? void 0 : options._defaulted) return options;
		return {
			..._classPrivateFieldGet2(_defaultOptions, this).mutations,
			...(options === null || options === void 0 ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
			...options,
			_defaulted: true
		};
	}
	clear() {
		_classPrivateFieldGet2(_queryCache, this).clear();
		_classPrivateFieldGet2(_mutationCache, this).clear();
	}
});
//#endregion
export { _classPrivateFieldInitSpec as a, _assertClassBrand as i, _classPrivateFieldGet2 as n, _classPrivateMethodInitSpec as o, _classPrivateFieldSet2 as r, QueryClient as t };
