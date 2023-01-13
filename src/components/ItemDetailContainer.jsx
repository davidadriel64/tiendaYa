import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db, "productos", id)
        getDoc(item).then((data) => {
            if(data.exists()) {
                setProducto({id:data.id, ...data.data()})
                setLoading(false)
            } else {
                console.log("el producto no existe")
            }
        })
    }, [id]);

    return (
        <div className="container my-5">
            {loading ? <Loading /> : <ItemDetail producto={producto}/>}
        </div>
    );
};

export default ItemDetailContainer;