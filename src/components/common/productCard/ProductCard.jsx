import { Link } from "react-router";
import "./productCard.css";
const ProductCard = ({ product }) => {
  const { title, description, price, id } = product;
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{description}</h2>
      <Link to={`/detalle/${id}`}>Ir al detalle</Link>
    </div>
  );
};

export default ProductCard;
