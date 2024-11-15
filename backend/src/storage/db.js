const mongoose = require("mongoose");

const mongoDb = process.env.MONGO_DB;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

module.exports = db;
