import Layout from "@/components/layout/Layout";
import { getBlog } from "./action";

interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string | null;
}

// Define props for the Server Component
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
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="group bg-gradient-to-br from-white to-gray-50">
          <div className="text-center p-6 space-y-3">
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
              {blog.title}
            </h3>

            {/* Category Tag */}
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={blog.imageUrl || ""}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
            {blog.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RelatedBlog;
