export interface TeamMate {
  name: string;
  isDone: boolean;
  selected: boolean;
  isPaused: boolean;
  time: number;
}

interface TimeLeft {
  'hours': number;
  'minute': number;
  'seconds': number;
}

export interface AppState {
  teamMates: TeamMate[];
  timeLeft: TimeLeft;
  time: number;
  memberName: string;
}

export interface ClockState {
 seconds: number;
}

export interface AudioState {
  paused: boolean;
  seconds: number;
}

export interface TimeProgressState {
  isDone: boolean;
  seconds: number;
}
