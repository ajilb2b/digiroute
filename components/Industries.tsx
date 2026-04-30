import RevealWrapper from "./RevealWrapper";

const industries = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 2v20M16 2v20M16 11h4M20 2c-2 0-3 2-3 5s1 4 3 4"/></svg>,
    title: "Food Delivery",
    desc: "Temperature-controlled, time-critical drops for restaurants, dark kitchens, and meal-plan services.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M3 9h18M9 14h6"/></svg>,
    title: "Retail",
    desc: "Same-day fulfilment for retail stores, boutiques, and brand outlets — direct to the doorstep.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 13.4a1 1 0 0 0 1 .8h9.5a1 1 0 0 0 1-.8L21 7H6"/></svg>,
    title: "Supermarkets",
    desc: "Fresh groceries delivered safely and on time with cold-chain monitoring and zone-level dispatch.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14l-1.5 13a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>,
    title: "E-commerce",
    desc: "Scalable delivery infrastructure for online marketplaces, D2C brands, and cross-border merchants.",
  },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <RevealWrapper className="section-head">
          <div>
            <div className="section-tag">Industries</div>
            <h2 className="section-title">
              Built for the<br /><em>businesses we serve.</em>
            </h2>
          </div>
          <p className="section-desc">
            From cloud kitchens to hypermarkets, DigiRoute powers logistics for the operators that move modern commerce across Qatar and the UAE.
          </p>
        </RevealWrapper>

        <div className="ind-grid">
          {industries.map((ind) => (
            <RevealWrapper key={ind.title}>
              <div className="ind-card">
                <div className="ind-icon">{ind.icon}</div>
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
