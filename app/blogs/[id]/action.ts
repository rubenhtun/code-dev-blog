// *******************************************
// Fetching Blog from the Database with Prisma
// *******************************************//
import { prisma } from "@/lib/prisma";

export async function getBlog(id: string) {
  try {
    const blog = await prisma.blog.findFirst({ where: { id } });
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw new Error("Unable to fetch blogs");
  }
}
