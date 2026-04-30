export default function TrustBar() {
  return (
    <section className="trust" style={{ padding: "50px 0 30px" }}>
      <div className="container">
        <div className="trust-label">Trusted by leading brands across the GCC</div>
        <div className="trust-row">
          <div className="trust-logo">
            <span className="name">keeta</span>
            <span className="cat">Food Delivery</span>
          </div>
          <div className="trust-logo">
            <span className="name">ninja</span>
            <span className="cat">Logistics &amp; delivery</span>
          </div>
          <div className="trust-logo">
            <span className="name serif">LuLu</span>
            <span className="cat">Hypermarket chain</span>
          </div>
          <div className="trust-logo">
            <span className="name">Careem</span>
            <span className="cat">Ride-hailing &amp; delivery</span>
          </div>
          <div className="trust-logo">
            <span className="name">Carrefour</span>
            <span className="cat">Retail supermarket</span>
          </div>
        </div>
      </div>
    </section>
  );
}
