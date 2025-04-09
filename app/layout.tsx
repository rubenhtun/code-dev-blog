import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Code DEv",
  description:
    "Exploring web development, programming, and tech trends through insightful articles and discussions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.className} bg-orange-50 dotted-bg`}
      >
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
