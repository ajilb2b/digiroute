import Image from "next/image";

const brands = [
  { name: "KeeTa",           file: "keeta.webp" },
  { name: "Careem",          file: "careem.png" },
  { name: "noon",            file: "noon.jpg" },
  { name: "W Pharmacy",      file: "w-pharmacy.jpg" },
  { name: "Amazon",          file: "amazon.webp" },
  { name: "Papa Johns",      file: "papa-johns.jpg" },
  { name: "Temu",            file: "temu.png" },
  { name: "iMile",           file: "imile.png" },
  { name: "Diet Delights",   file: "diet-delights.png" },
  { name: "Rare Group",      file: "rare-group.webp" },
  { name: "LuLu Hypermarket",file: "lulu-hypermarket.png" },
  { name: "Carrefour",       file: "carrefour.webp" },
  { name: "Pizza Hut",       file: "pizza-hut.png" },
  { name: "McDonald's",      file: "mcdonald-s.png" },
  { name: "Ninja",           file: "ninja.png" },
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
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={`/brands/${b.file}`}
                  alt={b.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
