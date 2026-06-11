import { db } from "../scripts/db"; 

export interface WebhookEvent {
    eventId: string;
    event: string;
    payload?: unknown;
    status: "received" | "processing" | "processed" | "failed";
    attempts: number;
    error?: string;
    processedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export const webHookEvents = db.collection<WebhookEvent>("webhook_events");