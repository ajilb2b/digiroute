import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="top">
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="logo" style={{ gap: 0 }}>
          <Image
            src="/digiroute-logo-transparent.png"
            alt="DigiRoute Logistics Services W.L.L"
            width={200}
            height={100}
            priority
            style={{ height: "72px", width: "auto", objectFit: "contain", marginTop: "8px" }}
          />
        </Link>

        {/* Nav links */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* CTAs */}
        <div className="nav-cta">
          <Link href="/driver" className="btn btn-ghost">Become a Driver</Link>
          <Link href="/contact" className="btn btn-orange">
            Get Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
