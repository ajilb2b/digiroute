import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--paper)" }}>
        <div style={{ textAlign: "center", padding: "80px 24px" }}>
          <div style={{ fontSize: "5rem", fontWeight: 900, color: "var(--violet)", lineHeight: 1, marginBottom: 16 }}>404</div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>Page not found</h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 36, maxWidth: 400, margin: "0 auto 36px" }}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn btn-orange">
            Back to Home
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
