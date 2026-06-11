module.exports = {
    async up(db){
        await db.createCollection("webhook_events",{
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["eventId","event","status","attempts","createdAt","updatedAt"],
                    properties: {
                        eventId: { bsonType: "string" },
                        event: { bsonType: "string" },
                        payload: { bsonType: "object" },
                        status: { bsonType: "string", enum: ["received","processing","processed","failed"]},
                        attempts: { bsonType: "number" },
                        error: { bsonType: "string" },
                        processedAt: { bsonType: "date" },
                        createdAt: { bsonType: "date" },
                        updatedAt: { bsonType: "date" },
                    },
                }
            }
        });
        await db.collection("webhook_events").createIndex({ eventId: 1 }, { unique: true });
        await db.collection("webhook_events").createIndex({ status:1, createdAt: -1 });
        await db.collection("webhook_events").createIndex({ event:1 });
    },
    async down(db){
        await db.collection("webhook_events").drop();
    }
}