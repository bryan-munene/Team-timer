import * as React from "react";
import {AudioState} from "../../interfaces";
import sketch from "./sketch";

const P5Wrapper =  require('react-p5-wrapper');

class AudioVisualizer extends React.Component<AudioState, {}> {
    public render(){
        return (
            <div>
                <P5Wrapper sketch={sketch} {...this.props}/>
            </div>
        )
    }
}

export default AudioVisualizer;
