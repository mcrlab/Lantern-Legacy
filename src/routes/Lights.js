import express from 'express';
import { lightDataValidator, colorValidator } from '../validators/validators';
import FadeOn from '../animations/FadeOn';
import FadeOff from '../animations/FadeOff';

function createRoutes(lightingController) {
    const router = express.Router();

    router.get('/', (req, res) => {
        const response = lightingController.getAllLightsData();
        res.json(response);
    });

    router.get('/:light', (req, res) => {
        try {
            const response = lightingController.getLightDataById(req.params.light);
            res.json(response);
        } catch (error) {
            res.status(error.status).json(error);
        }
    });

    router.post('/:light/raw', (req, res) => {
        try {
            const validatedInput = lightDataValidator(req.body);
            let response = lightingController.updateLight(req.params.light, validatedInput)
            res.json(response);
        } catch (error) {
            res.status(error.status).json(error);
        }
    });

    router.post('/:light/on', (req, res) => {
      try {
        let color = colorValidator(req.body.color);
        let response = lightingController.updateLightColor(req.params.light, validatedInput)
        res.json(response);
      } catch (error){
        error.status = 400;
        res.status(error.status).json(error);
      }
    });

    router.post('/:light/off', (req, res) => {
      try {
        let response = lightingController.updateLightColor(req.params.light, "000000")
        res.json(response);
      } catch (error) {
        error.status = 400;
        res.status(error.status).json(error);
      }
    });



    return router;
}

export default createRoutes;
