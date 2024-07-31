import Image from "next/image";
import Layout from "./components/Common/Layout";
import HeroSection from "./components/Home/Hero/HeroSection";
import AboutSection from "./components/Home/about/AboutSection";
import ServicesSection from "./components/Home/service/ServicesSection";
import TestimonialsSection from "./components/Home/TestimonialsSection/TestimonialsSection";
import BlogSection from "./components/Home/BlogSection/BlogSection";
import CallToActionSection from "./components/Home/CallToActionSection/CallToActionSection";

export default function IndexHome() {
  return (
    <main>
      <Layout>

      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <BlogSection/>
      <CallToActionSection/>

      </Layout>

    </main>
  );
}
