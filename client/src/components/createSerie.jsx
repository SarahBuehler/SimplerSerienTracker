import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateSerie() {
    const [data, setData] = useState({ title: "", seasonNumber: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const serie = {
            title: data.title,
            description: data.seasonNumber,
        };

        console.log({ serie });
        axios
            .post("http://localhost:8000/api/todo", data)
            .then((res) => {
                setData({ title: "", seasonNumber: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            <Link to="/" className="button-back">
                <button type="button" className="button">
                    back
                </button>
            </Link>
            <section className="contents">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate
                >
                    <label className="label" htmlFor="title">
                        Serien Titel
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="seasonNumber">
                        Staffeln
                    </label>
                    <input
                        type="text"
                        name="seasonNumber"
                        value={data.seasonNumber}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit" className="button">
                        create serie
                    </button>
                </form>
            </section>
        </section>
    );
}