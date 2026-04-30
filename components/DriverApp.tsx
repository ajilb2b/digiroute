import RevealWrapper from "./RevealWrapper";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export default function DriverApp() {
  return (
    <section style={{ background: "var(--paper)", paddingTop: 60, paddingBottom: 140 }}>
      <div className="container">
        <RevealWrapper>
          <div className="split reverse">
            <div className="visual-card" style={{ aspectRatio: "1.05/1", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(140deg,#5B21F0 0%,#2E0A8A 100%)" }}>
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-head">
                      <div className="av" />
                      <div>
                        <div className="nm">Ahmed M.</div>
                      </div>
                      <div className="st">On Route</div>
                    </div>

                    <div className="phone-card">
                      <div className="phone-stop">Stop 4 of 8 · Next</div>
                      <div className="phone-addr">Tower 32, West Bay, Doha</div>
                      <div className="phone-meta">
                        <span className="eta">ETA 8 min</span>
                        <span>· 2.4 km</span>
                      </div>
                    </div>

                    <div className="phone-card">
                      <div className="phone-stop">Stop 5 · Pending</div>
                      <div className="phone-addr">Pearl-Qatar, Porto Arabia 17</div>
                      <div className="phone-meta">
                        <span className="eta">ETA 21 min</span>
                        <span>· 6.1 km</span>
                      </div>
                    </div>

                    <div className="phone-card">
                      <div className="phone-stop">Stop 6 · Pending</div>
                      <div className="phone-addr">Lusail Marina, Block 2</div>
                      <div className="phone-meta">
                        <span className="eta">ETA 34 min</span>
                        <span>· 9.7 km</span>
                      </div>
                    </div>

                    <div className="phone-action">Mark Delivered &nbsp; →</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-text">
              <div className="section-tag">Driver Experience</div>
              <h3>Empower your drivers <em>on every drop.</em></h3>
              <p>Give your riders the tools they need to succeed. Our mobile driver app provides clear navigation, frictionless proof of delivery, and a direct line to the dispatch desk — designed for drivers, not for analysts.</p>
              <div className="split-bullets">
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Digital signature capture &amp; photo proof of delivery
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Optimized turn-by-turn navigation
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Instant messaging with the dispatch centre
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Earnings dashboard with daily &amp; weekly breakdowns
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
