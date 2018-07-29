import FadeOn from '../animations/FadeOn';
import Mix from '../animations/Mix';

export default class LightData {
  constructor(id, status = 0) {
    if (!id) {
      throw new Error('LightData requires an ID');
    }
    let animation = new Mix('00FF00','0000FF');
    let animationData = animation.getData();
    this.id = id;
    this.status = status;
    this.lastSeen = new Date();
    this.color = 'FF0000';
    this.loop = animationData.loop;
    this.fps = animationData.fps;
    this.data = animationData.data;
  }
}
