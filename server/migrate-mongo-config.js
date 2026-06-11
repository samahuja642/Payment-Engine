require("dotenv").config();

const config = {
  mongodb: {
    url: process.env.MONGO_URL || "mongodb://localhost:27018/mydbserver",
    options: {},
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
};

module.exports = config;
