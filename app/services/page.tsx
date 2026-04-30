import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const services = [
  {
    num: "01",
    cls: "l1",
    title: "Last-Mile Delivery",
    tagline: "Fast, trackable, doorstep-perfect.",
    desc: "Our last-mile network is engineered for the final — and most critical — leg of the delivery journey. Powered by real-time route optimization, live GPS tracking, and automated customer notifications, we guarantee every parcel arrives on time with full proof of delivery.",
    bullets: [
      "Same-day & on-demand options",
      "Live GPS tracking for operators and customers",
      "Digital proof of delivery (signature + photo)",
      "Automated SMS & WhatsApp customer alerts",
      "Failed-delivery re-routing and retry logic",
      "Dedicated SLA dashboards per client",
    ],
    stat: { value: "98.4%", label: "On-time delivery rate" },
  },
  {
    num: "02",
    cls: "l2",
    title: "Rider Outsourcing",
    tagline: "Scale headcount without the overhead.",
    desc: "Access a fully vetted, trained, and uniformed rider force on your terms. Whether you need five riders for a weekend campaign or a permanent squad of fifty, DigiRoute absorbs the recruitment, training, insurance, and compliance burden — you just scale.",
    bullets: [
      "Background-screened & uniformed riders",
      "Full insurance and liability coverage",
      "On-demand scaling from single shifts",
      "Dedicated account manager per client",
      "Performance monitoring & weekly reporting",
      "Seamless handover to in-house teams",
    ],
    stat: { value: "500+", label: "Active riders across GCC" },
  },
  {
    num: "03",
    cls: "l3",
    title: "Fleet Management",
    tagline: "Every vehicle. Every kilometre. Under control.",
    desc: "End-to-end fleet operations wrapped into a single accountable contract. Live telemetry, scheduled maintenance, fuel cost controls, driver scoring, and monthly performance reports — all surfaced through our operations console or exported to your BI tooling.",
    bullets: [
      "Live GPS with geo-fence alerts",
      "Predictive maintenance scheduling",
      "Fuel monitoring & cost-per-km analytics",
      "Driver behaviour & safety scoring",
      "Vehicle compliance & insurance tracking",
      "Monthly performance reporting",
    ],
    stat: { value: "30%", label: "Avg. fuel cost reduction" },
  },
  {
    num: "04",
    cls: "l4",
    title: "Commercial Logistics",
    tagline: "One contract. Full supply-chain coverage.",
    desc: "From receiving dock to consumer doorstep — DigiRoute bundles warehousing, distribution, B2B fulfilment, and last-mile delivery under a single SLA. Eliminate vendor fragmentation and gain complete inventory visibility across every node in your supply chain.",
    bullets: [
      "Secure, climate-controlled warehousing",
      "B2B & B2C distribution",
      "Inbound & outbound fulfilment",
      "Real-time inventory visibility",
      "Cross-docking & consolidation",
      "Dedicated operations team per client",
    ],
    stat: { value: "3", label: "Cities. One unified SLA." },
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Our Services"
          title="Four ways we move"
          titleEm="commerce forward."
          sub="From single drops to fully-managed fleets — every DigiRoute service model is built on one principle: predictable delivery economics with zero compromise on quality."
          breadcrumb="Services"
        />

        {/* Service rows */}
        <section style={{ background: "var(--paper)", paddingTop: 80, paddingBottom: 120 }}>
          <div className="container">
            <div className="layer-stack">
              {services.map((s) => (
                <RevealWrapper key={s.num}>
                  <div className={`layer-row ${s.cls}`}>
                    <div className="layer-num">{s.num}</div>
                    <div className="layer-body" style={{ flex: 1 }}>
                      <h3>{s.title}</h3>
                      <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: 20 }}>
                        {s.desc}
                      </p>
                      <div className="bullets">
                        {s.bullets.map((b) => (
                          <span key={b} className="layer-bullet" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                            <span style={{ color: "var(--orange)" }}><CheckIcon /></span>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", gap: 24, minWidth: 160 }}>
                      <div className="layer-arrow"><ArrowIcon /></div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--violet)", lineHeight: 1 }}>{s.stat.value}</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.stat.label}</div>
                      </div>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <RevealWrapper>
          <section style={{ background: "linear-gradient(135deg,#1a0060 0%,#2d0099 50%,#1a0060 100%)", padding: "80px 0", textAlign: "center" }}>
            <div className="container">
              <div style={{ maxWidth: 600, margin: "0 auto" }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 20 }}>Ready to get started?</div>
                <h2 style={{ color: "#fff", fontSize: "2.4rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                  Let&apos;s build your delivery operation together.
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", marginBottom: 36, lineHeight: 1.65 }}>
                  Talk to our commercial team about the right service model for your business. No obligation — just a conversation.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-orange" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                    Get a Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn btn-ghost" style={{ fontSize: "1rem", padding: "14px 28px", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                    Talk to Sales
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
