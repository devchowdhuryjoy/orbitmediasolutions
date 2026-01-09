import React, { useState, useEffect } from "react";
import BlogTop from "./BlogTop/BlogTop";
import BlogList from "./BlogList/BlogList";
import Pagination from "./Pagination/Pagination";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    productSlug: null,
    serviceSlug: null,
    sort: null,
    search: "",
  });

  // Debounce search to reduce API calls
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(filters.search), 500);
    return () => clearTimeout(handler);
  }, [filters.search]);

  // Fetch blogs whenever filters, page, or search changes
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        let url = "";

        if (debouncedSearch?.trim() !== "") {
          // Search API
          url = `https://theorbit.one/api/search/blog?search=${encodeURIComponent(
            debouncedSearch
          )}`;
        } else {
          // Paginated API with filters
          const params = new URLSearchParams({
            page,
            product: filters.productSlug || "",
            service: filters.serviceSlug || "",
            sort: filters.sort || "",
          });
          url = `https://theorbit.one/api/blog/page?${params.toString()}`;
        }

        const res = await fetch(url);
        const json = await res.json();

        // Parse response data
        const blogData =
          debouncedSearch?.trim() !== ""
            ? json?.data?.data || []       // Search API returns data in data.data
            : json?.data?.blogs?.data || []; // Paginated API

        const lastPage =
          debouncedSearch?.trim() !== ""
            ? 1
            : json?.data?.blogs?.last_page || 1;

        setBlogs(blogData);
        setTotalPages(lastPage);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, filters, debouncedSearch]);

  // Handle filters from BlogTop
  const handleFilterChange = (newFilters) => {
    setPage(1); // reset page on filter/search change
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <>
      <BlogTop onChange={handleFilterChange} parentFilters={filters} />
      <BlogList blogs={blogs} loading={loading} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default Blog;
