import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext); // info que siempre es un objeto
  let total = getTotalAmount();
  return (
    <div>
      <h1>Aca van a ir los productos del carrito</h1>
      {cart.map((producto) => {
        return (
          <div
            key={producto.id}
            style={{
              display: "flex",
              gap: "24px",
              border: "1px solid black",
              width: "400px",
            }}
          >
            <h2>{producto.title}</h2>
            <h2> ${producto.price}</h2>
            <h2> x{producto.cantidad}</h2>
            <button onClick={() => removeById(producto.id)}>eliminar</button>
          </div>
        );
      })}
      <h4>El total a pagar es : {total}</h4>
      <button onClick={resetCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
