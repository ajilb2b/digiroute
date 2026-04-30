import RevealWrapper from "./RevealWrapper";
import FeaturesGrid from "./FeaturesGrid";

const sideItems = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z"/></svg>, label: "Live Map", badge: "214", active: true },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, label: "Open Orders", badge: "38" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17a3 3 0 1 0 6 0M5 17H3V8a1 1 0 0 1 1-1h11v10h-3M19 17h-2v-6h3l2 3v3h-3"/></svg>, label: "Active Routes", badge: "12" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>, label: "Drivers" },
];

const sideInsights = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>, label: "Analytics" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>, label: "Reports" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>, label: "Settings" },
];

const drivers = [
  { initials: "AM", name: "Ahmed M.", meta: "Route 04 · 8 stops", status: "live", orange: false },
  { initials: "RK", name: "Rahul K.", meta: "Route 11 · 6 stops", status: "live", orange: true },
  { initials: "SH", name: "Saad H.", meta: "Route 02 · 12 stops", status: "live", orange: false },
  { initials: "MJ", name: "Marvin J.", meta: "Idle · West Bay", status: "idle", orange: true },
];

const barHeights = [30, 55, 42, 70, 88, 62, 95, 78, 50, 67, 84, 46];

export default function Platform() {
  return (
    <section className="platform" id="platform">
      <div className="container">
        <RevealWrapper>
          <div className="platform-hero">
            <div className="section-tag">Dispatch Platform</div>
            <h2>Powerful features<br />for <em>modern dispatch</em></h2>
            <p>Everything you need to plan, dispatch, track, and optimize delivery operations — delivered through a single operations console used by our control room and yours.</p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="dashboard">
            {/* Title bar */}
            <div className="dash-bar">
              <span className="dash-dot r" />
              <span className="dash-dot y" />
              <span className="dash-dot g" />
              <span className="dash-tab active">Live Dispatch</span>
              <span className="dash-tab">Routes</span>
              <span className="dash-tab">Drivers</span>
              <span className="dash-tab">Reports</span>
              <div className="dash-spacer" />
              <span className="dash-search">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                Search orders, riders, routes…
              </span>
            </div>

            <div className="dash-body">
              {/* Sidebar */}
              <div className="dash-side">
                <div className="dash-side-h">Operations</div>
                {sideItems.map((item) => (
                  <div key={item.label} className={`dash-side-item${item.active ? " active" : ""}`}>
                    {item.icon}
                    {item.label}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </div>
                ))}
                <div className="dash-side-h" style={{ marginTop: 14 }}>Insights</div>
                {sideInsights.map((item) => (
                  <div key={item.label} className="dash-side-item">
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="dash-map">
                <div className="dash-map-bg" />
                <svg className="roads" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid slice">
                  <path className="water" d="M0,400 C100,380 220,440 340,420 C440,405 540,460 600,440 L600,540 L0,540 Z"/>
                  <path className="road-2" d="M-20,180 C120,170 250,210 400,200 C500,195 580,220 620,210"/>
                  <path className="road-2" d="M280,-20 C290,80 270,160 300,260 C330,360 290,440 310,560"/>
                  <path className="road" d="M-20,280 L620,260"/>
                  <path className="road" d="M-20,90 L620,110"/>
                  <path className="road" d="M150,-20 L160,560"/>
                  <path className="road" d="M450,-20 L470,400"/>
                  <path className="road" d="M60,260 C140,310 220,300 300,340 C380,380 480,370 560,400"/>
                  <path className="route-line" d="M120,140 C180,160 240,200 290,230 C340,260 380,240 420,260"/>
                  <path className="route-line-2" d="M290,230 C260,290 240,320 200,360 C170,390 140,400 110,420"/>
                  <path className="route-line" d="M290,230 C340,210 380,170 420,140 C450,120 490,130 510,150"/>
                </svg>
                <div className="live-badge">
                  <span className="live-dot" />
                  Live · Doha North Zone
                </div>
                <div className="pin hub" style={{ left: "48.3%", top: "42.5%" }}>H</div>
                <div className="pin" style={{ left: "20%", top: "26%" }}>A</div>
                <div className="pin orange" style={{ left: "36%", top: "48%" }}>B</div>
                <div className="pin" style={{ left: "18%", top: "78%" }}>C</div>
                <div className="pin orange" style={{ left: "70%", top: "26%" }}>D</div>
                <div className="pin" style={{ left: "85%", top: "28%" }}>E</div>
                <div className="pin orange" style={{ left: "32%", top: "67%" }}>F</div>
                <div className="pin" style={{ left: "62%", top: "55%" }}>G</div>
                <div className="map-stat">
                  <div className="map-stat-item">
                    <div className="map-stat-num">12</div>
                    <div className="map-stat-lbl">Active Routes</div>
                  </div>
                  <div className="map-stat-item">
                    <div className="map-stat-num">214</div>
                    <div className="map-stat-lbl">In Transit</div>
                  </div>
                  <div className="map-stat-item">
                    <div className="map-stat-num">98.4%</div>
                    <div className="map-stat-lbl">On-Time</div>
                  </div>
                </div>
              </div>

              {/* Aside */}
              <div className="dash-aside">
                <div className="aside-h">Live Drivers · 24</div>
                {drivers.map((d) => (
                  <div key={d.initials} className="driver-card">
                    <div className={`driver-avatar${d.orange ? " o" : ""}`}>{d.initials}</div>
                    <div className="driver-info">
                      <div className="driver-name">{d.name}</div>
                      <div className="driver-meta">{d.meta}</div>
                    </div>
                    <span className={`driver-status ${d.status}`}>{d.status}</span>
                  </div>
                ))}
                <div className="mini-chart">
                  <div className="mini-chart-h">
                    <span>Today&apos;s deliveries</span>
                    <span className="v">2,847</span>
                  </div>
                  <div className="bars">
                    {barHeights.map((h, i) => (
                      <div key={i} className="bar" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <FeaturesGrid />
      </div>
    </section>
  );
}
