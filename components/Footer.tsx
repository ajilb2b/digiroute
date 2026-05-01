import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            {/* Logo — inverted to white for dark background */}
            <Link href="/" className="logo" style={{ gap: 0, marginBottom: 18, display: "inline-flex" }}>
              <Image
                src="/digiroute-logo-transparent.png"
                alt="DigiRoute Logistics Services W.L.L"
                width={200}
                height={100}
                style={{
                  height: "72px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
            <p>Powering last-mile delivery excellence for modern businesses with reliable, scalable logistics solutions across Qatar and the UAE.</p>
            <div className="foot-newsletter">
              <input type="email" placeholder="your@work.com" aria-label="Email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">Last-Mile Delivery</Link></li>
              <li><Link href="/services">Rider Outsourcing</Link></li>
              <li><Link href="/services">Fleet Management</Link></li>
              <li><Link href="/services">Commercial Logistics</Link></li>
              <li><Link href="/platform">Dispatch Platform</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="/driver">Become a Driver</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© 2026 DigiRoute Logistics Services W.L.L · Doha, Qatar &amp; Dubai, UAE · All rights reserved</p>
          <div className="foot-social">
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
