import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "EventXperience" })
    .then(() => {
      console.log("MongoDb connected Successfully!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
