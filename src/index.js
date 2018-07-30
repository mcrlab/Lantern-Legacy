import LightingController from './controllers/LightingController';
import MQTTBroker from './lib/MQTTBroker';
import createApplication from './app'
const http = require('http');

const lightController = new LightingController(new MQTTBroker());
const app    = createApplication(lightController);
const server = http.createServer(app);

server.listen(3001, () => {
    console.log('received: %s', server.address().port);
});
