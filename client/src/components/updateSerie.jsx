import { useState } from "react";
import axios from "axios";

export function UpdateSerie({ _id, handleClose, handleEdited }) {
    const [data, setData] = useState({ title: "", seasonNumber: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", seasonNumber: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update serie");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleEdited();
                handleClose();
            }}
        >
            <label htmlFor="title" className="label">
                Serien Titel
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="seasonNumber" className="label">
                Staffeln
            </label>
            <input
                type="text"
                name="seasonNumber"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}