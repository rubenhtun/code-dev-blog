import Layout from "@/components/layout/Layout";
import { getBlog } from "./action";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface RelatedBlogProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "About Mro NLCA",
  description: "About Mro National Literature And Culture Association",
  openGraph: {
    title: "About Mro NLCA",
    description: "About Mro National Literature And Culture Association",
    images: [
      {
        url: "/images/formation-of-mronlca.jpeg",
        width: 1200,
        height: 630,
        alt: "Mro NLCA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const RelatedBlog = async ({ params }: RelatedBlogProps) => {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <Layout>
        <div className="max-w-6xl flex flex-col">
          <p className="text-gray-600">Blog not found.</p>
        </div>
      </Layout>
    );
  }

  // Get the current URL for sharing (assuming this is deployed)
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://yourdomain.com/blog/${id}`;
  const shareTitle = encodeURIComponent(blog.title);
  const shareDescription = encodeURIComponent(blog.description);

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
          <p className="text-gray-700 text-base leading-relaxed p-2">
            {blog.description}
          </p>

          {/* Share Section */}
          <div className="share-section p-2 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Share this article:
            </h4>
            <div className="flex space-x-4">
              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>

              {/* Twitter/X Share */}
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
              </a>

              {/* Telegram Share */}
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
