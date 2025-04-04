interface Config {
  adminApiUrl: string;
  googleClientId: string;
  googleClientSecret: string;
}

export const config: Config = {
  adminApiUrl: process.env.NEXT_PUBLIC_ADMIN_API_URL || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
};
