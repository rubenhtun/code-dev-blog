"use client";

import Layout from "@/components/layout/Layout";
import { getBlogs } from "@/lib/actions";
import { Blog } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadedBlogs, setLoadedBlogs] = useState(4);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      const allBlogs = await getBlogs();

      // Sort blogs by date
      const sortedBlogs = allBlogs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setBlogs(sortedBlogs);
      const uniqueCategories = [
        "All",
        ...new Set(sortedBlogs.map((blog) => blog.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setLoadedBlogs((prev) => prev + 4);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 text-sm font-medium border rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout for Blogs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBlogs.slice(0, loadedBlogs).map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-7px_7px_0px_#4b5563] cursor-pointer"
              >
                <img
                  src={blog.imageUrl || "default-image.jpg"}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {blog.title}
                  </h3>
                  <span className="text-teal-600 text-sm font-medium mb-2 block">
                    {blog.category}
                  </span>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-teal-600 hover:text-teal-500 font-medium transition-colors duration-200">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {loadedBlogs < filteredBlogs.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="inline-block px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-500 transition-all duration-300 cursor-pointer"
              >
                More Blogs
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
