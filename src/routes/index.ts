import express from 'express';
import UsersController from '../controllers/UsersControllers';
import ClassesController from '../controllers/ClassesControler';

const routes = express.Router();

const userController = new UsersController();
const classControler = new ClassesController();

routes.post('/', classControler.create);

routes.post('/users', userController.create);

export default routes;
