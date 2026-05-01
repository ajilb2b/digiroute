import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Reliability First",
    desc: "We measure success in kept promises. Every SLA we sign is a commitment our operations team lives by — not a number in a contract.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" /><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z" />
      </svg>
    ),
    title: "Built for the GCC",
    desc: "We are not a global platform retrofitted for the region. DigiRoute was designed from day one for the streets, regulations, and rhythms of Qatar and the UAE.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" /><path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    ),
    title: "People at the Core",
    desc: "From our dispatch operators to our riders on the road — we invest in the people who make every delivery happen. Happy teams deliver better outcomes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Data-Driven Operations",
    desc: "Every route, every drop, every driver interaction generates insight. We use that data to constantly improve — not just to report on what happened.",
  },
];

const stats = [
  { value: "2018", label: "Founded in Doha" },
  { value: "500+", label: "Active riders" },
  { value: "2.8M+", label: "Deliveries completed" },
  { value: "98.4%", label: "On-time delivery rate" },
];

const offices = [
  {
    country: "Qatar",
    flag: "🇶🇦",
    address: "Office #7, 3rd Floor, Building 01\nMuntazah Commercial Complex\nDoha, Qatar",
    phone: "+974 4140 4004",
    email: "info@digiroute.me",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    address: "Office #302, Fakhrudin Properties\nAl Quoz 3\nDubai, UAE",
    phone: "+971 50 981 3825",
    email: "info@digiroute.me",
  },
];

const team = [
  { initials: "AQ", name: "Ahmad Al-Qahtani", role: "Chief Executive Officer", bg: false },
  { initials: "SK", name: "Sara Khalil", role: "Chief Operations Officer", bg: true },
  { initials: "MR", name: "Mohammed Al-Rashidi", role: "Head of Technology", bg: false },
  { initials: "LF", name: "Layla Farooq", role: "Head of Commercial", bg: true },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="About DigiRoute"
          title="Built on the ground."
          titleEm="Grown by the mile."
          sub="DigiRoute Logistics Services W.L.L is a GCC-born logistics company on a mission to make last-mile delivery reliable, transparent, and scalable for every business in the region."
          breadcrumb="About Us"
        />

        {/* Mission */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <RevealWrapper>
                <div>
                  <div className="section-tag" style={{ marginBottom: 20 }}>Our Mission</div>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1.2, marginBottom: 24 }}>
                    Making every delivery a<br /><em style={{ fontStyle: "italic", color: "var(--violet)" }}>kept promise.</em>
                  </h2>
                  <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
                    DigiRoute was founded in Doha with one clear conviction: that last-mile logistics in the GCC deserved better. Better technology, better accountability, and a partner that understood the region — not one reading from a global playbook.
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 32 }}>
                    Today we operate across Qatar and the UAE, serving food delivery platforms, retailers, supermarkets, and e-commerce brands with a single integrated service — from dispatch software to rider on the doorstep.
                  </p>
                  <Link href="/contact" className="btn btn-orange">
                    Work With Us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </RevealWrapper>

              <RevealWrapper>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {stats.map((s) => (
                    <div key={s.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "32px 24px", textAlign: "center" }}>
                      <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--violet)", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper className="section-head">
              <div>
                <div className="section-tag">What We Stand For</div>
                <h2 className="section-title">
                  Values that drive<br /><em>every decision.</em>
                </h2>
              </div>
              <p className="section-desc">
                These aren't words on a wall. They are the principles that guide how we hire, how we operate, and how we treat every client and rider in our network.
              </p>
            </RevealWrapper>

            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 24, marginTop: 56 }}>
                {values.map((v) => (
                  <div key={v.title} style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px 26px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--violet-faint)", color: "var(--violet)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      {v.icon}
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{v.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Leadership */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>Leadership</div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)" }}>
                  The team behind<br /><em style={{ fontStyle: "italic", color: "var(--violet)" }}>DigiRoute.</em>
                </h2>
              </div>
            </RevealWrapper>
            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 24 }}>
                {team.map((m) => (
                  <div key={m.name} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "32px 24px", textAlign: "center" }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                      background: m.bg ? "linear-gradient(135deg,var(--orange),#c05a00)" : "linear-gradient(135deg,var(--violet),#3a1a80)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em",
                    }}>
                      {m.initials}
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>{m.name}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{m.role}</div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Offices */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>Our Offices</div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)" }}>
                  Rooted in the<br /><em style={{ fontStyle: "italic", color: "var(--violet)" }}>GCC.</em>
                </h2>
              </div>
            </RevealWrapper>
            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 760, margin: "0 auto" }}>
                {offices.map((o) => (
                  <div key={o.country} style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 32px" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{o.flag}</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ink)", marginBottom: 16 }}>{o.country}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line", marginBottom: 20 }}>{o.address}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <a href={`tel:${o.phone.replace(/\s/g, "")}`} style={{ fontSize: "0.88rem", color: "var(--violet)", fontWeight: 600 }}>{o.phone}</a>
                      <a href={`mailto:${o.email}`} style={{ fontSize: "0.88rem", color: "var(--violet)", fontWeight: 600 }}>{o.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* CTA */}
        <RevealWrapper>
          <section style={{ background: "linear-gradient(135deg,#1a0060 0%,#2d0099 50%,#1a0060 100%)", padding: "80px 0", textAlign: "center" }}>
            <div className="container">
              <div style={{ maxWidth: 560, margin: "0 auto" }}>
                <h2 style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                  Ready to partner with DigiRoute?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", marginBottom: 36, lineHeight: 1.65 }}>
                  Whether you are looking for a delivery partner, a platform demo, or a career — we would love to hear from you.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-orange" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                    Contact Us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/careers" className="btn btn-ghost" style={{ fontSize: "1rem", padding: "14px 28px", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                    View Careers
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>
      <Footer />
    </>
  );
}
