import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Search } from "lucide-react";

const BlogTop = ({ onChange, parentFilters }) => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  // Local filter state mirrors parent
  const [filters, setFilters] = useState(parentFilters);

  useEffect(() => {
    const fetchBlogPage = async () => {
      try {
        const res = await fetch("https://theorbit.one/api/blog/page");
        const json = await res.json();
        setProducts(json.data.itemProducts || []);
        setServices(json.data.itemService || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogPage();
  }, []);

  const updateFilter = (data) => {
    const updated = { ...filters, ...data };
    setFilters(updated);
    onChange(updated); // send to parent
  };

  return (
    <div className="container mx-auto flex flex-wrap gap-3">
      {/* Products */}
      <div className="dropdown">
        <button className="btn bg-white border">
          Products <TiArrowSortedDown />
        </button>
        <ul className="dropdown-content menu bg-white shadow w-72 p-2">
          {products.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => updateFilter({ productSlug: item.slug })}
              >
                {item.product.product_name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="dropdown">
        <button className="btn bg-white border">
          Service <TiArrowSortedDown />
        </button>
        <ul className="dropdown-content menu bg-white shadow w-72 p-2">
          {services.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => updateFilter({ serviceSlug: item.slug })}
              >
                {item.banner_title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sort */}
      <div className="dropdown">
        <button className="btn bg-white border">
          Sort By <TiArrowSortedDown />
        </button>
        <ul className="dropdown-content menu bg-white shadow w-56 p-2">
          <li>
            <button onClick={() => updateFilter({ sort: "newest" })}>
              Newest First
            </button>
          </li>
          <li>
            <button onClick={() => updateFilter({ sort: "oldest" })}>
              Oldest First
            </button>
          </li>
        </ul>
      </div>

      {/* Search */}
      <div className="ml-auto flex h-12 max-w-md w-full">
        <input
          className="w-full px-4 border rounded-l-full"
          placeholder="Search blogs..."
          value={filters.search}
          onChange={(e) => updateFilter({ search: e.target.value })}
        />
        <button
          className="px-4 bg-indigo-600 text-white rounded-r-full"
          onClick={() => onChange(filters)}
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default BlogTop;
