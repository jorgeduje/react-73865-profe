import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams(); // {}.name

  // determinar en base al name si es truthy o false , determinar si quiero
  // todos los productos o solo una parte
  // undefine ----> home ----> todos
  // "dsadsada" ---> category ---> una parte
  useEffect(() => {
    const productosFiltrados = productsMock.filter(
      (producto) => producto.category === name
    ); // []
    const getProducts = new Promise((resolve, reject) => {
      resolve(name ? productosFiltrados : productsMock);
    });

    getProducts.then((res) => setItems(res));
  }, [name]);

  return (
    <div>
      <h1>Mis productos</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
// []
// [con productos]
