import Hero from "@/features/landingPage/sections/hero/Hero";
import Features from "@/features/landingPage/sections/hero/Features";
import Plans from "@/features/landingPage/sections/plans/Plans";
import Testimonials from "@/features/landingPage/sections/testimonials/Testimonials";
import FaqSection from "@/features/landingPage/sections/faq/FaqSection";

// Layout
import BaseLayout from "@/layout/BaseLayout";

Home.getLayout = (page: React.ReactNode) => (
  <BaseLayout className="pt-0">{page}</BaseLayout>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <FaqSection />
    </>
  );
}
