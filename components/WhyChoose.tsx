import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const pills = [
  "Advanced route optimization technology",
  "Real-time tracking & notifications",
  "Professional, vetted delivery riders",
  "Flexible pricing & scalable solutions",
  "24/7 customer & operations support",
  "99.8% on-time delivery rate",
];

export default function WhyChoose() {
  return (
    <section style={{ padding: 0 }}>
      <RevealWrapper>
        <div className="why">
          <div className="why-inner">
            <span className="why-tag">
              <span className="dot" />
              Why DigiRoute
            </span>
            <h2>
              Built for operators who<br />refuse to <em>compromise.</em>
            </h2>
            <p>
              Experience the difference of an industry-leading logistics platform — where modern technology, vetted talent, and accountable operations meet under one roof.
            </p>

            <div className="why-grid">
              {pills.map((p) => (
                <div key={p} className="why-pill">
                  <span className="ic"><CheckIcon /></span>
                  {p}
                </div>
              ))}
            </div>

            <div className="why-cta">
              <Link href="#contact" className="btn-orange-2">
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="#driver" className="btn-light">Become a Driver</Link>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
