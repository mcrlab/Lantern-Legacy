import ColorCompression from '../lib/ColorCompression';

const NUMBER_OF_FRAMES = 8;
const FRAMES_PER_SECOND = 8;
const OFF = 'FFFFFF';

export default class Animation {
  constructor(defaultColor = OFF,
              numberOfFrames = NUMBER_OF_FRAMES,
              frameRate = FRAMES_PER_SECOND,
              ) {

    this.name = 'Animation';
    this.numberOfFrames = numberOfFrames;
    this.frameRate = frameRate;
    this.loop = 1;
    this.defaultColor = defaultColor;
    this.data = this.constructDefaultAnimation();
  }

  constructDefaultAnimation() {
      let sequence = [];
      for(let frame = 0; frame < this.numberOfFrames; frame++){
        sequence[frame] = this.fillFrame(OFF);
      }
      return sequence;
  }

  fillFrame(color = OFF) {
    return color;
  }

  getData() {
    return {
      "loop": this.loop,
      "fps": this.frameRate,
      "data":this.data,
      "color": this.defaultColor
    }
  }

  toString() {
    let output = [];

    this.data.map((frame)=> {
        output.push(ColorCompression.compress(frame));
    });

    const dataString = output.join('');
    const instruction = `ANIM|${this.numberOfFrames},${this.frameRate},${dataString}`;
    return instruction;

  }

}
