"use server";

import { prisma } from "./prisma";

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
