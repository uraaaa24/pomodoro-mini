import { useState, useEffect, useCallback } from "react";

export function usePomodoro(
    workSec: number,
    breakSec: number,
    totalSessions: number = Infinity
  ) {
    const [seconds, setSeconds] = useState(workSec);
    const [isWork, setIsWork] = useState(true);
    const [running, setRunning] = useState(false);
    const [sessionCount, setSessionCount] = useState(0);
    const [done, setDone] = useState(false);
  
    useEffect(() => {
      if (!running || done) return;
      const id = setInterval(() => {
        setSeconds(prev => {
          if (prev > 1) return prev - 1;
          const wasWork = isWork;
          setIsWork(!wasWork);
          if (wasWork) {
            setSessionCount(count => {
              const newCount = count + 1;
              if (newCount >= totalSessions) {
                setDone(true);
                setRunning(false);
              }
              return newCount;
            });
          }
          return wasWork ? breakSec : workSec;
        });
      }, 1000);
      return () => clearInterval(id);
    }, [running, done, isWork, workSec, breakSec, totalSessions]);
  
    const toggle = useCallback(() => {
      if (!done) setRunning(r => !r);
    }, [done]);
  
    const reset = useCallback(() => {
      setRunning(false);
      setIsWork(true);
      setSeconds(workSec);
      setSessionCount(0);
      setDone(false);
    }, [workSec]);
  
    return { seconds, isWork, running, toggle, reset, sessionCount, done };
  }
  