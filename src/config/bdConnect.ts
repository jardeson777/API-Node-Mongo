import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://root:123@cluster0.4okbtts.mongodb.net/teste-node",
);

const db = mongoose.connection;

export default db;
