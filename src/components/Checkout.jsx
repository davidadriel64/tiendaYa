import { addDoc, doc, writeBatch, collection, getDoc, getFirestore } from "firebase/firestore";
import React, { useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const generarOrden = () => {
        const fecha = new Date()
        const orden = {
            buyer: {nombre:nombre, telefono:telefono, email:email},
            items: cart.map((item) => ({id:item.id, titulo:item.nombre, cantidad:item.quantity, precio:item.precio, precio_total:item.quantity * item.precio})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "ordenes")
        addDoc(ordersCollection, orden).then((data) => {
            setOrdenId(data.id)

            const batch = writeBatch(db)

            cart.forEach(item => {
                let producto = doc(db, "productos", item.id)
                getDoc(producto).then((data) => {
                    let datos_productos = data.data()
                    batch.update(producto, {stock:datos_productos.stock - item.quantity})
                    batch.commit()
                })
            })
            clear()
        })
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput= {(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Telefono" onInput= {(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Email" onInput= {(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>  
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                                {
                                cart.map(producto => (
                                    <tr key={producto.id}>
                                        <td><img src={producto.imagen} alt={producto.nombre} width={80} /></td>
                                        <td className="align-middle">{producto.nombre}</td>
                                        <td className="align-middle">{producto.quantity}</td>
                                        <td className="align-middle">${producto.quantity * producto.precio}</td>                                      
                                    </tr>
                                ))           
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>                             
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                                {ordenId !== "" ? <Navigate to={"/gracias/" + ordenId}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout