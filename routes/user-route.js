import express from 'express'
import { controller } from '../controllers/user-controller.js';
export const userRoutes = express.Router();
userRoutes.get('/profile/:username',controller.profile)
userRoutes.post('/login',controller.login)
userRoutes.post('/register',controller.register)

