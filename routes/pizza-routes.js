import express from 'express'
import { controller } from '../controllers/pizza-controller.js';
export const pizzaRoutes = express.Router();
/* userRoutes.get('/profile/:username',controller.profile)
userRoutes.post('/login',controller.login) */
pizzaRoutes.post('/addpizza',controller.register);
pizzaRoutes.get('/showpizza',controller.show);