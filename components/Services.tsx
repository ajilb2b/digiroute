import RevealWrapper from "./RevealWrapper";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const services = [
  {
    num: "01",
    cls: "l1",
    title: "Last-Mile Delivery",
    desc: "Fast, reliable doorstep delivery powered by real-time tracking, route optimization, and live customer notifications. Built to keep promises in every kilometre of the route.",
    bullets: ["Same-day & on-demand", "Live tracking", "Proof of delivery", "SMS & WhatsApp alerts"],
  },
  {
    num: "02",
    cls: "l2",
    title: "Rider Outsourcing",
    desc: "Tap into a vetted network of trained, uniformed riders to scale operations without the headcount overhead. Flexible commitments — from a single shift to a permanent dedicated squad.",
    bullets: ["Trained & vetted", "Uniformed riders", "Insurance covered", "Flexible scaling"],
  },
  {
    num: "03",
    cls: "l3",
    title: "Fleet Management",
    desc: "End-to-end fleet operations — tracking, maintenance, fuel, compliance, and driver performance — wrapped into a single accountable platform with monthly performance reporting.",
    bullets: ["Live GPS", "Maintenance scheduling", "Fuel & cost controls", "Driver scoring"],
  },
  {
    num: "04",
    cls: "l4",
    title: "Commercial Logistics",
    desc: "Warehousing, distribution, and supply-chain operations bundled with our delivery layer — a single contract for the full journey from receiving dock to consumer doorstep.",
    bullets: ["Warehousing", "Distribution", "B2B fulfilment", "Inventory visibility"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <RevealWrapper className="section-head">
          <div>
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">
              Four ways we move<br /><em>commerce forward.</em>
            </h2>
          </div>
          <p className="section-desc">
            From single drops to fully-managed fleets, every DigiRoute model is built on the same principle — predictable delivery economics with zero compromise on service quality.
          </p>
        </RevealWrapper>

        <div className="layer-stack">
          {services.map((s) => (
            <RevealWrapper key={s.num}>
              <div className={`layer-row ${s.cls}`}>
                <div className="layer-num">{s.num}</div>
                <div className="layer-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="bullets">
                    {s.bullets.map((b) => (
                      <span key={b} className="layer-bullet">{b}</span>
                    ))}
                  </div>
                </div>
                <div className="layer-arrow">
                  <ArrowIcon />
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
