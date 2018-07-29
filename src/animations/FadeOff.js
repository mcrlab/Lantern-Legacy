import Animation from './Animation';
const Color = require('color');

const frameRate = 64;
const numberOfFrames = 64;

export default class FadeOff extends Animation {
  constructor(color = 'FFFFFF'){
    super(color, numberOfFrames, frameRate);
    this.name = 'FadeOff';
    this.loop = 0;
    this.constructAnimation();
  }


  constructAnimation(){
    this.data = [];
    for(let i = 0; i < numberOfFrames; i++){
      let color = Color('#'+this.defaultColor).darken(i/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }
    this.data.push('000000');
  }

}
