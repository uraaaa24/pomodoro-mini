import React, { useState, useEffect, useRef, useMemo, CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { usePomodoro } from './hooks/use-pomodoro';
import DotNav from './components/dot-nav';
import { styles } from './styles';

const WORK_SEC = 25 * 60;
const BREAK_SEC = 5 * 60;
const TOTAL_SESSIONS = 4;

const App = () => {
  const [todo, setTodo] = useState('');

  const { seconds, isWork, running, toggle, reset, sessionCount, done } =
    usePomodoro(WORK_SEC, BREAK_SEC, TOTAL_SESSIONS);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  const toggleStyle = useMemo<CSSProperties>(
    () => ({
      ...styles.controlButton,
      color: running ? '#FF3B30' : '#30D158',
      opacity: done ? 0.5 : 1,
      cursor: done ? 'none' : 'pointer',
    }), [running, done]
  );

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="What are you working on?"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <h2 style={styles.mode}>{done ? 'All sessions done!' : (isWork ? 'Work' : 'Break')}</h2>
      <div style={styles.timer}>{mm}:{ss}</div>
      <DotNav count={sessionCount} total={TOTAL_SESSIONS} done={done} />
      <div style={styles.controls}>
        <button style={styles.controlButton} onClick={reset}>
          <span style={styles.reset}>⟳</span>
        </button>
        <button style={toggleStyle} onClick={toggle} disabled={done}>
          {running ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
