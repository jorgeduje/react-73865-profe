import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  // items[0] ---> {}.title
  // items[0] ---> undefined
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(productsMock);
    });

    getProducts.then((res) => setItems(res));
  }, []);

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
