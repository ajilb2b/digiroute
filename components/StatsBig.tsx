import RevealWrapper from "./RevealWrapper";

const stats = [
  { num: "10+", label: "Active Clients", desc: "Across food, retail, supermarket & e-commerce" },
  { num: "50K+", label: "Daily Deliveries", desc: "Dispatched through the DigiRoute platform" },
  { num: "99%", label: "Client Satisfaction", desc: "Net promoter feedback, last twelve months" },
];

export default function StatsBig() {
  return (
    <section className="stats-big">
      <div className="container">
        <RevealWrapper>
          <div className="stats-row">
            {stats.map((s) => (
              <div key={s.label} className="stat-big">
                <div className="stat-big-num">{s.num}</div>
                <div className="stat-big-lbl">{s.label}</div>
                <div className="stat-big-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
