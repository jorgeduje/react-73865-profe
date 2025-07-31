import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

export const CartWidget = () => {
  return (
    <Link style={{ color: "white" }} to="/carrito">
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <FaShoppingCart size={30} />
          <div
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#ef4444",
              color: "white",
              borderRadius: "50%",
              minWidth: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "0 4px",
            }}
          >
            5
          </div>
        </div>
      </div>
    </Link>
  );
};

// const Link = ({to}) => {
//   return (
//     <a href={to}></a>
//   )
// }

// export default Link

// <Link to="">
