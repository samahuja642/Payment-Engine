export const env = {
    PORT: process.env.PORT ?? 8000,
    MONGO_URL: process.env.MONGO_URL ?? 'mongodb://localhost:27017/mydb',
    REDIS_URL: process.env.REDIS_URL ?? 'redis://localhost:6379'
}