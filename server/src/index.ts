import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { env } from './utils/env';
import { success } from './utils/response';
import { HttpStatus } from './constants/httpStatus';
import { connectDB } from "./scripts/db";
import { connectRedis } from "./scripts/redis";

const app = express();

app.use(express.json());

app.get('/test',(_req,res)=>{
    res.json(success("Healthy",HttpStatus.OK,"Server is up and running."))
})

const initalSetup = async ()=>{
    await connectDB();
    await connectRedis();
    app.listen(env.PORT,async ()=>{
        console.log('App is listening on',env.PORT);
    })
}

initalSetup();