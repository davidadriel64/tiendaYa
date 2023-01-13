import React from "react";
import { useParams, Link } from "react-router-dom";

const Gracias = () => {
    const {id} = useParams()

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu numero de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-danger">Volver a la Pagina Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Gracias