import { MongoClient } from "mongodb";
import { env } from "../utils/env";

const connectionUrl = env.MONGO_URL;

const client = new MongoClient(connectionUrl);

export async function connectDB(){
    try{
        await client.connect();
        console.log('Mongo Connected Successfully.');
    }
    catch(err){
        console.log('Unable to connect with MongoDB.');
        process.exit(1);
    }
}

export const db = client.db();