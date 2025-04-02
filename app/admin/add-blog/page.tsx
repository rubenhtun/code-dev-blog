import { handleUploadBlog } from "./action";

const AddBlog = () => {
  const categories = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Web Design",
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Web Performance",
    "DevOps",
    "Web Security",
    "APIs",
    "Database",
    "Testing",
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-orange-100 rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create New Blog Post
      </h1>

      <form action={handleUploadBlog} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white"
            placeholder="Enter your blog title"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-y bg-white"
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white"
          >
            <option value="" disabled selected>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition duration-200"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
