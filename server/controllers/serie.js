/* The controllers folder will contain the files which will have the methods for the end points to communicate with the database. */
const Serie = require("../models/serie");

exports.getAllSerie = (req, res) => {
    Serie.find()
        .then((serie) => res.json(serie))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Serie not found", error: err.message })
        );
};

exports.postCreateSerie = (req, res) => {
    Serie.create(req.body)
        .then((data) => res.json({ message: "Serie added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add serie", error: err.message })
        );
};

exports.putUpdateSerie = (req, res) => {
    Serie.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update serie", error: err.message })
        );
};

exports.deleteSerie = (req, res) => {
    Serie.findByIdAndDelete(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "serie deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "serie not found", error: err.message })
        );
};