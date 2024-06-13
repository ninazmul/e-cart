
export default function Filter() {


  return (
    <div className="my-8 flex justify-between gap-2 md:gap-6 flex-wrap">
      <div className="flex gap-4 flex-wrap">
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange-200 outline-none border-none"
        >
          <option value="">Category</option>
          <option value="physical">New Arrival</option>
          <option value="digital">Popular</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 border border-orange-500 outline-none"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 border border-orange-500 outline-none"
        />

        <button className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange-200 outline-none">
          All Filters
        </button>
      </div>
      <div>
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange-200 outline-none border-none"
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
