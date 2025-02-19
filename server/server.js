require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db"); 

const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

// routes
const serie = require("./routes/serie");

// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/serie", serie);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});