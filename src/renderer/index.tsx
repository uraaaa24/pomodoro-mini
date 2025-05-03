import { useState, useEffect, CSSProperties } from "react";
import { createRoot } from "react-dom/client";

const WORK_SEC = 25 * 60;
const BREAK_SEC = 5 * 60;

const PADDING = 20;
const GAP = 8;
const INPUT_WIDTH = "85%";

// ———— スタイルまとめ ————
const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: PADDING,
    gap: GAP,
    height: "100%",
    boxSizing: "border-box",
  },
  input: {
    width: INPUT_WIDTH,
    padding: "6px 0",
    border: "none",
    borderBottom: "1px solid #ccc",
    fontSize: 14,
    textAlign: "center",
    outline: "none",
  },
  mode: {
    margin: 0,
    marginTop: GAP,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1,
  },
  timer: {
    margin: 0,
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 8,
    color: "#999",
  },
  dot: {
    userSelect: "none",
  },
  play: {
    marginTop: GAP,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    lineHeight: 1,
  },
};

const DotNav = () => {
  return (
    <div style={styles.nav}>
      {[...Array(4)].map((_, i) => (
        <span key={i} style={styles.dot}>
          {i === 0 ? "●" : "○"}
        </span>
      ))}
    </div>
  );
};

const App = () => {
  const [todo, setTodo] = useState("");
  const [seconds, setSeconds] = useState(WORK_SEC);
  const [isWork, setIsWork] = useState(true);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((sec) => {
        if (sec <= 1) {
          clearInterval(id);
          setIsWork((w) => !w);
          setSeconds(isWork ? BREAK_SEC : WORK_SEC);
          return 0;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, isWork]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="What are you working on?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <h2 style={styles.mode}>{isWork ? "Work" : "Break"}</h2>
      <div style={styles.timer}>{minutes}:{secs}</div>
      <DotNav />
      <button
        style={{
          ...styles.play,
          color: running ? "#FF3B30" : "#30D158",
        }}
        onClick={() => setRunning((r) => !r)}
      >
        {running ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
