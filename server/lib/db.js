import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    const base = (process.env.MONGODB_URI || "").replace(/\/+$/, "");
    await mongoose.connect(`${base}/chat-app`);
  } catch (error) {
    console.log(error);
  }
};
