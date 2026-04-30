import RevealWrapper from "./RevealWrapper";

const steps = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>,
    num: "Step 01",
    title: "Import Your Data",
    desc: "Upload delivery orders, customer records, and rider details — through our intuitive console or via direct API integration with your stack.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>,
    num: "Step 02",
    title: "Configure & Optimize",
    desc: "Set business rules, delivery zones, vehicle constraints, and SLAs. Our optimization engine takes it from there — automatically.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    num: "Step 03",
    title: "Dispatch & Track",
    desc: "Assign jobs to drivers in one click and monitor progress in real time, with notifications flowing to customers automatically.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>,
    num: "Step 04",
    title: "Analyze & Improve",
    desc: "Pull comprehensive analytics to spot bottlenecks, optimize routes, and lift performance — every week, every region, every rider.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <RevealWrapper>
          <div className="how-hero">
            <div className="section-tag">Process</div>
            <h2>How <em>DigiRoute</em> works</h2>
            <p>Four steps from kickoff to live operations. Most clients are dispatching their first deliveries through DigiRoute within seven business days.</p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="steps">
            {steps.map((s) => (
              <div key={s.num} className="step">
                <div className="step-circle">{s.icon}</div>
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
