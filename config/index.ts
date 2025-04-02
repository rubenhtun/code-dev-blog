interface Config {
  adminApiUrl: string;
}

export const config: Config = {
  adminApiUrl: process.env.NEXT_PUBLIC_ADMIN_API_URL || "",
};
