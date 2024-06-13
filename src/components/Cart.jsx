import { FaOpencart } from "react-icons/fa6";

export default function Cart({ isOpen, onClose, cart, setCart }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out scale-100 max-h-full overflow-auto">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-2xl font-bold">
                Your Cart <span className="text-orange-500">{cart.length}</span>
              </h2>
              <button
                className="border-2 border-gray-500 text-gray-500 rounded-full px-2 py-1 text-xs font-semibold hover:text-orange-500 hover:border-orange-500 transition-colors duration-300"
                onClick={onClose}
              >
                x
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="flex flex-col justify-center items-center text-center h-1/2">
                <FaOpencart className="text-9xl text-orange-500"/>
                <p className="text-gray-500">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col justify-start items-start h-max">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-start gap-4"
                  >
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-20"
                    />
                    <div>
                      <h3 className="text-sm font-bold line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="line-clamp-1 text-gray-500 text-xs">
                        {product.description}
                      </p>
                      <p className="font-semibold text-xs text-light">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cart.length !== 0 && (
              <div className="flex items-center justify-between my-4">
                <button
                  className="mt-4 ring-1 ring-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-700 hover:text-white font-semibold transition-colors duration-300"
                  onClick={() => setCart(" ")}
                >
                  Clear Cart
                </button>
                <button
                  className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors duration-300"
                  onClick={onClose}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
