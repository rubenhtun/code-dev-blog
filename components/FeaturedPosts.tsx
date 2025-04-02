import React from "react";

const FeaturedPosts = () => {
  // Sample blog post data
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to manage state and side effects in your applications.",
      date: "March 25, 2025",
    },
    {
      id: 2,
      title: "Tailwind CSS: A Utility-First Approach",
      excerpt:
        "Explore the power of Tailwind CSS for rapid and responsive UI development.",
      date: "March 20, 2025",
    },
    {
      id: 3,
      title: "Building a Blog with Next.js",
      excerpt:
        "A step-by-step guide to creating a performant blog using Next.js.",
      date: "March 15, 2025",
    },
  ];

  return (
    <>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .card-appear {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <section className="bg-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 fade-in">
            Featured <span className="text-teal-600">Posts</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 card-appear"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-500 font-medium transition-colors duration-200"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedPosts;
