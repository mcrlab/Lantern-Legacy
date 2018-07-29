import Animation from './Animation';
const Color = require('color');
const frameRate = 16;
const numberOfFrames = 128;

export default class Mix extends Animation {
  constructor(colorA = 'FF0000', colorB = '00FF00'){
    super(colorB, numberOfFrames, frameRate);
    this.name = 'Mix';
    this.loop = 1;
    this.frameRate = 16;
    this.colorA = colorA;
    this.colorB = colorB;
    this.constructAnimation();
  }


  constructAnimation(){
    this.data = [];
    let frameCount = numberOfFrames / 2;

    for(let i = frameCount; i > 0; i--){
      let color = Color('#'+this.colorA).mix(Color('#'+this.colorB), (i*2)/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }

    for(let i = 0; i < frameCount; i++){
      let color = Color('#'+this.colorA).mix(Color('#'+this.colorB), (i*2)/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }

  }

}
