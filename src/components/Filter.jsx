import { useState } from "react";

export default function Filter({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onFilterChange({ category: value, minPrice, maxPrice, sortOption });
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    onFilterChange({ category, minPrice: value, maxPrice, sortOption });
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    onFilterChange({ category, minPrice, maxPrice: value, sortOption });
  };

  const handleSortOptionChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onFilterChange({ category, minPrice, maxPrice, sortOption: value });
  };

  return (
    <div className="my-8 flex justify-between gap-2 md:gap-6 flex-wrap">
      <div className="flex gap-4 flex-wrap">
        <select
          name="category"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange-200 outline-none border-none"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Category</option>
          <option value="laptops">Laptops</option>
          <option value="mobiles">Phones</option>
          <option value="tablets">Tablets</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 border border-orange-500 outline-none"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 border border-orange-500 outline-none"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div>
        <select
          name="sort"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange-200 outline-none border-none"
          value={sortOption}
          onChange={handleSortOptionChange}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}
