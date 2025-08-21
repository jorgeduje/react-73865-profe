import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
const Checkout = () => {
  // nombre, telefono , email
  const [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(user);
    // realizar la compra efectiva y guardar en la DB
    let total = getTotalAmount();
    let objetoCompra = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let res = addDoc(ordersCollection, objetoCompra);
    res
      .then((res) => {
        setOrderId(res.id);
        resetCart();
      })
      .catch((error) => {
        alert("ocurrio un error al comprar");
        console.log(error);
      });

    // actualizar todos los productos que compre

    let productosCollection = collection(db, "products");
    objetoCompra.items.forEach((elemento) => {
      let productRef = doc(productosCollection, elemento.id);
      updateDoc(productRef, { stock: elemento.stock - elemento.cantidad });
    });
  };

  const handleChange = (evento) => {
    setUser({ ...user, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Aca el formulario de compra</h1>
      {orderId ? (
        <h2>El numero de orden es {orderId}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <button>Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
