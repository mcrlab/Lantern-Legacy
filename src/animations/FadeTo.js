import Animation from './Animation';
const Color = require('color');
const frameRate = 16;
const numberOfFrames = 128;

export default class FadeTo extends Animation {
  constructor(fadeFrom = 'FF0000', fadeTo = '00FF00'){
    super(fadeTo, numberOfFrames, frameRate);
    this.name = 'FadeTo';
    this.loop = 0;
    this.fadeFrom = fadeFrom;
    this.fadeTo = fadeTo;
    this.constructAnimation();
  }

  constructAnimation(){
    this.data = [];

    for(let i = 0; i < numberOfFrames; i++){
      let color = Color('#'+this.fadeFrom).mix(Color('#'+this.fadeTo), i/numberOfFrames).hex();
      this.data.push(this.fillFrame(color.replace('#','')));
    }
    this.data.push(this.fillFrame(this.fadeTo));
  }

}
