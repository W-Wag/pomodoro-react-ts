import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);
  return <div>{mainTime}</div>;
}
