import Head from "next/head";
// Sections
import Hero from "@/features/landingPage/sections/hero/Hero";
import Features from "@/features/landingPage/sections/hero/Features";
import Plans from "@/features/landingPage/sections/plans/Plans";
import Testimonials from "@/features/landingPage/sections/testimonials/Testimonials";
import FaqSection from "@/features/landingPage/sections/faq/FaqSection";
import Services from "@/features/landingPage/sections/services/Services";
import EcoHosting from "@/features/landingPage/sections/eco-hosting/EcoHosting";
import Footer from "@/features/footer/Footer";

// Layout
import BaseLayout from "@/layout/BaseLayout";

Home.getLayout = (page: React.ReactNode) => (
  <BaseLayout className="pt-0">{page}</BaseLayout>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>GuaranteedHost - Pioneers of Optimized Web Hosting</title>
      </Head>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Services />
      <EcoHosting />
      <FaqSection />
      <Footer />
    </>
  );
}
