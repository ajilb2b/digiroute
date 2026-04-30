import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const industries = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 2v20M16 2v20M16 11h4M20 2c-2 0-3 2-3 5s1 4 3 4" />
      </svg>
    ),
    title: "Food Delivery",
    tagline: "Time-critical. Temperature-sensitive. Zero margin for error.",
    desc: "Restaurants, cloud kitchens, and meal-plan operators trust DigiRoute for on-time drops that preserve food quality. Our riders follow strict handling protocols, and our system prioritises food orders by SLA window — automatically.",
    bullets: [
      "Insulated bag compliance for hot & cold orders",
      "Priority dispatch for sub-30 min SLA windows",
      "Multi-restaurant batch stacking",
      "Live order tracking for end customers",
    ],
    color: "#FF6B35",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1-5h16l1 5M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M3 9h18M9 14h6" />
      </svg>
    ),
    title: "Retail & Fashion",
    tagline: "Same-day delivery — the new standard for retail.",
    desc: "Boutiques, flagship stores, and omni-channel brands use DigiRoute to turn in-store stock into a hyper-local fulfilment advantage. Offer same-day delivery to customers in any zone we cover — without building your own fleet.",
    bullets: [
      "Branded delivery experience for retail clients",
      "Click-and-collect & ship-from-store logistics",
      "Campaign surge handling (sale events, launches)",
      "Proof of delivery with photo confirmation",
    ],
    color: "#7C3AED",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
        <path d="M2 3h3l2.7 13.4a1 1 0 0 0 1 .8h9.5a1 1 0 0 0 1-.8L21 7H6" />
      </svg>
    ),
    title: "Supermarkets & Grocery",
    tagline: "Fresh to the doorstep — safely and on time.",
    desc: "Hypermarkets, organic grocers, and specialty food stores count on DigiRoute's zone-level dispatch and cold-chain protocols to keep fresh produce arriving in perfect condition — with complete delivery visibility at the basket level.",
    bullets: [
      "Cold-chain rider equipment & monitoring",
      "Zone-optimised grocery batching",
      "Fragile item handling protocols",
      "Real-time slot management integration",
    ],
    color: "#059669",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 7h14l-1.5 13a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    title: "E-commerce & D2C",
    tagline: "Scalable delivery for online-first brands.",
    desc: "Direct-to-consumer brands and online marketplaces need a logistics partner that scales with order volumes — without sacrificing the unboxing experience. DigiRoute provides the infrastructure and the service layer in one.",
    bullets: [
      "API & Shopify / WooCommerce integration",
      "Scalable capacity for flash-sale surges",
      "Returns & reverse logistics management",
      "White-label tracking page per brand",
    ],
    color: "#0EA5E9",
  },
];

const stats = [
  { value: "2.8M+", label: "Deliveries completed" },
  { value: "98.4%", label: "On-time delivery rate" },
  { value: "4", label: "Industries served daily" },
  { value: "3", label: "GCC cities covered" },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Industries"
          title="Built for the"
          titleEm="businesses we serve."
          sub="From cloud kitchens to hypermarkets — DigiRoute powers logistics for the operators that move modern commerce across Qatar and the UAE."
          breadcrumb="Industries"
        />

        {/* Stats band */}
        <RevealWrapper>
          <section style={{ background: "var(--violet)", padding: "48px 0" }}>
            <div className="container">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* Industry detail cards */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 120 }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {industries.map((ind, idx) => (
                <RevealWrapper key={ind.title}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "auto 1fr" : "1fr auto",
                    gap: 48,
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    padding: "44px 48px",
                    alignItems: "center",
                  }}>
                    {/* Icon side — left on even, right on odd */}
                    {idx % 2 === 0 && (
                      <div style={{
                        width: 100,
                        height: 100,
                        borderRadius: 24,
                        background: `${ind.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ind.color,
                        flexShrink: 0,
                      }}>
                        {ind.icon}
                      </div>
                    )}

                    {/* Text */}
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: ind.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{ind.tagline}</div>
                      <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>{ind.title}</h3>
                      <p style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.7, marginBottom: 20 }}>{ind.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {ind.bullets.map((b) => (
                          <span key={b} style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            background: `${ind.color}12`,
                            color: ind.color,
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            padding: "6px 12px",
                            borderRadius: 20,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Icon side — right on odd */}
                    {idx % 2 !== 0 && (
                      <div style={{
                        width: 100,
                        height: 100,
                        borderRadius: 24,
                        background: `${ind.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ind.color,
                        flexShrink: 0,
                      }}>
                        {ind.icon}
                      </div>
                    )}
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <RevealWrapper>
          <section style={{ background: "linear-gradient(135deg,#1a0060 0%,#2d0099 50%,#1a0060 100%)", padding: "80px 0", textAlign: "center" }}>
            <div className="container">
              <div style={{ maxWidth: 580, margin: "0 auto" }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 20 }}>Your industry. Our expertise.</div>
                <h2 style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                  Ready to talk about your operations?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", marginBottom: 36, lineHeight: 1.65 }}>
                  Every business is different. Let us understand your volumes, geographies, and SLAs — and design the right model for you.
                </p>
                <Link href="/contact" className="btn btn-orange" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>
      <Footer />
    </>
  );
}
