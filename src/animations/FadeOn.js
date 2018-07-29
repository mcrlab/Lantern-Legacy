import Animation from './Animation';
const Color = require('color');
const frameRate = 16;
const numberOfFrames = 16;

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
      let color = Color('#'+this.defaultColor).darken(i/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }
  }

}
