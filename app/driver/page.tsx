"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RevealWrapper from "@/components/RevealWrapper";
import { useState } from "react";

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Smart Driver App",
    desc: "Turn-by-turn navigation, digital proof of delivery, and real-time dispatch messages — all in one clean mobile experience.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Full Insurance Coverage",
    desc: "Ride with confidence. All DigiRoute riders are covered by comprehensive vehicle and liability insurance from day one.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Earnings Transparency",
    desc: "Track your daily and weekly earnings in the app. No surprises — just clear, on-time payments directly to your account.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Flexible Schedules",
    desc: "Choose shifts that work for you. Full-time and part-time options are available across morning, afternoon, and evening windows.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" /><path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Our dispatch team is available seven days a week to support you on the road — whether you need help with navigation or a delivery issue.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Uniform & Equipment",
    desc: "DigiRoute provides professional uniforms and required delivery equipment — helping you look the part and serve customers well.",
  },
];

const steps = [
  { num: "01", title: "Submit your application", desc: "Fill in the form below with your details and vehicle information. Takes less than 3 minutes." },
  { num: "02", title: "Background screening", desc: "Our team reviews your documents and conducts a quick background check — usually completed within 48 hours." },
  { num: "03", title: "Onboarding & training", desc: "Attend a short in-person or remote onboarding session. We walk you through the app, standards, and your first route." },
  { num: "04", title: "Start earning", desc: "Pick your first shift, log in to the app, and hit the road. Your earnings tracker updates in real time." },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function DriverPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    vehicle: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Re-use the /api/contact endpoint — format as a driver enquiry
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: `Driver Application — ${form.city} — ${form.vehicle}`,
          message: `Phone: ${form.phone}\nCity: ${form.city}\nVehicle: ${form.vehicle}\n\n${form.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", city: "", vehicle: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Become a Driver"
          title="Join the DigiRoute"
          titleEm="rider network."
          sub="Earn competitive pay, enjoy flexible shifts, and ride with full insurance coverage — backed by a team that supports you every kilometre."
          breadcrumb="Become a Driver"
        />

        {/* Benefits grid */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper className="section-head">
              <div>
                <div className="section-tag">Why DigiRoute</div>
                <h2 className="section-title">
                  Everything you need<br /><em>to succeed on the road.</em>
                </h2>
              </div>
              <p className="section-desc">
                We invest in our riders — because great drivers are the heart of our service promise.
              </p>
            </RevealWrapper>

            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, marginTop: 56 }}>
                {benefits.map((b) => (
                  <div key={b.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "28px 26px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--violet-faint)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--violet)", marginBottom: 16 }}>
                      {b.icon}
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{b.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container">
            <RevealWrapper>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>How it works</div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)" }}>
                  On the road in <em style={{ fontStyle: "italic", color: "var(--violet)" }}>four simple steps.</em>
                </h2>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 24 }}>
                {steps.map((step) => (
                  <div key={step.num} style={{ position: "relative" }}>
                    <div style={{ fontSize: "3rem", fontWeight: 900, color: "var(--violet)", opacity: 0.12, lineHeight: 1, marginBottom: 8 }}>{step.num}</div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{step.title}</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Application form */}
        <section style={{ background: "var(--paper)", paddingTop: 100, paddingBottom: 120 }}>
          <div className="container">
            <RevealWrapper>
              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                  <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>Apply Now</div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>
                    Submit your application.
                  </h2>
                  <p style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.65 }}>
                    Fill in the form below and our team will contact you within 48 hours to proceed with screening and onboarding.
                  </p>
                </div>

                <div className="contact-form">
                  {status === "success" ? (
                    <div className="cf-success">
                      <div className="cf-success-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <h3 className="cf-success-title">Application submitted!</h3>
                      <p className="cf-success-sub">
                        Thank you for applying to join DigiRoute. Our team will review your application and get back to you within 48 hours.
                      </p>
                      <button className="cf-success-reset" onClick={() => setStatus("idle")}>
                        Submit another application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                        <div className="field">
                          <label htmlFor="name">Full Name</label>
                          <input
                            id="name" name="name" type="text"
                            placeholder="e.g. Ahmed Al-Rashidi"
                            value={form.name}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            id="phone" name="phone" type="tel"
                            placeholder="+974 5xxx xxxx"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email" name="email" type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                        <div className="field">
                          <label htmlFor="city">City</label>
                          <select id="city" name="city" value={form.city} onChange={handleChange} required disabled={status === "loading"} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid var(--border)", fontSize: "0.95rem", color: form.city ? "var(--ink)" : "var(--muted)", background: "#fff", outline: "none", appearance: "none", cursor: "pointer" }}>
                            <option value="" disabled>Select city…</option>
                            <option value="Doha">Doha, Qatar</option>
                            <option value="Dubai">Dubai, UAE</option>
                            <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="vehicle">Vehicle Type</label>
                          <select id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} required disabled={status === "loading"} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid var(--border)", fontSize: "0.95rem", color: form.vehicle ? "var(--ink)" : "var(--muted)", background: "#fff", outline: "none", appearance: "none", cursor: "pointer" }}>
                            <option value="" disabled>Select vehicle…</option>
                            <option value="Motorcycle">Motorcycle</option>
                            <option value="Bicycle">Bicycle / E-Bike</option>
                            <option value="Car">Car</option>
                            <option value="Van">Van</option>
                          </select>
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="message">Anything else we should know? <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
                        <textarea
                          id="message" name="message"
                          placeholder="Previous delivery experience, preferred shift times, questions…"
                          value={form.message}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          style={{ minHeight: 100 }}
                        />
                      </div>

                      {status === "error" && (
                        <div className="cf-error">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                          </svg>
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="form-submit"
                        disabled={status === "loading"}
                        style={{ opacity: status === "loading" ? 0.75 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                      >
                        {status === "loading" ? (
                          <>
                            <span className="cf-spinner" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Application
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
