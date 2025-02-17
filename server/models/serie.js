/* The models folder, will contain the files which will define the MongoDB schema */
const mongoose = require("mongoose");

const SerieSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    seasonNumber: [{ type: Number }]
});

const Serie = mongoose.model("serie", SerieSchema);

module.exports = Serie;