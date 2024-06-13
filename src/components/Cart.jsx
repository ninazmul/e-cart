
export default function Cart({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out scale-100">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <p>Cart items...</p>
            <button
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
