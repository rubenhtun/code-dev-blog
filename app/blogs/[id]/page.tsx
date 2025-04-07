import Layout from "@/components/layout/Layout";
import { getBlog } from "./action";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Define metadata as a function for dynamic content
export async function generateMetadata({
  params,
}: RelatedBlogProps): Promise<Metadata> {
  const { id } = params;
  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.imageUrl || "",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

interface RelatedBlogProps {
  params: { id: string };
}

const RelatedBlog = async ({ params }: RelatedBlogProps) => {
  const { id } = params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto flex flex-col px-4 py-4">
          <p className="text-gray-600">Blog not found.</p>
        </div>
      </Layout>
    );
  }

  const shareUrl = `https://yourdomain.com/blog/${id}`; // Replace with your actual domain
  const shareTitle = encodeURIComponent(blog.title);

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
      <div className="dotted-bg bg-orange-50 min-h-screen">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center p-6 space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
              {blog.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
          </div>
          <div className="relative">
            <img
              src={blog.imageUrl || ""}
              alt={blog.title || "Blog Image"}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed p-2 sm:p-4">
            {blog.description}
          </p>

          {/* Share Section */}
          <div className="share-section p-2 sm:p-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Share this article:
            </h4>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
              </a>
              <a
                href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-200"
                aria-label="Share on Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RelatedBlog;
