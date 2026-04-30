import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-new">
      {/* Subtle dot grid background */}
      <div className="hero-new-dots" />

      <div className="hero-new-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-new-left">
          <h1 className="hero-new-h1">
            Powering Your<br />
            <em>Delivery Success</em>
          </h1>

          <p className="hero-new-sub">
            Professional last-mile delivery, rider outsourcing, fleet management,
            and end-to-end commercial logistics — engineered for modern businesses
            across Qatar and the UAE.
          </p>

          <div className="hero-new-actions">
            <Link href="#contact" className="hero-new-btn-primary">
              Get a Quote
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="#services" className="hero-new-btn-ghost">
              How it works
            </Link>
          </div>

          <div className="hero-new-stats">
            <div className="hero-new-stat">
              <span className="hero-new-stat-num">99.8%</span>
              <span className="hero-new-stat-lbl">On-Time Delivery</span>
            </div>
            <div className="hero-new-stat-divider" />
            <div className="hero-new-stat">
              <span className="hero-new-stat-num">500+</span>
              <span className="hero-new-stat-lbl">Active Riders</span>
            </div>
            <div className="hero-new-stat-divider" />
            <div className="hero-new-stat">
              <span className="hero-new-stat-num">50K+</span>
              <span className="hero-new-stat-lbl">Daily Deliveries</span>
            </div>
            <div className="hero-new-stat-divider" />
            <div className="hero-new-stat">
              <span className="hero-new-stat-num">24/7</span>
              <span className="hero-new-stat-lbl">Live Support</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Dispatch Visual ── */}
        <div className="hero-new-right">
          <div className="dispatch-card">

            {/* Floating: Live badge */}
            <div className="dc-float dc-float-live">
              <span className="dc-live-dot" />
              Live · Doha North Zone
            </div>

            {/* Floating: On-Time chip */}
            <div className="dc-float dc-float-ontime">
              <span className="dc-ontime-icon">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              98.4% On-Time
            </div>

            {/* Map area */}
            <div className="dc-map">
              <div className="dc-map-grid" />
              <svg className="dc-roads" viewBox="0 0 520 420" preserveAspectRatio="xMidYMid slice">
                {/* Water */}
                <path className="dc-water" d="M0,340 C90,325 200,370 310,355 C400,343 480,375 520,360 L520,420 L0,420 Z" />
                {/* Major roads */}
                <path className="dc-road-w" d="M-10,160 C110,148 240,188 390,172 C460,165 500,182 530,178" />
                <path className="dc-road-w" d="M260,-10 C268,70 248,150 272,240 C296,320 262,390 280,430" />
                <path className="dc-road" d="M-10,255 L530,240" />
                <path className="dc-road" d="M-10,82 L530,96" />
                <path className="dc-road" d="M140,-10 L148,430" />
                <path className="dc-road" d="M410,-10 L425,340" />
                <path className="dc-road" d="M55,240 C130,284 210,272 272,308 C346,348 442,336 510,362" />
                {/* Animated delivery routes */}
                <path className="dc-route" d="M108,128 C162,148 218,184 264,210 C310,236 352,218 386,236" />
                <path className="dc-route-2" d="M264,210 C238,264 214,290 180,326 C152,354 124,362 100,378" />
                <path className="dc-route" d="M264,210 C310,192 352,156 388,128 C416,110 452,118 470,136" />
              </svg>

              {/* Hub & pins */}
              <div className="dc-pin dc-pin-hub" style={{ left: "50.5%", top: "50%" }}>H</div>
              <div className="dc-pin" style={{ left: "21%", top: "30%" }}>A</div>
              <div className="dc-pin dc-pin-o" style={{ left: "34.5%", top: "50%" }}>B</div>
              <div className="dc-pin" style={{ left: "19%", top: "76%" }}>C</div>
              <div className="dc-pin dc-pin-o" style={{ left: "74%", top: "30%" }}>D</div>
              <div className="dc-pin" style={{ left: "90%", top: "32%" }}>E</div>
              <div className="dc-pin dc-pin-o" style={{ left: "34%", top: "72%" }}>F</div>
            </div>

            {/* Bottom stat strip */}
            <div className="dc-stat-strip">
              <div className="dc-strip-item">
                <span className="dc-strip-num">12</span>
                <span className="dc-strip-lbl">Active Routes</span>
              </div>
              <div className="dc-strip-sep" />
              <div className="dc-strip-item">
                <span className="dc-strip-num">214</span>
                <span className="dc-strip-lbl">In Transit</span>
              </div>
              <div className="dc-strip-sep" />
              <div className="dc-strip-item">
                <span className="dc-strip-num">2,847</span>
                <span className="dc-strip-lbl">Today&apos;s Drops</span>
              </div>
            </div>

          </div>

          {/* Floating driver mini-card */}
          <div className="hero-driver-card">
            <div className="hdc-av">AM</div>
            <div className="hdc-info">
              <div className="hdc-name">Ahmed M.</div>
              <div className="hdc-meta">Route 04 · 8 stops</div>
            </div>
            <span className="hdc-badge">Live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
