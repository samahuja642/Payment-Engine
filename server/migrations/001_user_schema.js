module.exports = {
    async up(db) {
        await db.createCollection("users", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["name", "email", "password", "createdAt", "updatedAt"],
                    properties: {
                        name: { bsonType: "string" },
                        email: { bsonType: "string" },
                        password: { bsonType: "string" },
                        createdAt: { bsonType: "date" },
                        updatedAt: { bsonType: "date" },
                    },
                },
            },
        });

        await db.collection("users").createIndex({ email: 1 }, { unique: true });
    },

    async down(db) {
        await db.collection("users").drop();
    },
};