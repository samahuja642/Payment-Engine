import { createClient } from "redis";
import { env } from "../utils/env";

const connectionUrl = env.REDIS_URL;

export const redisClient = createClient({
    url: connectionUrl,
});

redisClient.on("error",(err)=>{
    console.error("Redis Client Error", err);
});

export async function connectRedis(){
    try{
        await redisClient.connect();
        console.log('Redis connected successfully.');
    }catch(err){
        console.error('Unable to connect to Redis.',err);
    }
}