import express from 'express'

export const idRoutes = express();

idRoutes.post('/compile')
idRoutes.post('/execute')
idRoutes.get('/question')