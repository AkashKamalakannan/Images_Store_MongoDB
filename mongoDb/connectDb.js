//required mongoose 
const mongoose = require("mongoose");
require('dotenv').config();

// Getting MongoDb URL form env file
const db=process.env.MONGODB_URL;
// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true    
    });
    console.log("mongoDB connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
