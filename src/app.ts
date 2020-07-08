import express from 'express';
import cors from 'cors'
import {TinderController} from "./tinder/tinder.controller";


express().use(cors()).use(express.json()).use('/', new TinderController().router)
    .listen(process.env.PORT || 3000, () => console.log('Server started'))

