import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaOpencart, FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";

export default function Header({ onSearch, cart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="h-20 flex items-center justify-between w-full pr-4 md:pr-0">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaOpencart className="text-3xl font-bold" />
        <h1 className="self-center whitespace-nowrap text-2xl font-bold font-serif dark:text-white">
          <span className="text-orange-500">E</span>-Cart
        </h1>
      </div>
      <div className="hidden md:flex items-center full">
        <input
          type="text"
          className="outline-none border border-orange-500 rounded-l-md p-2 w-32 md:w-full"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="bg-orange-500 h-full p-2 rounded-r-md border border-orange-500 hover:bg-orange-700 transition-colors duration-300">
          <IoSearch className="text-white h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center full md:hidden">
        <input
          type="text"
          className="outline-none border border-orange-500 rounded-l-full border-r-0 p-2 w-20 md:w-full"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className=" h-full p-2 rounded-r-full border-l-0 border border-orange-500 transition-colors duration-300">
          <IoSearch className="text-orange-500 hover:text-orange-700 h-6 w-6" />
        </button>
      </div>
      <div className="relative cursor-pointer" onClick={toggleCart} >
        <button>
          <FaCartShopping className="text-2xl hover:text-orange-500 transition-colors duration-300" />
        </button>
        <p className="absolute -top-4 -right-4 w-6 h-6 bg-orange-500 text-white rounded-full text-sm flex items-center justify-center">
          {cart.length}
        </p>
      </div>

      <Cart isOpen={isCartOpen} onClose={toggleCart} cart={cart} />
    </div>
  );
}
