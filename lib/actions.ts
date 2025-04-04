"use server";

import { prisma } from "./prisma";

// *******************************************
// Handle uploading a new blog post
// *******************************************//
export async function handleUploadBlog(formData: FormData) {
  try {
    const imageUrl = (formData.get("imageUrl") as string) || "";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    if (!title || !description || !category) {
      return { success: false, message: "All fields are required" };
    }

    await prisma.blog.create({
      data: { imageUrl, title, description, category },
    });

    return { success: true, message: "Blog uploaded successfully" };
  } catch (error) {
    console.error("Error uploading blog:", error);
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
    console.error("Error fetching blogs:", error);
    throw new Error("Unable to fetch blogs");
  }
}

// *******************************************
// Updating a Blog in the Database using Prisma
// *******************************************//
export async function handleUpdateBlog(formData: FormData) {
  try {
    const updateBlogId = formData.get("updateBlogId") as string;
    const imageUrl = (formData.get("imageUrl") as string) || "";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    if (!updateBlogId || !title || !description || !category) {
      return { success: false, message: "All fields are required" };
    }

    await prisma.blog.update({
      where: { id: updateBlogId },
      data: { imageUrl, title, description, category },
    });

    return { success: true, message: "Blog updated successfully" };
  } catch (error) {
    console.error("Error updating blog:", error);
    return {
      success: false,
      message: "Failed to update blog",
      error: "Unknown Server Error",
    };
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
    console.error("Error deleting blog:", error);
    throw new Error("Unable to delete blog");
  }
}
