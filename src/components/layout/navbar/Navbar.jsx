import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "64px",
        backgroundColor: "green",
        color: "white",
        alignItems: "center",
      }}
    >
      <Link style={{ color: "white" }} to="/">
        Tienda Zapatillas
      </Link>
      <ul
        style={{
          display: "flex",
          gap: "8px",
          listStyle: "none",
        }}
      >
        <Link to="/category/deportivas">Deportivas</Link>
        <Link to="/category/urbanas">Urbanas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};
