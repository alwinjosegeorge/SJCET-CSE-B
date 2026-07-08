import { useState, useEffect } from "react";
import { X, RotateCcw, ArrowLeft, Trophy, Sparkles, User, Cpu, Heart } from "lucide-react";

interface SecretGamesProps {
  onClose: () => void;
}

type GameMode = "menu" | "tictactoe" | "memory" | "scramble";

export function SecretGames({ onClose }: SecretGamesProps) {
  const [mode, setMode] = useState<GameMode>("menu");

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background text-ink animate-slide-up pb-[env(safe-area-inset-bottom)] pt-[max(env(safe-area-inset-top),1.25rem)]">
      {/* Header */}
      <header className="px-5 py-4 border-b border-border/60 flex items-center justify-between bg-surface/90 backdrop-blur">
        <div className="flex items-center gap-2.5">
          {mode !== "menu" && (
            <button
              onClick={() => setMode("menu")}
              className="grid h-9 w-9 place-items-center rounded-xl bg-muted text-ink hover:bg-border/40 transition active:scale-[0.9]"
            >
              <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2.4} />
            </button>
          )}
          <div>
            <h2 className="font-display text-lg font-bold flex items-center gap-1.5 leading-none">
              {mode === "menu" && <>Arcade Zone 👾</>}
              {mode === "tictactoe" && <>Panda vs Robot 🧸</>}
              {mode === "memory" && <>Emoji Match 🃏</>}
              {mode === "scramble" && <>Campus Guess 🧠</>}
            </h2>
            <p className="text-[10px] font-semibold text-ink-soft mt-0.5 leading-none">
              {mode === "menu" && "Secret campus arcade. Shhh! 🤫"}
              {mode === "tictactoe" && "Tic Tac Toe against AI bot"}
              {mode === "memory" && "Find matching emoji pairs"}
              {mode === "scramble" && "Unscramble CSE-B words"}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="grid h-9 w-9 place-items-center rounded-full bg-muted text-ink-soft hover:text-ink transition active:scale-[0.9]"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-5 no-scrollbar">
        {mode === "menu" && <GameMenu onSelectGame={setMode} />}
        {mode === "tictactoe" && <TicTacToe />}
        {mode === "memory" && <MemoryGame />}
        {mode === "scramble" && <WordScramble />}
      </main>
    </div>
  );
}

