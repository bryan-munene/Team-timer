import * as React from "react";
import glass from '../../assets/images/glass.png'
import {ClockState} from "../../interfaces";
import './Clock.scss';

class Clock extends React.Component<{}, ClockState> {

  public render(){
    return (
      <div className="clock">
        <img src={glass} alt="" className="clock__background"/>
        <span className="clock__hand"/>
      </div>
    )
  }
}

export default Clock;
