import * as React from "react";
import { TimeProgressState} from "../../interfaces";
import './TimeProgress.scss';

class TimeProgress extends React.Component<TimeProgressState, {}> {

    public render(): React.ReactNode {
        const { seconds, isDone } = this.props;

        const percentage = isDone ? 100 : ((60 - seconds) * 100 / 60);
        return (
            <div className="time-progress">
                <span className = {`time-progress__progress ${isDone ? 'success': ''}  ${seconds < 15 ? 'failure': ''}`} style={{width: `${percentage}%`}}/>
            </div>
        )
    }

}

export default TimeProgress;
