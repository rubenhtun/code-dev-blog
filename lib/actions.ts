"use server";

import { prisma } from "./prisma";

// *******************************************
// Handle uploading a new blog post
// *******************************************//
export async function handleUploadBlog(formData: FormData) {
  try {
    const imageUrl = formData.get("imageUrl") as string;
    console.log(imageUrl);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    if (!imageUrl || !title || !description || !category) {
      return { success: false, message: "All fields are required" };
    }

    await prisma.blog.create({
      data: { imageUrl, title, description, category },
    });

    return { success: true, message: "Blog uploaded successfully" };
  } catch (error) {
    return {
      success: false,
      message: "Failed to upload blog",
      error: "Unknown Server Error",
    };
  }
}

// *******************************************
// Fetching Blogs from the Database with Prisma
// *******************************************//
export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany();
    return blogs;
  } catch (error) {
    throw new Error("Unable to fetch blogs");
  }
}

// *******************************************
// Deleting a Blog from the Database with Prisma
// *******************************************//
export async function deleteBlog(blogId: string) {
  try {
    const deletedBlog = await prisma.blog.delete({ where: { id: blogId } });
    return deletedBlog;
  } catch (error) {
    throw new Error("Unable to delete blog");
  }
}
