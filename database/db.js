const mongoose = require("mongoose");

const connectToDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || "";
  try {
    await mongoose.connect(MONGO_URI);

    console.log("mongodb connected");
  } catch (e) {
    console.log("error connecting to database : ", e);
    process.exit(1);
  }
};

module.exports = connectToDB;
