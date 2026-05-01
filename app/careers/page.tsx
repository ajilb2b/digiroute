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
    desc: "We are scaling fast across the GCC. Team members who deliver get visibility, responsibility, and promotions on a timeline you won't find at a large corporation.",
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
    desc: "Comprehensive health insurance, annual leave, and end-of-service gratuity in line with Qatar and UAE labour law — plus performance bonuses.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Diverse Team",
    desc: "Our team spans 15+ nationalities. We believe the best logistics thinking comes from people with different backgrounds, perspectives, and experiences.",
  },
];

const openings = [
  {
    title: "Dispatch Coordinator",
    dept: "Operations",
    location: "Doha, Qatar",
    type: "Full-time",
    desc: "Monitor live orders, assign riders, resolve delivery exceptions, and communicate with clients during peak operational hours. You are the nerve centre of our day-to-day operations.",
    requirements: ["1+ years in logistics or operations", "Strong communication skills in Arabic and English", "Comfortable working in a fast-paced, shift-based environment", "Familiarity with dispatch or CRM software"],
  },
  {
    title: "Fleet Operations Manager",
    dept: "Fleet",
    location: "Doha, Qatar",
    type: "Full-time",
    desc: "Own the full lifecycle of our vehicle fleet — maintenance schedules, fuel management, driver compliance, and cost reporting. Ensure every vehicle is on the road, safe, and efficient.",
    requirements: ["3+ years in fleet or transport management", "Knowledge of Qatar traffic and vehicle regulations", "Experience with fleet management software", "Strong organisational and vendor management skills"],
  },
  {
    title: "Account Manager",
    dept: "Commercial",
    location: "Dubai, UAE",
    type: "Full-time",
    desc: "Manage and grow relationships with DigiRoute's enterprise clients in the UAE. Conduct quarterly business reviews, identify upsell opportunities, and ensure client satisfaction against SLAs.",
    requirements: ["2+ years in account management or B2B sales", "Experience in logistics, SaaS, or tech sectors preferred", "Fluent in English; Arabic a strong advantage", "Based in or willing to relocate to Dubai"],
  },
  {
    title: "Mobile App Developer (React Native)",
    dept: "Technology",
    location: "Doha, Qatar · Hybrid",
    type: "Full-time",
    desc: "Build and maintain the DigiRoute driver mobile app used daily by hundreds of riders across the GCC. Work closely with product and operations to ship features that directly improve rider experience.",
    requirements: ["3+ years with React Native", "Experience with real-time data (WebSockets or similar)", "Familiarity with maps SDKs (Google Maps / Mapbox)", "Clean, testable code and a bias for shipping"],
  },
  {
    title: "Motorcycle Delivery Rider",
    dept: "Driver Network",
    location: "Doha, Qatar",
    type: "Full-time / Part-time",
    desc: "Join our rider network and earn competitive pay with flexible shifts. You will use the DigiRoute app for navigation and proof of delivery while representing our brand on every drop.",
    requirements: ["Valid Qatar motorcycle licence (Category 3+)", "Smartphone capable of running the DigiRoute app", "Clean driving record", "Good communication and customer-facing attitude"],
  },
  {
    title: "Driver Trainer & Onboarding Specialist",
    dept: "Driver Network",
    location: "Doha, Qatar",
    type: "Full-time",
    desc: "Onboard, train, and continuously develop new riders joining the DigiRoute network. Conduct app training, safety briefings, and first-week check-ins to ensure every rider starts strong.",
    requirements: ["Experience training or supervising field staff", "Fluent in English; Hindi or Arabic a bonus", "Comfortable delivering group and one-on-one sessions", "Passion for standards and people development"],
  },
];

const deptColors: Record<string, string> = {
  Operations: "#7C3AED",
  Fleet: "#059669",
  Commercial: "#0EA5E9",
  Technology: "#2563EB",
  "Driver Network": "#D97706",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Careers"
          title="Build the future of"
          titleEm="GCC logistics."
          sub="We are growing fast and looking for people who want to make a real impact — in operations, technology, commercial, and on the road."
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
                Literally and figuratively. Every role at DigiRoute has a direct line to the deliveries we make and the businesses we serve.
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

        {/* Open Roles */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 120 }}>
          <div className="container">
            <RevealWrapper className="section-head">
              <div>
                <div className="section-tag">Open Positions</div>
                <h2 className="section-title">
                  Find your role<br /><em>at DigiRoute.</em>
                </h2>
              </div>
              <p className="section-desc">
                We hire for attitude and potential as much as experience. If you are hungry to grow in a company that is shaping the GCC logistics industry, we want to hear from you.
              </p>
            </RevealWrapper>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 56 }}>
              {openings.map((job) => (
                <RevealWrapper key={job.title}>
                  <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 16, padding: "32px 36px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: deptColors[job.dept] || "var(--violet)", background: `${deptColors[job.dept]}15`, padding: "4px 10px", borderRadius: 20 }}>{job.dept}</span>
                          <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{job.location}</span>
                          <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>·</span>
                          <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{job.type}</span>
                        </div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>{job.title}</h3>
                        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 16 }}>{job.desc}</p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {job.requirements.map((r) => (
                            <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.88rem", color: "var(--muted)" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/contact" className="btn btn-orange" style={{ flexShrink: 0, fontSize: "0.88rem", padding: "11px 22px", alignSelf: "flex-start" }}>
                        Apply Now
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            {/* Open application */}
            <RevealWrapper>
              <div style={{ marginTop: 32, background: "linear-gradient(135deg,#1a0060,#2d0099)", borderRadius: 20, padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>Don&apos;t see your role listed?</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>Send us an open application. If you are exceptional, we will find a place for you.</div>
                </div>
                <Link href="/contact" className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                  Send Open Application
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
