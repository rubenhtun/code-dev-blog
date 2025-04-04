"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { upload } from "@vercel/blob/client";
import { handleUpdateBlog } from "@/lib/actions";

interface Blog {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  category: string;
}

interface UpdateBlogFormProps {
  blog: Blog | null;
}

const UpdateBlogForm = ({ blog }: UpdateBlogFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      // Ensure ID is included
      formData.append("updateBlogId", blog?.id || "");

      const imageFile = formData.get("image") as File;

      if (imageFile && imageFile.size) {
        const { url } = await upload(imageFile.name, imageFile, {
          access: "public",
          handleUploadUrl: "/api/upload",
        });
        formData.set("imageUrl", url);
      }

      const response = await handleUpdateBlog(formData);

      if (response.success) {
        toast.success(response.message);
        router.push("/admin");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Update Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-orange-100 rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Edit Blog Post
      </h1>

      <form onSubmit={handleEdit} className="space-y-6">
        {/* Hidden ID */}
        <input type="hidden" name="id" value={blog?.id} />

        {/* Image Upload */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Title */}
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
            defaultValue={blog?.title}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
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
            defaultValue={blog?.description}
            rows={6}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Category */}
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
            defaultValue={blog?.category}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogForm;
