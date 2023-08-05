// config/db.js
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/your_database'; // Replace with your MongoDB connection URI and database name

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
