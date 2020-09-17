import express from 'express';
import ConnectionsController from '../controllers/ConnectionsControllers';
import ClassesController from '../controllers/ClassesControler';

const routes = express.Router();

const connectionController = new ConnectionsController();
const classControler = new ClassesController();

routes.get('/classes', classControler.index);
routes.post('/classes', classControler.create);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;
