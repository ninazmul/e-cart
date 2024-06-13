import { useState } from "react";
import { items } from "../../public/data";
import Filter from "../components/Filter";
import { Card } from "flowbite-react";
import Header from "../components/Header";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters) => {
    setCategory(filters.category);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setSortOption(filters.sortOption);
  };

  const applyFilters = (items) => {
    let filteredItems = items;

    if (searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      filteredItems = filteredItems.filter(
        (item) => item.category === category
      );
    }

    if (minPrice) {
      filteredItems = filteredItems.filter(
        (item) => item.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice) {
      filteredItems = filteredItems.filter(
        (item) => item.price <= parseFloat(maxPrice)
      );
    }

    if (sortOption) {
      filteredItems = filteredItems.sort((a, b) => {
        switch (sortOption) {
          case "asc price":
            return a.price - b.price;
          case "desc price":
            return b.price - a.price;
          case "asc lastUpdated":
            return new Date(a.lastUpdated) - new Date(b.lastUpdated);
          case "desc lastUpdated":
            return new Date(b.lastUpdated) - new Date(a.lastUpdated);
          default:
            return 0;
        }
      });
    }

    return filteredItems;
  };

  const filteredItems = applyFilters(items);

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <Header onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((product) => (
          <div key={product.id}>
            <Card
              className="max-w-sm h-full"
              imgAlt="Product Image"
              imgSrc={product.imgSrc}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
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
        ))}
      </div>
    </div>
  );
}
