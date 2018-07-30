import FadeTo from '../animations/FadeTo';

export default class LightData {
  constructor(id, status = 0) {
    if (!id) {
      throw new Error('LightData requires an ID');
    }
    let animation = new FadeTo('000000','0000FF');
    let animationData = animation.getData();
    this.id = id;
    this.status = status;
    this.lastSeen = new Date();
    this.color = animation.defaultColor;
    this.loop = animationData.loop;
    this.fps = animationData.fps;
    this.data = animationData.data;
  }
}
