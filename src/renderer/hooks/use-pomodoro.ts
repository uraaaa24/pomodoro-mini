import { useState, useEffect, useCallback } from "react";

export const usePomodoro = (workSec: number, breakSec: number) => {
  const [seconds, setSeconds] = useState(workSec);
  const [isWork, setIsWork] = useState(true);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds(sec => {
        if (sec <= 1) {
          setIsWork(prev => !prev);
          return isWork ? breakSec : workSec;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, workSec, breakSec]);

  const toggle = useCallback(() => setRunning(r => !r), []);
  const reset = useCallback(() => {
    setRunning(false);
    setIsWork(true);
    setSeconds(workSec);
  }, [workSec]);

  return { seconds, isWork, running, toggle, reset };
}
