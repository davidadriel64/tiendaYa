import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";
import Footer from "./components/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/categoria/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Cart />}/>
            <Route path={"/checkout"} element={<Checkout />}/>
            <Route path={"/gracias/:id"} element={<Gracias />}/>
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartContextProvider>
    );
}

export default App;
