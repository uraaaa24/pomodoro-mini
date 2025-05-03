import { useState, useMemo, CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { usePomodoro } from './hooks/use-pomodoro';
import { styles } from './styles';
import DotNav from './components/dot-nav';

const WORK_SEC = 25 * 60;
const BREAK_SEC = 5 * 60;

const App = () => {
  const [todo, setTodo] = useState('');

  const { seconds, isWork, running, toggle, reset } = usePomodoro(WORK_SEC, BREAK_SEC);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  const toggleStyle = useMemo<CSSProperties>(
    () => ({
      ...styles.controlButton,
      color: running ? '#FF3B30' : '#30D158'
    }), [running]
  );

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="What are you working on?"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <h2 style={styles.mode}>{isWork ? 'Work' : 'Break'}</h2>
      <div style={styles.timer}>{mm}:{ss}</div>
      <DotNav />
      <div style={styles.controls}>
        <button style={styles.controlButton} onClick={reset}>
          <span style={styles.reset}>⟳</span>
        </button>
        <button style={toggleStyle} onClick={toggle}>
          {running ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
