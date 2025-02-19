import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateSerie } from "./updateSerie"; 

function SerieCard({ data, handleEdit, handleDelete }) { 
    const { _id, title, seasonNumber } = data;

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{seasonNumber}</p>
            </div>

            <div className="button-container">
                <button className="button" name={_id} onClick={handleEdit}> 
                    edit
                </button>
                <button className="button" name={_id} onClick={handleDelete}>
                    delete
                </button>
            </div>
        </li>
    );
}

export function ShowSerieList() {
    const [serie, setSerie] = useState([]);
    const [open, setOpen] = useState(false); 
    const [id, setId] = useState(""); 
    const [update, setUpdate] = useState(false); 

    useEffect(
        function () {
            axios
                .get("http://localhost:8000/api/serie")
                .then((res) => {
                    console.log(res.data);
                    setSerie(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [update] 
    );

    function handleEdit(e) { 
        setId(e.target.name); 
        setOpen(true);
    }

    function handleUpdate() { 
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleDelete(e) { 
        axios.delete(`http://localhost:8000/api/serie/${e.target.name}`);

        setSerie((data) => {
            return data.filter((serie) => serie._id !== e.target.name);
        });
    }

    function handleClose() { 
        setId("");
        setOpen(false);
    }

    return (
        <section className="container">
            <Link to="/create-serie" className="button-new">
                <button className="button">New</button>
            </Link>
            <section className="contents">
                <h1>Serie</h1>
                <ul className="list-container">
                    {serie.map((data) => (
                        <SerieCard
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </section>
        
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateSerie
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}