import {useState, useEffect} from 'react';

export const useTimer = ({initialTime = 0, delay = 1000}) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, delay);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsActive(false);
  };

  return {
    time,
    startTimer,
    pauseTimer,
    resetTimer,
    isActive,
  };
};
