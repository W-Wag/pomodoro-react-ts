import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Timer } from './timer';
import { Button } from './button';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste"></Button>
    </div>
  );
}
