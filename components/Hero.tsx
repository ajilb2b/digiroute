"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "DigiRoute",
    tagline: "LAST-MILE LOGISTICS",
    description:
      "Professional last-mile delivery, rider outsourcing, fleet management, and end-to-end commercial logistics — engineered for modern businesses across Qatar and the UAE.",
    cta: "Get a Quote",
    href: "#contact",
  },
  {
    title: "Fleet Ready",
    tagline: "RIDERS & FLEET MANAGEMENT",
    description:
      "Vetted, trained riders and a managed fleet scaled to your delivery volume — on demand, every day.",
    cta: "Explore Services",
    href: "#services",
  },
  {
    title: "Live Dispatch",
    tagline: "REAL-TIME VISIBILITY",
    description:
      "One dispatch platform with live tracking, smart routing and proof of delivery for every drop.",
    cta: "See the Platform",
    href: "/platform",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShowText(false);
    setShowBottom(false);
    const timer = setTimeout(() => setShowText(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (!showText) return;
    const timer = setTimeout(() => setShowBottom(true), 1200);
    return () => clearTimeout(timer);
  }, [showText]);

  const slide = slides[currentSlide];

  return (
    <section className="rh">
      <div className="rh-grid" />

      {/* Slide visuals */}
      <div className="rh-visuals">
        {currentSlide === 2 && (
          <div className="rh-geo">
            <div className="rh-ring rh-ring-1" />
            <div className="rh-ring rh-ring-2" />
            <div className="rh-ring rh-ring-3" />
            <div className="rh-ring rh-ring-4" />
          </div>
        )}
      </div>

      {/* Side decorations */}
      <div className={`rh-side rh-side-l ${showText ? "on" : ""}`}>
        <div className="rh-side-line" />
        <span className="rh-side-text rh-side-text-l">Delivery First</span>
        <div className="rh-side-line" />
      </div>
      <div className={`rh-side rh-side-r ${showText ? "on" : ""}`}>
        <div className="rh-side-line" />
        <span className="rh-side-text">Qatar &amp; UAE</span>
        <div className="rh-side-line" />
      </div>

      {/* Floating glass cards */}
      <div className={`rh-card rh-card-l ${showText ? "on" : ""}`}>
        <div className="rh-card-in">
          <div className="rh-card-ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <div>
            <div className="rh-card-t">99.8% On-Time</div>
            <div className="rh-card-s">Delivery Rate</div>
          </div>
        </div>
      </div>
      <div className={`rh-card rh-card-r ${showText ? "on" : ""}`}>
        <div className="rh-card-in">
          <div className="rh-card-ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div>
            <div className="rh-card-t">500+ Riders</div>
            <div className="rh-card-s">Active Fleet</div>
          </div>
        </div>
      </div>

      {/* Main carousel */}
      <div className="rh-main">
        <div className="rh-slides">
          {slides.map((s, index) => (
            <div key={index} className={`rh-slide ${currentSlide === index ? "active" : ""}`}>
              <h1 className="rh-title">
                {s.title.split(" ").map((word, wi) => (
                  <span key={wi} className="rh-word">
                    {word.split("").map((char, ci) => (
                      <span
                        key={ci}
                        className={`rh-char ${currentSlide === index && showText ? "show" : ""}`}
                        style={{ transitionDelay: `${ci * 50}ms` }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
              <h2 className={`rh-tagline ${currentSlide === index && showText ? "show" : ""}`}>{s.tagline}</h2>
            </div>
          ))}
        </div>

        <div className={`rh-bottom ${showBottom ? "show" : ""}`}>
          <p className="rh-desc">{slide.description}</p>
          <Link href={slide.href} className="rh-cta">
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="rh-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className="rh-dot"
            style={{ width: currentSlide === index ? 64 : 16 }}
          >
            {currentSlide === index && <span className="rh-dot-fill" />}
            <span className="rh-dot-hover" />
          </button>
        ))}
      </div>
    </section>
  );
}
