import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext)

    if(cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert"> No hay productos agregados!</div>
                        <Link to={"/"} className="btn btn-danger">Volver a la Pagina Principal</Link>
                     </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-danger">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                cart.map(producto => (
                                    <tr key={producto.id}>
                                        <td><img src={producto.imagen} alt={producto.nombre} width={80} /></td>
                                        <td className="align-middle">{producto.nombre}</td>
                                        <td className="align-middle">{producto.quantity}</td>
                                        <td className="align-middle">${producto.quantity * producto.precio}</td>
                                        <td className="align-middle text-end"><Link onClick={() => removeItem(producto.id)}><img src={"/images/trash3.svg"} alt="Eliminar Producto" widht={32} /></Link></td>
                                    </tr>
                                ))           
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>
                                    <td><Link to={"/checkout"} className="btn btn-success text-end">Finalizar Compra</Link></td>
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart