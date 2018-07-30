import LightData from './LightData';
import LightInstruction from '../lib/LightInstruction';

export default class Light {
    constructor(id) {
        if (!id) {
            throw new Error('Light requires an ID');
        }

        this.lightData = new LightData(id);
        this.address = `/${id}`;
    }

    update(update = {}) {
        this.lightData = Object.assign(
            new LightData(this.getId()),
            this.lightData,
            update);
        return this.getData(); 
    }


    getData() {
        let object = Object.assign({}, this.lightData);
        return object;
    }

    getId() {
        return this.lightData.id;
    }

    getAddress(){
        return this.address;
    }

    getInstruction() {
        let instruction = '';

        const lightData = this.getData();
        instruction = LightInstruction.animate(lightData.data, lightData.fps, lightData.loop);


        return instruction;
    }


    getLastSeen() {
        return this.lightData.lastSeen;
    }


}
