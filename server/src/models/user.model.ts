import { db } from "../scripts/db"; 

export interface User {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export const users = db.collection<User>("users");