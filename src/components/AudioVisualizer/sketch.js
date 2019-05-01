export default (p) => {
  const frequencies = [];
  const numFrequencies = 100;
  let diff;
  let paused = false;
  let seconds = 0;

  const generateFrequencies = () => {
    for (let i = 0; i < numFrequencies; i++) {
      frequencies[i] = p.random(10, p.height * 0.75);
    }
    diff = p.width / numFrequencies;
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props ) => {
    paused = props.paused;
    seconds = props.seconds;
  };

  p.setup = () => {
    p.createCanvas(350, 70);
    generateFrequencies();
    p.frameRate(20);
  };

  p.draw = () => {
    p.background(255);

    if( !paused){
      generateFrequencies();
    }

    if( seconds > 0 && seconds <= 15) {
      p.stroke(255, 0, 0);
    }
    p.beginShape();
    frequencies.forEach((frequency, index) => {
      p.vertex(index * diff, frequency);
    });
    p.endShape();
  }
}
