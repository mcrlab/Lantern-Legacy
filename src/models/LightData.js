import Blink from '../animations/Blink';
import Pulse from '../animations/Pulse';
import FadeOff from '../animations/FadeOff';
import FadeOn from '../animations/FadeOn';

export default class LightData {
  constructor(id, status = 0) {
    if (!id) {
      throw new Error('LightData requires an ID');
    }
    let animation = new FadeOn('FFFF00');
    let animationData = animation.getData();
    this.id = id;
    this.status = status;
    this.lastSeen = new Date();
    this.memory = 0;
    this.color = 'FFFF00';
    this.loop = animationData.loop;
    this.fps = animationData.fps;
    this.data = animationData.data;
  }
}
