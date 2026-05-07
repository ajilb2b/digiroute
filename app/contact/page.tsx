import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DigiRoute. Reach our offices in Doha, Qatar or Dubai, UAE for delivery partnerships, platform demos, or general enquiries.",
  alternates: { canonical: "https://www.digiroute.me/contact" },
  openGraph: { url: "https://www.digiroute.me/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Get in Touch"
          title="Let's move your"
          titleEm="logistics forward."
          sub="Ready to transform your delivery operations? Our commercial team will get back to you within one working day."
          breadcrumb="Contact"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
