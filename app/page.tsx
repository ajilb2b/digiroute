import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import FleetVisibility from "@/components/FleetVisibility";
import DriverApp from "@/components/DriverApp";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import StatsBig from "@/components/StatsBig";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import TaglineBand from "@/components/TaglineBand";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Platform />
      <FleetVisibility />
      <DriverApp />
      <HowItWorks />
      <Industries />
      <StatsBig />
      <WhyChoose />
      <Contact />
      <TaglineBand />
      <Footer />
    </>
  );
}
