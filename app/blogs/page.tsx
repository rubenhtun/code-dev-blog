import Layout from "@/components/layout/Layout";
import { getBlogs } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const Blogs = async () => {
  // Fetching all the blogs from the database
  const blogs = await getBlogs();

  // Get unique blog categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <Layout>
      <style>
        {`
          .dotted-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23f3a183'/%3E%3C/svg%3E");
            background-size: 20px 20px;
          }
        `}
      </style>
      <section className="bg-orange-50 py-12 dotted-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 focus:bg-teal-600 focus:text-white focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout for Blogs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-7px_7px_0px_#4b5563] cursor-pointer"
              >
                <Image
                  src={blog.imageUrl || ""}
                  alt={blog.title}
                  width={600}
                  height={160}
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
    </Layout>
  );
};

export default Blogs;
