import { BrowserRouter, Routes, Route } from "react-router";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import { Navbar } from "./components/layout/navbar/Navbar";
import NotFound from "./components/pages/notFound/NotFound";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Empiezo a crear mis rutas */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/auth/login" element={<h1>Login</h1>} />
        <Route path="/auth/register" element={<h1>registro</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
