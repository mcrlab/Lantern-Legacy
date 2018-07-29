import Animation from './Animation';
const tinycolor = require('tinycolor2');

const frameRate = 16;
const numberOfFrames = 64;

export default class FadeOff extends Animation {
  constructor(color = 'FFFFFF'){
    super(color, numberOfFrames, frameRate);
    this.name = 'FadeOff';
    this.loop = 0;
    this.fps = 16;
    this.constructAnimation();
  }


  constructAnimation(){
    this.data = [];
    for(let i = 0; i < numberOfFrames; i++){
      const color = tinycolor(this.defaultColor).darken(i).toHex();
      this.data.push(this.fillFrame(color));
    }
  }

}
