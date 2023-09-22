import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Timer } from './timer';
import { Button } from './button';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="teste"></Button>
        <Button text="teste"></Button>
        <Button text="teste"></Button>
      </div>

      <div className="details">
        <p>Testando detalhes</p>
        <p>Testando detalhes</p>
        <p>Testando detalhes</p>
        <p>Testando detalhes</p>
      </div>
    </div>
  );
}
