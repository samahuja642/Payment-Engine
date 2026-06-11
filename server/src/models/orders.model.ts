import { ObjectId } from "mongodb";
import { db } from "../scripts/db";

export interface StatusHistory {
    status: string;
    timestamp: Date;
    reason?: string;
}

export interface Order {
    userId: ObjectId;
    amount: number; // in paise
    currency: string;
    status: "pending" | "paid" | "failed" | "fulfilled";
    razorpayOrderId?: string;
    statusHistory: StatusHistory[];
    createdAt: Date;
    updatedAt: Date;
}

export const orders = db.collection<Order>("orders");