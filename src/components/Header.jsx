import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaOpencart, FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between w-full">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaOpencart className="text-3xl font-bold" />
        <h1 className="self-center whitespace-nowrap text-2xl font-bold font-serif dark:text-white">
          <span className="text-orange-500">E</span>-Cart
        </h1>
      </div>
      <div className="flex items-center full">
        <input
          type="text"
          className="outline-none border border-orange-500 rounded-l-md p-2 w-32 md:w-full"
          placeholder="Search..."
        />
        <button className="bg-orange-500 h-full p-2 rounded-r-md border border-orange-500 hover:bg-orange-700 transition-colors duration-300">
          <IoSearch className="text-white h-6 w-6" />
        </button>
      </div>
      <div>
        <button onClick={toggleCart}>
          <FaCartShopping className="text-2xl hover:text-orange-500 transition-colors duration-300" />
        </button>
      </div>

      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
}
