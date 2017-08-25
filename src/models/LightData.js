import SolidColor from '../animations/SolidColor'

export default class LightData {
  constructor(id, status = 0, color = 'FFFFFF') {
    if (!id) {
      throw new Error('LightData requires an ID');
    }
    this.id = id;
    this.status = status;
    this.color = color;
    this.animation = 'None';
    this.lastSeen = new Date();
    this.memory = 0;
  }
}
