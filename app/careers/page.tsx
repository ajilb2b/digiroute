import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const perks = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Rapid Growth",
    desc: "We are scaling fast across the GCC. Team members who deliver get visibility, responsibility, and real career progression.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Flexible Working",
    desc: "Hybrid schedules for office roles. Shift flexibility for operations and driver positions. We care about output, not hours at a desk.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Full Benefits",
    desc: "Comprehensive health insurance, annual leave, and end-of-service gratuity in line with Qatar and UAE labour law.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Diverse Team",
    desc: "Our team spans multiple nationalities. We believe the best logistics thinking comes from people with different backgrounds and perspectives.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Careers"
          title="Build the future of"
          titleEm="GCC logistics."
          sub="We are building a team that is passionate about logistics, technology, and making a real difference in the region. Check back here for opportunities as we grow."
          breadcrumb="Careers"
        />

        {/* Perks */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper className="section-head">
              <div>
                <div className="section-tag">Why DigiRoute</div>
                <h2 className="section-title">
                  A place where your<br /><em>work moves things.</em>
                </h2>
              </div>
              <p className="section-desc">
                Every role at DigiRoute has a direct line to the deliveries we make and the businesses we serve.
              </p>
            </RevealWrapper>

            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 24, marginTop: 56 }}>
                {perks.map((p) => (
                  <div key={p.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "28px 26px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--violet-faint)", color: "var(--violet)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      {p.icon}
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{p.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* No openings */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 120 }}>
          <div className="container">
            <RevealWrapper>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>Open Positions</div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>
                  No openings at the moment.
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
                  We don&apos;t have any active job listings right now, but we are always interested in hearing from talented people. Send us your CV and we will reach out when a suitable role opens up.
                </p>
                <Link href="/contact" className="btn btn-orange" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                  Send Your CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
