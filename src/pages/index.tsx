import Hero from "@/features/landingPage/sections/hero/Hero";
import Features from "@/features/landingPage/sections/hero/Features";

// Layout
import BaseLayout from "@/layout/BaseLayout";

Home.getLayout = (page: React.ReactNode) => (
  <BaseLayout className="pt-0">{page}</BaseLayout>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Features></Features>
    </>
  );
}
