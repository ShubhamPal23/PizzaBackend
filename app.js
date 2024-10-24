import express from 'express'
import { userRoutes } from './routes/user-route.js';
import { idRoutes } from './routes/ide-routes.js';
import cors from 'cors';
import { pizzaRoutes } from './routes/pizza-routes.js';
//const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use('/',userRoutes);
app.use('/',pizzaRoutes);
app.use('/',idRoutes);
/* app.get('/home',(request,response)=>{
    response.send("Hello nice meeting You");
})
app.get('/urljson',(request,response)=>{
    response.json({'question':'this is a question'})
}) */
app.use((request,response,next)=>{response.json({message:"ERROR 404 >>>>NOT FoUND"})})
app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server started at 4000");
    }
})