/* -------------------------- Game Menu -------------------------- */
function GameMenu({ onSelectGame }: { onSelectGame: (mode: GameMode) => void }) {
  const games = [
    {
      id: "tictactoe" as GameMode,
      title: "Panda vs Robot",
      desc: "Play Tic Tac Toe against an AI Bot in your boring class!",
      emoji: "🤖🧸",
      color: "bg-blush",
    },
    {
      id: "memory" as GameMode,
      title: "Emoji Match",
      desc: "Test your memory limit by pairing cute campus emojis!",
      emoji: "🃏🧠",
      color: "bg-mint",
    },
    {
      id: "scramble" as GameMode,
      title: "Campus Word Guess",
      desc: "Unscramble campus & teacher names from SJCET!",
      emoji: "🏫📝",
      color: "bg-butter",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-[28px] bg-indigo-deep p-5 text-white relative overflow-hidden shadow-lg mb-2">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            Unlocked 🔑
          </span>
          <h3 className="font-display text-xl font-extrabold mt-3 leading-tight">
            Lecture Hall Boring? 😴
          </h3>
          <p className="text-xs text-white/80 mt-1 leading-relaxed">
            Here are some quick, cute offline games to keep you awake. Just don't get caught by teachers! 👨‍🏫🤫
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {games.map((g) => (
          <button
            key={g.id}
            onClick={() => onSelectGame(g.id)}
            className="w-full flex items-center gap-4 rounded-3xl border border-border/60 bg-surface p-4 text-left hover:border-indigo/25 transition active:scale-[0.99]"
          >
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${g.color} text-2xl`}>
              {g.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display text-sm font-bold text-ink">{g.title}</h4>
              <p className="text-xs text-ink-soft mt-0.5 leading-tight">{g.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      <p className="text-center text-[10px] font-bold uppercase text-ink-soft/40 mt-8 tracking-wider flex items-center justify-center gap-1">
        Made with <Heart className="h-3 w-3 text-blush fill-blush animate-pulse" /> for SJCET CSE-B
      </p>
    </div>
  );
}

/* -------------------------- Game: Tic Tac Toe -------------------------- */
function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const P_SYMBOL = "🧸"; // Player Panda
  const B_SYMBOL = "🤖"; // Bot Robot

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diag
  ];

  const checkWinner = (grid: (string | null)[]) => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return { winner: grid[a], line: pattern };
      }
    }
    if (grid.every(cell => cell !== null)) {
      return { winner: "Draw", line: null };
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) return;

    // Player move
    const nextBoard = [...board];
    nextBoard[index] = P_SYMBOL;
    setBoard(nextBoard);

    const winStatus = checkWinner(nextBoard);
    if (winStatus) {
      setWinner(winStatus.winner);
      setWinningLine(winStatus.line);
    } else {
      setIsPlayerTurn(false);
    }
  };

  // Bot logic
  useEffect(() => {
    if (isPlayerTurn || winner) return;

    const timeout = setTimeout(() => {
      // Find empty cells
      const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(val => val !== null) as number[];
      if (emptyCells.length === 0) return;

      // Simple AI: Check if bot can win or player is about to win
      let choice = -1;

      // 1. Can Bot win?
      for (const idx of emptyCells) {
        const testBoard = [...board];
        testBoard[idx] = B_SYMBOL;
        if (checkWinner(testBoard)?.winner === B_SYMBOL) {
          choice = idx;
          break;
        }
      }

      // 2. Block player?
      if (choice === -1) {
        for (const idx of emptyCells) {
          const testBoard = [...board];
          testBoard[idx] = P_SYMBOL;
          if (checkWinner(testBoard)?.winner === P_SYMBOL) {
            choice = idx;
            break;
          }
        }
      }

      // 3. Pick center?
      if (choice === -1 && emptyCells.includes(4)) {
        choice = 4;
      }

      // 4. Random choice
      if (choice === -1) {
        choice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      }

      const nextBoard = [...board];
      nextBoard[choice] = B_SYMBOL;
      setBoard(nextBoard);

      const winStatus = checkWinner(nextBoard);
      if (winStatus) {
        setWinner(winStatus.winner);
        setWinningLine(winStatus.line);
      } else {
        setIsPlayerTurn(true);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [isPlayerTurn, board, winner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setWinningLine(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      {/* Game board */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
        {board.map((cell, idx) => {
          const isWinningCell = winningLine?.includes(idx);
          return (
            <button
              key={idx}
              onClick={() => handleCellClick(idx)}
              className={`h-[80px] rounded-2xl border border-border/80 flex items-center justify-center text-3xl font-bold transition active:scale-95 ${
                isWinningCell 
                  ? "bg-indigo-deep text-white border-transparent scale-[1.03]" 
                  : "bg-surface hover:border-indigo/20 text-ink"
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {/* Info status */}
      <div className="mt-8 text-center">
        {winner ? (
          <div className="space-y-1">
            <h4 className="font-display text-xl font-extrabold text-indigo flex items-center justify-center gap-1.5 animate-bounce">
              <Trophy className="h-5 w-5 text-butter fill-butter" />
              {winner === P_SYMBOL && "Panda Wins! 🐼🎉"}
              {winner === B_SYMBOL && "Robot Wins! 🤖❌"}
              {winner === "Draw" && "It is a Draw! 🤝"}
            </h4>
            <p className="text-xs text-ink-soft">Good game!</p>
          </div>
        ) : (
          <p className="text-sm font-bold text-ink-soft flex items-center justify-center gap-2">
            {isPlayerTurn ? (
              <>Your Turn 🐼</>
            ) : (
              <>Robot is thinking... 🤖</>
            )}
          </p>
        )}

        <button
          onClick={resetGame}
          className="mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl bg-indigo-deep text-white font-display font-bold text-xs shadow-md active:scale-95 transition"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Restart Game
        </button>
      </div>
    </div>
  );
}

/* -------------------------- Game: Memory Match -------------------------- */
interface MemoryCard {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function MemoryGame() {
  const emojis = ["🧸", "🐼", "🦖", "🍦", "🚀", "👾", "🍩", "📚"];
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, idx) => ({
        id: idx,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setSelectedCards([]);
    setMoves(0);
    setMatches(0);
    setIsWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (cardId: number) => {
    // Ignore clicks on already matched, flipped or when 2 cards are already selected
    if (cards[cardId].isMatched || cards[cardId].isFlipped || selectedCards.length >= 2) return;

    const nextCards = [...cards];
    nextCards[cardId].isFlipped = true;
    setCards(nextCards);

    const nextSelected = [...selectedCards, cardId];
    setSelectedCards(nextSelected);

    if (nextSelected.length === 2) {
      setMoves(prev => prev + 1);
      const [firstId, secondId] = nextSelected;

      if (cards[firstId].emoji === cards[secondId].emoji) {
        // Match!
        setTimeout(() => {
          const matchCards = [...cards];
          matchCards[firstId].isMatched = true;
          matchCards[secondId].isMatched = true;
          setCards(matchCards);
          setSelectedCards([]);
          setMatches(prev => {
            const next = prev + 1;
            if (next === emojis.length) {
              setIsWon(true);
            }
            return next;
          });
        }, 300);
      } else {
        // Flip back
        setTimeout(() => {
          const flipCards = [...cards];
          flipCards[firstId].isFlipped = false;
          flipCards[secondId].isFlipped = false;
          setCards(flipCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      {/* Stats bar */}
      <div className="w-full max-w-[280px] flex justify-between text-xs font-bold text-ink-soft mb-4 px-1">
        <span>Moves: {moves}</span>
        <span>Pairs matched: {matches}/{emojis.length}</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2.5 w-full max-w-[280px]">
        {cards.map((c) => {
          const showEmoji = c.isFlipped || c.isMatched;
          return (
            <button
              key={c.id}
              onClick={() => handleCardClick(c.id)}
              className={`h-[60px] rounded-xl flex items-center justify-center text-2xl shadow-sm border transition-all duration-300 ${
                c.isMatched 
                  ? "bg-mint/15 border-mint/20 scale-[0.98]" 
                  : showEmoji
                    ? "bg-surface border-indigo/20 rotate-y-180"
                    : "bg-indigo-deep text-white border-transparent hover:bg-indigo active:scale-95"
              }`}
            >
              {showEmoji ? c.emoji : "❓"}
            </button>
          );
        })}
      </div>

      {/* Win section */}
      <div className="mt-8 text-center">
        {isWon && (
          <div className="space-y-1">
            <h4 className="font-display text-xl font-extrabold text-indigo flex items-center justify-center gap-1.5 animate-bounce">
              <Trophy className="h-5 w-5 text-butter fill-butter" />
              Awesome Memory! 🎉
            </h4>
            <p className="text-xs text-ink-soft">Finished in {moves} moves!</p>
          </div>
        )}

        <button
          onClick={initGame}
          className="mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl bg-indigo-deep text-white font-display font-bold text-xs shadow-md active:scale-95 transition"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Restart Game
        </button>
      </div>
    </div>
  );
}

/* -------------------------- Game: Word Scramble -------------------------- */
interface CampusWord {
  word: string;
  hint: string;
}

function WordScramble() {
  const POOL: CampusWord[] = [
    { word: "SARJU", hint: "ML Teacher name 🤖" },
    { word: "SJCET", hint: "Our engineering college acronym 🏫" },
    { word: "STUDIO", hint: "Codexora ____ 💻" },
    { word: "NETWORKS", hint: "Subject P1 starts with Computer ____ 🌐" },
    { word: "LUNCH", hint: "12:45 PM – 1:35 PM Break 🍱" },
    { word: "ALGORITHMS", hint: "Design and Analysis of ____ 🧩" },
    { word: "CHAIPEDI", hint: "Where we grab morning tea & snacks ☕🥐" },
    { word: "CODEXORA", hint: "The name behind the studio 🎨" }
  ];

  const [level, setLevel] = useState(0);
  const [scrambled, setScrambled] = useState("");
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const scramble = (w: string) => {
    const arr = w.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const res = arr.join("");
    // If somehow scrambled is same as word, scramble again
    if (res === w && w.length > 1) return scramble(w);
    return res;
  };

  const loadLevel = (lv: number) => {
    if (lv >= POOL.length) {
      setScrambled("");
      return;
    }
    setScrambled(scramble(POOL[lv].word));
    setGuess("");
    setIsCorrect(null);
  };

  useEffect(() => {
    loadLevel(level);
  }, [level]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim()) return;

    const correctWord = POOL[level].word;
    const isAnswerCorrect = guess.toUpperCase().trim() === correctWord;

    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore(prev => prev + 10);
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate([100]);
      }
    } else {
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate([200]);
      }
    }
  };

  const handleNext = () => {
    setLevel(prev => prev + 1);
  };

  const handleRestart = () => {
    setLevel(0);
    setScore(0);
    loadLevel(0);
  };

  const currentLevel = POOL[level];
  const isFinished = level >= POOL.length;

  return (
    <div className="flex flex-col items-center justify-center py-2 max-w-sm mx-auto">
      {isFinished ? (
        <div className="text-center py-6">
          <Trophy className="h-12 w-12 text-butter fill-butter mx-auto animate-bounce mb-3" />
          <h4 className="font-display text-xl font-extrabold text-indigo">
            Arcade Champion! 🎉
          </h4>
          <p className="text-xs text-ink-soft mt-1">
            You guessed all campus words correctly!
          </p>
          <div className="mt-4 inline-block bg-indigo-deep text-white px-4 py-2 rounded-2xl font-bold text-sm">
            Total Score: {score} pts
          </div>
          <button
            onClick={handleRestart}
            className="mt-6 flex items-center justify-center gap-2 mx-auto px-5 py-3 rounded-2xl border border-indigo text-indigo font-display font-bold text-xs active:scale-95 transition"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="w-full space-y-5">
          {/* Status */}
          <div className="flex justify-between items-center text-xs font-bold text-ink-soft">
            <span>Word {level + 1} of {POOL.length}</span>
            <span>Score: {score} pts</span>
          </div>

          {/* Question card */}
          <div className="rounded-3xl border border-border/60 bg-surface p-5 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft/75">
              Unscramble the letters:
            </p>
            <h3 className="font-display text-3xl font-black text-indigo tracking-widest mt-2 uppercase">
              {scrambled}
            </h3>
            
            {/* Clue Hint */}
            <div className="mt-4 bg-muted/60 dark:bg-surface-2 rounded-2xl p-3 inline-flex items-center gap-1.5 max-w-full">
              <span className="text-[10px] font-bold bg-indigo text-white px-1.5 py-0.5 rounded uppercase">Hint</span>
              <p className="text-xs text-ink-soft truncate font-semibold">{currentLevel?.hint}</p>
            </div>
          </div>

          {/* Form guess input */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              disabled={isCorrect === true}
              placeholder="Your guess..."
              className="w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-surface text-ink text-center font-display font-bold placeholder-ink-soft/50 focus:outline-none focus:border-indigo/55 transition"
            />

            {isCorrect === null && (
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-md active:scale-95 transition"
              >
                Submit Answer
              </button>
            )}
          </form>

          {/* Feedbacks */}
          {isCorrect === true && (
            <div className="space-y-3">
              <div className="rounded-2xl bg-mint/20 border border-mint/30 p-3.5 text-center text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                Correct! +10 pts 🥳🎉
              </div>
              <button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl bg-indigo-deep text-white font-display font-bold text-sm shadow-md active:scale-95 transition"
              >
                Next Word 🚀
              </button>
            </div>
          )}

          {isCorrect === false && (
            <div className="space-y-3">
              <div className="rounded-2xl bg-blush/20 border border-blush/30 p-3.5 text-center text-red-800 dark:text-red-300 font-bold text-xs">
                Wrong answer! Try again 🥺❌
              </div>
              <button
                onClick={() => setIsCorrect(null)}
                className="w-full py-3.5 rounded-2xl border border-border/60 bg-surface text-ink font-display font-bold text-sm hover:border-indigo/25 active:scale-95 transition"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
