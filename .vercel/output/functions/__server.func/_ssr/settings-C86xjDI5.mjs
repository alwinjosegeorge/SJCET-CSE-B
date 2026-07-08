import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Bell, d as Moon, h as Heart, i as Trophy, l as RotateCcw, o as Sun, p as Info, t as X, u as Palette, v as CodeXml, w as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-BTcutmU8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-C86xjDI5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SecretGames({ onClose }) {
	const [mode, setMode] = (0, import_react.useState)("menu");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-background text-ink animate-slide-up pb-[env(safe-area-inset-bottom)] pt-[max(env(safe-area-inset-top),1.25rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "px-5 py-4 border-b border-border/60 flex items-center justify-between bg-surface/90 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [mode !== "menu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMode("menu"),
					className: "grid h-9 w-9 place-items-center rounded-xl bg-muted text-ink hover:bg-border/40 transition active:scale-[0.9]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4.5 w-4.5",
						strokeWidth: 2.4
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-lg font-bold flex items-center gap-1.5 leading-none",
					children: [
						mode === "menu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Arcade Zone 👾" }),
						mode === "tictactoe" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Panda vs Robot 🧸" }),
						mode === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Emoji Match 🃏" }),
						mode === "scramble" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Campus Guess 🧠" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] font-semibold text-ink-soft mt-0.5 leading-none",
					children: [
						mode === "menu" && "Secret campus arcade. Shhh! 🤫",
						mode === "tictactoe" && "Tic Tac Toe against AI bot",
						mode === "memory" && "Find matching emoji pairs",
						mode === "scramble" && "Unscramble CSE-B words"
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "grid h-9 w-9 place-items-center rounded-full bg-muted text-ink-soft hover:text-ink transition active:scale-[0.9]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 overflow-y-auto p-5 no-scrollbar",
			children: [
				mode === "menu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameMenu, { onSelectGame: setMode }),
				mode === "tictactoe" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicTacToe, {}),
				mode === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryGame, {}),
				mode === "scramble" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordScramble, {})
			]
		})]
	});
}
function GameMenu({ onSelectGame }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-indigo-deep p-5 text-white relative overflow-hidden shadow-lg mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-dots opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
							children: "Unlocked 🔑"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-extrabold mt-3 leading-tight",
							children: "Lecture Hall Boring? 😴"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/80 mt-1 leading-relaxed",
							children: "Here are some quick, cute offline games to keep you awake. Just don't get caught by teachers! 👨‍🏫🤫"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						id: "tictactoe",
						title: "Panda vs Robot",
						desc: "Play Tic Tac Toe against an AI Bot in your boring class!",
						emoji: "🤖🧸",
						color: "bg-blush"
					},
					{
						id: "memory",
						title: "Emoji Match",
						desc: "Test your memory limit by pairing cute campus emojis!",
						emoji: "🃏🧠",
						color: "bg-mint"
					},
					{
						id: "scramble",
						title: "Campus Word Guess",
						desc: "Unscramble campus & teacher names from SJCET!",
						emoji: "🏫📝",
						color: "bg-butter"
					}
				].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onSelectGame(g.id),
					className: "w-full flex items-center gap-4 rounded-3xl border border-border/60 bg-surface p-4 text-left hover:border-indigo/25 transition active:scale-[0.99]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${g.color} text-2xl`,
						children: g.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-sm font-bold text-ink",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink-soft mt-0.5 leading-tight",
							children: g.desc
						})]
					})]
				}, g.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-[10px] font-bold uppercase text-ink-soft/40 mt-8 tracking-wider flex items-center justify-center gap-1",
				children: [
					"Made with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-blush fill-blush animate-pulse" }),
					" for SJCET CSE-B"
				]
			})
		]
	});
}
function TicTacToe() {
	const [board, setBoard] = (0, import_react.useState)(Array(9).fill(null));
	const [isPlayerTurn, setIsPlayerTurn] = (0, import_react.useState)(true);
	const [winner, setWinner] = (0, import_react.useState)(null);
	const [winningLine, setWinningLine] = (0, import_react.useState)(null);
	const P_SYMBOL = "🧸";
	const B_SYMBOL = "🤖";
	const winPatterns = [
		[
			0,
			1,
			2
		],
		[
			3,
			4,
			5
		],
		[
			6,
			7,
			8
		],
		[
			0,
			3,
			6
		],
		[
			1,
			4,
			7
		],
		[
			2,
			5,
			8
		],
		[
			0,
			4,
			8
		],
		[
			2,
			4,
			6
		]
	];
	const checkWinner = (grid) => {
		for (const pattern of winPatterns) {
			const [a, b, c] = pattern;
			if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) return {
				winner: grid[a],
				line: pattern
			};
		}
		if (grid.every((cell) => cell !== null)) return {
			winner: "Draw",
			line: null
		};
		return null;
	};
	const handleCellClick = (index) => {
		if (board[index] || winner || !isPlayerTurn) return;
		const nextBoard = [...board];
		nextBoard[index] = P_SYMBOL;
		setBoard(nextBoard);
		const winStatus = checkWinner(nextBoard);
		if (winStatus) {
			setWinner(winStatus.winner);
			setWinningLine(winStatus.line);
		} else setIsPlayerTurn(false);
	};
	(0, import_react.useEffect)(() => {
		if (isPlayerTurn || winner) return;
		const timeout = setTimeout(() => {
			const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter((val) => val !== null);
			if (emptyCells.length === 0) return;
			let choice = -1;
			for (const idx of emptyCells) {
				const testBoard = [...board];
				testBoard[idx] = B_SYMBOL;
				if (checkWinner(testBoard)?.winner === B_SYMBOL) {
					choice = idx;
					break;
				}
			}
			if (choice === -1) for (const idx of emptyCells) {
				const testBoard = [...board];
				testBoard[idx] = P_SYMBOL;
				if (checkWinner(testBoard)?.winner === P_SYMBOL) {
					choice = idx;
					break;
				}
			}
			if (choice === -1 && emptyCells.includes(4)) choice = 4;
			if (choice === -1) choice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
			const nextBoard = [...board];
			nextBoard[choice] = B_SYMBOL;
			setBoard(nextBoard);
			const winStatus = checkWinner(nextBoard);
			if (winStatus) {
				setWinner(winStatus.winner);
				setWinningLine(winStatus.line);
			} else setIsPlayerTurn(true);
		}, 600);
		return () => clearTimeout(timeout);
	}, [
		isPlayerTurn,
		board,
		winner
	]);
	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setIsPlayerTurn(true);
		setWinner(null);
		setWinningLine(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-3 w-full max-w-[280px]",
			children: board.map((cell, idx) => {
				const isWinningCell = winningLine?.includes(idx);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleCellClick(idx),
					className: `h-[80px] rounded-2xl border border-border/80 flex items-center justify-center text-3xl font-bold transition active:scale-95 ${isWinningCell ? "bg-indigo-deep text-white border-transparent scale-[1.03]" : "bg-surface hover:border-indigo/20 text-ink"}`,
					children: cell
				}, idx);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 text-center",
			children: [winner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
					className: "font-display text-xl font-extrabold text-indigo flex items-center justify-center gap-1.5 animate-bounce",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-butter fill-butter" }),
						winner === P_SYMBOL && "Panda Wins! 🐼🎉",
						winner === B_SYMBOL && "Robot Wins! 🤖❌",
						winner === "Draw" && "It is a Draw! 🤝"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink-soft",
					children: "Good game!"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold text-ink-soft flex items-center justify-center gap-2",
				children: isPlayerTurn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Your Turn 🐼" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Robot is thinking... 🤖" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: resetGame,
				className: "mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl bg-indigo-deep text-white font-display font-bold text-xs shadow-md active:scale-95 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), " Restart Game"]
			})]
		})]
	});
}
function MemoryGame() {
	const emojis = [
		"🧸",
		"🐼",
		"🦖",
		"🍦",
		"🚀",
		"👾",
		"🍩",
		"📚"
	];
	const [cards, setCards] = (0, import_react.useState)([]);
	const [selectedCards, setSelectedCards] = (0, import_react.useState)([]);
	const [moves, setMoves] = (0, import_react.useState)(0);
	const [matches, setMatches] = (0, import_react.useState)(0);
	const [isWon, setIsWon] = (0, import_react.useState)(false);
	const initGame = () => {
		const shuffled = [...emojis, ...emojis].sort(() => Math.random() - .5).map((emoji, idx) => ({
			id: idx,
			emoji,
			isFlipped: false,
			isMatched: false
		}));
		setCards(shuffled);
		setSelectedCards([]);
		setMoves(0);
		setMatches(0);
		setIsWon(false);
	};
	(0, import_react.useEffect)(() => {
		initGame();
	}, []);
	const handleCardClick = (cardId) => {
		if (cards[cardId].isMatched || cards[cardId].isFlipped || selectedCards.length >= 2) return;
		const nextCards = [...cards];
		nextCards[cardId].isFlipped = true;
		setCards(nextCards);
		const nextSelected = [...selectedCards, cardId];
		setSelectedCards(nextSelected);
		if (nextSelected.length === 2) {
			setMoves((prev) => prev + 1);
			const [firstId, secondId] = nextSelected;
			if (cards[firstId].emoji === cards[secondId].emoji) setTimeout(() => {
				const matchCards = [...cards];
				matchCards[firstId].isMatched = true;
				matchCards[secondId].isMatched = true;
				setCards(matchCards);
				setSelectedCards([]);
				setMatches((prev) => {
					const next = prev + 1;
					if (next === emojis.length) setIsWon(true);
					return next;
				});
			}, 300);
			else setTimeout(() => {
				const flipCards = [...cards];
				flipCards[firstId].isFlipped = false;
				flipCards[secondId].isFlipped = false;
				setCards(flipCards);
				setSelectedCards([]);
			}, 1e3);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-[280px] flex justify-between text-xs font-bold text-ink-soft mb-4 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Moves: ", moves] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Pairs matched: ",
					matches,
					"/",
					emojis.length
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2.5 w-full max-w-[280px]",
				children: cards.map((c) => {
					const showEmoji = c.isFlipped || c.isMatched;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleCardClick(c.id),
						className: `h-[60px] rounded-xl flex items-center justify-center text-2xl shadow-sm border transition-all duration-300 ${c.isMatched ? "bg-mint/15 border-mint/20 scale-[0.98]" : showEmoji ? "bg-surface border-indigo/20 rotate-y-180" : "bg-indigo-deep text-white border-transparent hover:bg-indigo active:scale-95"}`,
						children: showEmoji ? c.emoji : "❓"
					}, c.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 text-center",
				children: [isWon && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "font-display text-xl font-extrabold text-indigo flex items-center justify-center gap-1.5 animate-bounce",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-butter fill-butter" }), "Awesome Memory! 🎉"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-ink-soft",
						children: [
							"Finished in ",
							moves,
							" moves!"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: initGame,
					className: "mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl bg-indigo-deep text-white font-display font-bold text-xs shadow-md active:scale-95 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), " Restart Game"]
				})]
			})
		]
	});
}
function WordScramble() {
	const POOL = [
		{
			word: "SARJU",
			hint: "ML Teacher name 🤖"
		},
		{
			word: "SJCET",
			hint: "Our engineering college acronym 🏫"
		},
		{
			word: "STUDIO",
			hint: "Codexora ____ 💻"
		},
		{
			word: "NETWORKS",
			hint: "Subject P1 starts with Computer ____ 🌐"
		},
		{
			word: "LUNCH",
			hint: "12:45 PM – 1:35 PM Break 🍱"
		},
		{
			word: "ALGORITHMS",
			hint: "Design and Analysis of ____ 🧩"
		},
		{
			word: "CHAIPEDI",
			hint: "Where we grab morning tea & snacks ☕🥐"
		},
		{
			word: "CODEXORA",
			hint: "The name behind the studio 🎨"
		}
	];
	const [level, setLevel] = (0, import_react.useState)(0);
	const [scrambled, setScrambled] = (0, import_react.useState)("");
	const [guess, setGuess] = (0, import_react.useState)("");
	const [isCorrect, setIsCorrect] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const scramble = (w) => {
		const arr = w.split("");
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		const res = arr.join("");
		if (res === w && w.length > 1) return scramble(w);
		return res;
	};
	const loadLevel = (lv) => {
		if (lv >= POOL.length) {
			setScrambled("");
			return;
		}
		setScrambled(scramble(POOL[lv].word));
		setGuess("");
		setIsCorrect(null);
	};
	(0, import_react.useEffect)(() => {
		loadLevel(level);
	}, [level]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!guess.trim()) return;
		const correctWord = POOL[level].word;
		const isAnswerCorrect = guess.toUpperCase().trim() === correctWord;
		setIsCorrect(isAnswerCorrect);
		if (isAnswerCorrect) {
			setScore((prev) => prev + 10);
			if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([100]);
		} else if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([200]);
	};
	const handleNext = () => {
		setLevel((prev) => prev + 1);
	};
	const handleRestart = () => {
		setLevel(0);
		setScore(0);
		loadLevel(0);
	};
	const currentLevel = POOL[level];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col items-center justify-center py-2 max-w-sm mx-auto",
		children: level >= POOL.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-12 w-12 text-butter fill-butter mx-auto animate-bounce mb-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl font-extrabold text-indigo",
					children: "Arcade Champion! 🎉"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink-soft mt-1",
					children: "You guessed all campus words correctly!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 inline-block bg-indigo-deep text-white px-4 py-2 rounded-2xl font-bold text-sm",
					children: [
						"Total Score: ",
						score,
						" pts"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleRestart,
					className: "mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl border border-indigo text-indigo font-display font-bold text-xs active:scale-95 transition",
					children: "Play Again"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center text-xs font-bold text-ink-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Word ",
						level + 1,
						" of ",
						POOL.length
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Score: ",
						score,
						" pts"
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border/60 bg-surface p-5 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-wider text-ink-soft/75",
							children: "Unscramble the letters:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-black text-indigo tracking-widest mt-2 uppercase",
							children: scrambled
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 bg-muted/60 dark:bg-surface-2 rounded-2xl p-3 inline-flex items-center gap-1.5 max-w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold bg-indigo text-white px-1.5 py-0.5 rounded uppercase",
								children: "Hint"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ink-soft truncate font-semibold",
								children: currentLevel?.hint
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: guess,
						onChange: (e) => setGuess(e.target.value),
						disabled: isCorrect === true,
						placeholder: "Your guess...",
						className: "w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-surface text-ink text-center font-display font-bold placeholder-ink-soft/50 focus:outline-none focus:border-indigo/55 transition"
					}), isCorrect === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-md active:scale-95 transition",
						children: "Submit Answer"
					})]
				}),
				isCorrect === true && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-mint/20 border border-mint/30 p-3.5 text-center text-emerald-800 dark:text-emerald-300 font-bold text-xs",
						children: "Correct! +10 pts 🥳🎉"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleNext,
						className: "w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-md active:scale-95 transition",
						children: "Next Word 🚀"
					})]
				}),
				isCorrect === false && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-blush/20 border border-blush/30 p-3.5 text-center text-red-800 dark:text-red-300 font-bold text-xs",
						children: "Wrong answer! Try again 🥺❌"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsCorrect(null),
						className: "w-full py-3.5 rounded-2xl border border-border/60 bg-surface text-ink font-display font-bold text-sm hover:border-indigo/25 active:scale-95 transition",
						children: "Try Again"
					})]
				})
			]
		})
	});
}
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
	const [showGames, setShowGames] = (0, import_react.useState)(false);
	const [tapCount, setTapCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setNotificationsEnabled(localStorage.getItem("sjcet_notifications_enabled") === "true");
		setTheme(localStorage.getItem("sjcet_theme") || "light");
	}, []);
	const handleHeaderTap = () => {
		setTapCount((prev) => {
			const next = prev + 1;
			if (next >= 2) {
				setShowGames(true);
				if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([
					80,
					50,
					80
				]);
				return 0;
			}
			setTimeout(() => setTapCount(0), 800);
			return next;
		});
	};
	const applyTheme = (targetTheme) => {
		if (targetTheme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	};
	const changeTheme = (newTheme) => {
		setTheme(newTheme);
		localStorage.setItem("sjcet_theme", newTheme);
		applyTheme(newTheme);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.22em] text-indigo",
				children: "SJCET CSE-B ✦"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				onClick: handleHeaderTap,
				className: "mt-1 font-display text-[28px] font-bold text-ink cursor-pointer select-none active:scale-[0.97] transition inline-flex items-center gap-1",
				children: "Settings ⚙️"
			})]
		}),
		children: [showGames && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretGames, { onClose: () => setShowGames(false) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
						}) : r.label === "Appearance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: (e) => e.stopPropagation(),
							className: "relative shrink-0 flex items-center bg-muted/60 dark:bg-surface-2 rounded-full p-0.75 border border-border/40 gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => changeTheme("light"),
								className: `rounded-full p-1.5 transition duration-200 active:scale-90 ${theme === "light" ? "bg-surface dark:bg-indigo-deep text-indigo dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-ink-soft opacity-60 hover:opacity-100"}`,
								title: "Light Mode",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
									className: "h-4.5 w-4.5",
									strokeWidth: 2.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => changeTheme("dark"),
								className: `rounded-full p-1.5 transition duration-200 active:scale-90 ${theme === "dark" ? "bg-indigo-deep text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)]" : "text-ink-soft opacity-60 hover:opacity-100"}`,
								title: "Dark Mode",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
									className: "h-4.5 w-4.5",
									strokeWidth: 2.4
								})
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "shrink-0 text-[11px] font-semibold text-ink-soft",
							children: r.hint
						})
					]
				}, r.label);
			})
		})]
	});
}
//#endregion
export { SettingsPage as component };
