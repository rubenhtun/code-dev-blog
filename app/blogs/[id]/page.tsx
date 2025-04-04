import Layout from "@/components/layout/Layout";
import { getBlog } from "./action";

interface RelatedBlogProps {
  params: { id: string };
}

const RelatedBlog = async ({ params }: RelatedBlogProps) => {
  // Fetching the blog ID from params
  const { id } = await params;
  // Fetching the related blog from the database
  const blog = await getBlog(id);

  // Handle case where blog is null (e.g., not found)
  if (!blog) {
    return (
      <Layout>
        <div className="max-w-6xl flex flex-col">
          <p className="text-gray-600">Blog not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <style>
        {`
          .dotted-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='1' fill='%23f3a183'/%3E%3C/svg%3E");
            background-size: 10px 10px;
          }
        `}
      </style>
      <div className="dotted-bg bg-orange-50">
        <div className="group max-w-5xl mx-auto py-4 px-4">
          <div className="text-center p-6 space-y-3">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
              {blog.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
          </div>
          <div className="relative">
            <img
              src={blog.imageUrl || ""}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed p-6">
            {blog.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RelatedBlog;
