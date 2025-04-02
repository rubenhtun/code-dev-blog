"use server";

import { prisma } from "@/lib/prisma";

export async function handleUploadBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;

  await prisma.blog.create({
    data: {
      title,
      description,
      category,
    },
  });
}
