const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.DB_URL;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

module.exports = connectDB;
