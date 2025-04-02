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
