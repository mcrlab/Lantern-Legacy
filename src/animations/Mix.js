import Animation from './Animation';
const Color = require('color');
const frameRate = 16;
const numberOfFrames = 16;

export default class Mix extends Animation {
  constructor(colorA = 'FF0000', colorB = '00FF00'){
    super(colorB, numberOfFrames, frameRate);
    this.name = 'Mix';
    this.loop = 0;
    this.fps = 16;
    this.colorB = colorB;
    this.constructAnimation();
  }


  constructAnimation(){
    this.data = [];
    for(let i = numberOfFrames; i > 0; i--){
      let color = Color('#'+this.defaultColor).mix(Color('#'+this.colorB), i/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }
  }

}
