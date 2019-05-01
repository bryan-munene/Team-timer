import * as React from "react";
import {ClockState} from "../../interfaces";
import './Clock.scss';
import sketch from "./sketch";

const P5Wrapper =  require('react-p5-wrapper');

class Clock extends React.Component<ClockState, ClockState> {
  public state = {
    seconds: 0
  };

  public render(){
    return (
      <div className="clock">
          <P5Wrapper sketch={sketch} seconds={this.props.seconds} />
      </div>
    )
  }
}

export default Clock;
