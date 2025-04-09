import React from "react";
import { getBlogs } from "@/lib/actions";
import Link from "next/link";

const OurBlogs = async () => {
  const blogs = await getBlogs();
  const ourLatestBlogs = blogs
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  return (
    <>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-8">
            Our <span className="text-teal-600">Blogs</span>
          </h2>

          {/* Grid Layout for Blogs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ourLatestBlogs.map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-7px_7px_0px_#4b5563] cursor-pointer"
              >
                <img
                  src={blog.imageUrl || "blog-image.jpg"}
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

          {/* More Blogs Button */}
          <div className="text-center mt-8">
            <Link
              href="/blogs"
              className="inline-block px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-500 transition-all duration-300"
            >
              More Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlogs;
