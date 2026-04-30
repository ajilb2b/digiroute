const brands = [
  { name: "KeeTa",          cat: "Food Delivery" },
  { name: "Careem",         cat: "Ride-hailing & Delivery" },
  { name: "noon",           cat: "E-commerce" },
  { name: "Amazon",         cat: "Global Commerce" },
  { name: "LuLu",          cat: "Hypermarket Chain" },
  { name: "Carrefour",      cat: "Retail Supermarket" },
  { name: "Papa Johns",     cat: "Quick Service Restaurant" },
  { name: "McDonald's",     cat: "Quick Service Restaurant" },
  { name: "Pizza Hut",      cat: "Quick Service Restaurant" },
  { name: "Ninja",          cat: "Logistics & Delivery" },
  { name: "iMile",          cat: "Cross-border Logistics" },
  { name: "W Pharmacy",     cat: "Health & Pharmacy" },
  { name: "Diet Delights",  cat: "Meal Plans" },
  { name: "Temu",           cat: "Global Marketplace" },
];

// Duplicate for seamless infinite loop
const track = [...brands, ...brands];

export default function TrustBar() {
  return (
    <section className="clients-strip">
      <div className="container">
        <p className="clients-label">Trusted by leading brands across the GCC</p>
      </div>

      <div className="marquee" aria-label="Our clients">
        <div className="marquee-track">
          {track.map((b, i) => (
            <div key={i} className="logo-card" title={b.name}>
              <div className="logo-card-inner">
                <span className="logo-name">{b.name}</span>
                <span className="logo-cat">{b.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
