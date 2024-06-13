import { items } from "../../public/data";
import Filter from "../components/Filter";
import { Card } from "flowbite-react";


export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((product) => {
          return (
            <div key={product._id}>
              <Card
                className="max-w-sm h-full"
                imgAlt="Product Image"
                imgSrc={product.imgSrc}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">${product.price}</h3>
                  <button className="rounded-2xl border border-orange-500 text-orange-500 py-2 px-4 hover:bg-orange-500 hover:text-white font-semibold transition-all duration-300 ease-in-out">
                    Add to Cart
                  </button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
