import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

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
