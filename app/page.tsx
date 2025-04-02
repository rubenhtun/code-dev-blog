import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedPosts from "@/components/FeaturedPosts";
import EmailSubscription from "@/components/EmailSubscription";
import LatestPosts from "@/components/OurBlogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <FeaturedPosts />
      <EmailSubscription />
      <LatestPosts />
      <Footer />
    </>
  );
}
