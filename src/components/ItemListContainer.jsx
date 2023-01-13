import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import Loading from "./Loading";


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const filtrado = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        getDocs(filtrado).then((data) => {
            setProductos(data.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setLoading(false)
        })     
    }, [id]);

    

    return (
        <div>
        <div id="ocultar" className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Bienvenidos a TIENDA YA!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Todo lo que queres a un click de distancia</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>
        </div>
      </div>
    <div className="container">
    <div className="mt-3">
    {
      loading ? <Loading /> : <ItemList productos={productos} />
    }
      </div>
    </div>
    </div>
    )
}


export default ItemListContainer;