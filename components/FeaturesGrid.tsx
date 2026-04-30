import RevealWrapper from "./RevealWrapper";

const features = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M9 17l4-4M11 13l4-4"/><path d="M6 15v-3a3 3 0 0 1 3-3h6"/></svg>,
    num: "/01",
    title: "Smart Route Optimization",
    desc: "AI-driven planning chooses the most efficient sequence across drops, traffic, and time windows — typically cutting fuel and delivery times by up to 30%.",
    violet: false,
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z"/></svg>,
    num: "/02",
    title: "Real-Time GPS Tracking",
    desc: "Every vehicle, every shift — surfaced on a live map with five-second refresh and accurate ETAs broadcast to operators and end customers alike.",
    violet: true,
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
    num: "/03",
    title: "Automated Dispatch",
    desc: "Jobs route to the right rider based on proximity, capacity, performance score, and SLA — no spreadsheet, no group chat, no missed orders.",
    violet: false,
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="7"/><rect x="12" y="7" width="3" height="11"/><rect x="17" y="13" width="3" height="5"/></svg>,
    num: "/04",
    title: "Advanced Analytics",
    desc: "Operational dashboards translate raw delivery data into KPIs that matter — first-attempt success, cost-per-drop, rider productivity, and SLA breach rates.",
    violet: true,
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>,
    num: "/05",
    title: "Mobile Driver App",
    desc: "Riders get turn-by-turn navigation, in-app proof of delivery (signature + photo), instant dispatch chat, and earnings transparency in one polished mobile experience.",
    violet: false,
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
    num: "/06",
    title: "Enterprise Security",
    desc: "Bank-grade encryption, role-based access, SSO support, and audit logs — the security posture enterprise procurement teams expect, out of the box.",
    violet: true,
  },
];

export default function FeaturesGrid() {
  return (
    <RevealWrapper>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.num} className="feat-cell">
            <div className={`feat-icon${f.violet ? " violet" : ""}`}>{f.icon}</div>
            <div className="feat-num">{f.num}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </RevealWrapper>
  );
}
