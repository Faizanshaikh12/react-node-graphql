const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MongoDB Connected Successfully`);
}

module.exports = connectDB;