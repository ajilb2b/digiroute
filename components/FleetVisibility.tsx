import RevealWrapper from "./RevealWrapper";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export default function FleetVisibility() {
  return (
    <section style={{ background: "var(--paper)", paddingTop: 140, paddingBottom: 60 }}>
      <div className="container">
        <RevealWrapper>
          <div className="split">
            <div className="split-text">
              <div className="section-tag">Live Visibility</div>
              <h3>Real-time fleet visibility, <em>without the noise.</em></h3>
              <p>Track every vehicle in your fleet with precision. Monitor rider location, delivery status, and ETAs from a single console — built for operators who care about the next ten minutes, not the next ten reports.</p>
              <div className="split-bullets">
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Live GPS tracking with five-second updates
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Automated route deviation &amp; dwell-time alerts
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Branded customer notifications via SMS, email &amp; WhatsApp
                </div>
                <div className="split-bullet">
                  <span className="check"><CheckIcon /></span>
                  Geofence triggers for entry, exit &amp; arrival events
                </div>
              </div>
            </div>

            <div className="visual-card">
              <div className="fleet-mock">
                <svg className="roads-2" viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice">
                  <path className="water" d="M0,300 C100,290 200,330 300,320 C380,312 460,340 500,330 L500,420 L0,420 Z"/>
                  <path className="road-2" d="M-20,140 C100,130 220,170 380,150 C440,142 480,160 520,155"/>
                  <path className="road-2" d="M250,-20 C260,80 240,160 270,260 C290,330 260,400 280,440"/>
                  <path className="road" d="M-20,220 L520,220"/>
                  <path className="road" d="M120,-20 L130,440"/>
                  <path className="road" d="M380,-20 L390,300"/>
                  <path className="route-line" d="M80,90 C140,110 200,140 250,180 C300,210 350,200 400,210"/>
                  <path className="route-line-2" d="M250,180 C220,230 180,260 150,300 C120,330 90,340 60,360"/>
                </svg>
                <div className="pin hub" style={{ left: "50%", top: "43%" }}>H</div>
                <div className="pin" style={{ left: "16%", top: "21%" }}>1</div>
                <div className="pin orange" style={{ left: "30%", top: "42%" }}>2</div>
                <div className="pin" style={{ left: "80%", top: "50%" }}>3</div>
                <div className="pin orange" style={{ left: "30%", top: "71%" }}>4</div>
                <div className="pin" style={{ left: "78%", top: "24%" }}>5</div>
                <div className="pin orange" style={{ left: "12%", top: "78%" }}>6</div>
                <div className="fleet-bar">
                  <span className="pip" />
                  <span className="label">Fleet status</span>
                  <span className="val" style={{ marginLeft: "auto" }}>24/26 Active</span>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
