module.exports = {
    async up(db) {
        await db.createCollection("orders", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["userId", "amount", "currency", "status", "statusHistory", "createdAt", "updatedAt"],
                    properties: {
                        userId: { bsonType: "objectId" },
                        amount: { bsonType: "number" },
                        currency: { bsonType: "string" },
                        status: { bsonType: "string", enum: ["pending", "paid", "failed", "fulfilled"] },
                        razorpayOrderId: { bsonType: "string" },
                        statusHistory: {
                            bsonType: "array",
                            items: {
                                bsonType: "object",
                                required: ["status", "timestamp"],
                                properties: {
                                    status: { bsonType: "string" },
                                    timestamp: { bsonType: "date" },
                                    reason: { bsonType: "string" },
                                },
                            },
                        },
                        createdAt: { bsonType: "date" },
                        updatedAt: { bsonType: "date" },
                    },
                },
            },
        });

        await db.collection("orders").createIndex({ userId: 1 });
        await db.collection("orders").createIndex({ razorpayOrderId: 1 }, { unique: true, sparse: true });
        await db.collection("orders").createIndex({ status: 1 });
    },

    async down(db) {
        await db.collection("orders").drop();
    },
};
