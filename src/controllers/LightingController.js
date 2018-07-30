import Light from '../models/Light';
import ColorCompression from '../lib/ColorCompression';
import LightNotFoundError from '../exceptions/LightNotFoundError';
import FadeTo from '../animations/FadeTo';

const MAX_LIGHT_NO_COMMUNICATION = 15000;
const TIME_BETWEEN_CLEANUPS = 1000;

export default class LightingController {
  constructor(lightBroker) {
    this.lights = new Map();
    this.lightBroker = lightBroker;

    this.lightBroker.init((topic, message) => {
      this.handleMessage(message);
    });

    this.setUpLightCleaning();
  }

  setUpLightCleaning() {
    this.clean = setInterval(() => {
      const now = new Date();
      this.cleanLights(now);
    }, TIME_BETWEEN_CLEANUPS);
  }

  handleMessage(message) {
    const data = message.toString().split("|");
    const id = data[0];
    const color = ColorCompression.decompress(data[1]);
    if (!this.lights.has(id)) {
      this.registerNewLight(id);
    } else {
      const update = {
            lastSeen: new Date(),
            color: color
          };
      this.refreshLight(id, update);
    }
  }

  cleanLights(now) {
    this.lights.forEach((light) => {
      if ((now - light.getLastSeen()) > MAX_LIGHT_NO_COMMUNICATION) {
        this.removeLight(light.getId());
      }
    });
  }

  registerNewLight(id) {
    const newLight = new Light(id, this.lightBroker);
    this.lights.set(id, newLight);
    this.updateLight(id, { status: 1});
  }

  getLights() {
    return this.lights;
  }


  addLight(id){
      const newLight = new Light(id, this.lightBroker);
      this.lights.set(id, newLight);
      return newLight;
  }

  removeLight(id){
    this.lights.delete(id);
  }


  updateLightColor(id, color){
      const light = this.lights.get(id);
      if(light) {
          let lightData = light.getData()
          const animation = new FadeTo(lightData.color, color);
          const update = animation.getData();
          light.update(update);
          data = light.getData()
          this.lightBroker.publish(light.getAddress(), light.getInstruction());
          return data;
      } else {
          throw new LightNotFoundError();
      }
  }


  updateLight(id, update){
      const light = this.lights.get(id);
      if(light) {
          light.update(update);
          const data = light.getData()
          this.lightBroker.publish(light.getAddress(), light.getInstruction());
          return data;
      } else {
          throw new LightNotFoundError();
      }
  }

  refreshLight(id, update){
      const light = this.lights.get(id);
      if(light) {
          light.update(update);
          const data = light.getData()
      } else {
          throw new LightNotFoundError();
      }
  }

  updateAllLights(update){
      this.lights.forEach((light) => {
          light.update(update);
          this.lightBroker.publish(light.getAddress(), light.getInstruction());
      });
      const data = this.getAllLightsData();
      return data;
  }

  getAllLightsData() {
    const lights = [];
    this.lights.forEach((light) => {
      lights.push(light.getData());
    });
    return lights;
  }

  getLightDataById(id) {
    const light = this.lights.get(id);
    if(light) {
      return light.getData();
    } else {
      throw new LightNotFoundError();
    }
  }
}
