import Animation from './Animation';
const tinycolor = require('tinycolor2');

const frameRate = 16;
const numberOfFrames = 64;

export default class FadeOn extends Animation {
  constructor(color = 'FFFFFF'){
    super(color, numberOfFrames, frameRate);
    this.name = 'FadeOn';
    this.loop = 0;
    this.fps = 16;
    this.constructAnimation();
  }


  constructAnimation(){
    this.data = [];
    for(let i = numberOfFrames; i > 0; i--){
      const color = tinycolor(this.defaultColor).darken(i).toHex();
      this.data.push(this.fillFrame(color));
    }
  }

}
