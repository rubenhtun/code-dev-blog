import UpdateBlogForm from "./UpdateBlogForm";
import { prisma } from "@/lib/prisma";

interface EditBlogProps {
  params: { id: string };
}

const EditBlog = async ({ params }: EditBlogProps) => {
  // Fetching the blog ID from params
  const { id } = await params;
  // Fetching the blog from the database using Prisma
  const blog = await prisma.blog.findUnique({ where: { id } });

  const formattedBlog = blog
    ? { ...blog, imageUrl: blog.imageUrl || "" }
    : null;

  return <UpdateBlogForm blog={formattedBlog} />;
};

export default EditBlog;
