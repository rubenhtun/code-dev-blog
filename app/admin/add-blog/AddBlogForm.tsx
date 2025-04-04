"use client";

import { handleUploadBlog } from "@/lib/actions";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBlogForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Predefined categories for the blog post
  const categories = [
    "AI",
    "API",
    "Hooks",
    "Expo",
    "Docker",
    "TS",
    "RN",
    "Cloud",
    "Tools",
    "UX",
    "Security",
    "Dev",
    "GraphQL",
  ];

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const imageFile = formData.get("image") as File;

      if (imageFile && imageFile.size) {
        const { url } = await upload(imageFile.name, imageFile, {
          access: "public",
          handleUploadUrl: "/api/upload",
        });
        formData.set("imageUrl", url);
      }

      const response = await handleUploadBlog(formData);

      if (response.success) {
        toast.success(response.message);
        router.push("/admin");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Upload Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-orange-100 rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white"
          />
        </div>

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
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
