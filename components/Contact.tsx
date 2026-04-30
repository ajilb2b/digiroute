"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* ── LEFT: Info ── */}
          <RevealWrapper>
            <div className="contact-text">
              <div className="section-tag">Get in Touch</div>
              <h2>Let&apos;s move your <em>logistics forward.</em></h2>
              <p>Ready to transform your delivery operations? Tell us about your business and a member of our commercial team will reach out within one working day.</p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-val"><a href="mailto:info@digiroute.me">info@digiroute.me</a></div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-val">+974 4140 4004 &nbsp;|&nbsp; +971 50 981 3825</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="10" r="3"/><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">Qatar Office</div>
                    <div className="contact-val">
                      Office #7, 3rd Floor, Building 01<br />
                      Muntazah Commercial Complex, Doha
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="10" r="3"/><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">UAE Office</div>
                    <div className="contact-val">
                      Office #302, Fakhrudin Properties<br />
                      Al Quoz 3, Dubai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* ── RIGHT: Form ── */}
          <RevealWrapper>
            <div className="contact-form">

              {/* Success state */}
              {status === "success" ? (
                <div className="cf-success">
                  <div className="cf-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                  </div>
                  <h3 className="cf-success-title">Message sent!</h3>
                  <p className="cf-success-sub">
                    Thanks for reaching out. Our team will get back to you within one working day.
                    Check your inbox — we&apos;ve sent you a confirmation email too.
                  </p>
                  <button className="cf-success-reset" onClick={() => setStatus("idle")}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="e.g. Sarah Hassan"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Work Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="message">How can we help?</label>
                    <textarea
                      id="message" name="message"
                      placeholder="Tell us about your delivery operations, daily volumes, and where we can add value…"
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="cf-error">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
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
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}
