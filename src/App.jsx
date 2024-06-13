import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Footers from "./components/Footers";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                isOpen={isCartOpen}
                onClose={toggleCart}
              />
            }
          />
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
}
