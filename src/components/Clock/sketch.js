import logo from '../../assets/images/travela-logo.svg';
import glass from '../../assets/images/glass.png';

export default (p) => {
  let img;
  let dome;
  const ringWidth = 10;
  const sRingWidth = 2;
  let second = 0;

  p.setup = () => {
    p.createCanvas(600, 600);
    img = p.loadImage(logo);
    dome = p.loadImage(glass);
  };


  p.myCustomRedrawAccordingToNewPropsHandler = ( { seconds }) => {
    second = seconds;
  };

  p.draw = () => {
    p.background(0, 0, 0, 0);


    p.strokeWeight(ringWidth);
    p.stroke(0);
    p.fill(255);
    p.ellipse(p.width / 2, p.height / 2, p.width - ringWidth, p.height - ringWidth);

    // stroke(0, 0, 0, 100)
    for(let i = 0; i < 12; i++){
      const offset = ringWidth + ringWidth + ( sRingWidth * i);
      p.stroke(20 * i);
      p.strokeWeight(sRingWidth);
      p.ellipse(p.width / 2, p.height / 2, p.width- offset, p.height -  offset);
    }

    p.image(img, p.width / 2 - 80, p.width / 4);
    // draw the minute pointers
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.stroke(51, 89, 219);
    p.angleMode(p.DEGREES);
    for (let i = 0; i < 60; i++) {
      const isQuarter = i % 15 === 0;
      const isFifth = i % 5 === 0;
      p.push();
      p.strokeWeight(isQuarter ? 4 : isFifth ? 2 : 1);
      p.rotate(6 * i);
      p.line(p.width / 2 - ringWidth - 20, 0, p.width / 2 - ringWidth - 20 - (isQuarter ? 20 : isFifth ? 10 : 5), 0);
      p.pop();
    }

    // draw the middle circle
    p.push();
    p.rotate(-90);
    p.rotate(second * 6);
    p.stroke( second <= 15 && second > 0 ? 255 : 0, 0, 0);
    p.strokeWeight(1);
    p.line(0, 0, 230, 0);
    p.strokeWeight(5);
    p.line(-40, 0, 0, 0);
    p.pop();
    p.stroke(second <= 15 && second > 0 ? 255 : 0, 0, 0);
    p.fill(second <= 15 && second > 0 ? 255 : 0, 0, 0);
    p.ellipse(0, 0, 10, 10);
    p.pop();

    p.push();
    p.tint(255, 200);
    p.image(dome, -15, -15, p.width + 35, p.height + 35);
    p.pop();

    p.noFill();
    p.strokeWeight(ringWidth);
    p.stroke(0);
    p.ellipse(p.width / 2, p.height / 2, p.width - ringWidth, p.height - ringWidth);

    p.stroke(255);
    p.strokeWeight(2);
    p.ellipse(p.width / 2, p.height / 2, p.width, p.height);

  };
}
