/* This file will contain the required code for connecting to the MongoDB database. */
const mongoose = require("mongoose");

/* import MONGO_URI from .env */
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            /* useNewUrlParser: true,
            useUnifiedTopology: true, */
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;