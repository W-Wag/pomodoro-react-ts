import './App.css';
import { PomodoroTimer } from './components/pomodoro-timer';

export function App() {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}
