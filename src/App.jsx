import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const phonePrimary = "+919869707587";
  const phoneSecondary = "+919221858213";
  const displayPrimary = "+91 98697 07587";
  const displaySecondary = "+91 92218 58213";
  const email = "cp.interiormumbai@gmail.com";

  const whatsapp = `https://wa.me/919869707587?text=${encodeURIComponent(
    "Hello C.P. Interiors, I would like a consultation."
  )}`;

  const instagram = "https://www.instagram.com/_cpinterior_/";


  const [currentIndex, setCurrentIndex] = useState(0);
  const serviceRefs = useRef([]);
  const intervalRef = useRef(null);

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
  ];

  /* SLIDER AUTOPLAY */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  /* SERVICES ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.25 }
    );

    serviceRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      serviceRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Residential Interiors",
      desc: "Elegant, functional homes tailored to your lifestyle.",
    },
    {
      title: "Commercial & Office",
      desc: "Modern offices designed to improve productivity.",
    },
    {
      title: "Modular Kitchen",
      desc: "Smart, space-efficient kitchens with premium finishes.",
    },
    {
      title: "False Ceiling & Lighting",
      desc: "Architectural ceilings with ambient lighting.",
    },
    {
      title: "Custom Furniture & Wardrobes",
      desc: "Made-to-measure furniture for perfect fit.",
    },
    {
      title: "Renovation & Space Planning",
      desc: "Transform existing spaces with expert planning.",
    },
  ];

  return (
    <div className="site-wrapper">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">C.P. Interior</div>

        <div className="nav-actions">
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </a>

          <a href={`tel:${phonePrimary}`} className="nav-link hide-mobile">
            {displayPrimary}
          </a>

          <a href={whatsapp} target="_blank" rel="noreferrer" className="nav-btn">
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <h1>
              Interior design
              <br />
              that feels effortless.
            </h1>
            <p>
              Premium residential and commercial interiors crafted with
              precision in Mumbai.
            </p>

            <div className="hero-actions">
              <a href={whatsapp} className="btn primary">
                Get Consultation
              </a>
              <a
                href={`tel:${phonePrimary}`}
                className="btn secondary"
                aria-label="Call Now"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* SLIDER */}
        <section className="section light">
          <div className="container">
            <h2>Our Work</h2>

            <div
              className="slider-viewport"
              onMouseEnter={() => clearInterval(intervalRef.current)}
              onMouseLeave={() => {
                intervalRef.current = setInterval(() => {
                  setCurrentIndex((prev) => (prev + 1) % images.length);
                }, 3000);
              }}
            >
              <div
                className="slides-container"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {images.map((src, index) => (
                  <div className="slide-item" key={index}>
                    <img
                      src={src}
                      alt={`C.P. Interior project ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="slider-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      currentIndex === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="container">
            <h2>Services</h2>

            <div className="grid services-grid">
              {services.map((service, i) => (
                <div
                  key={i}
                  ref={(el) => (serviceRefs.current[i] = el)}
                  className="service-card"
                >
                  <div className="icon-wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M3 12l9-9 9 9" />
                      <path d="M9 21V9h6v12" />
                    </svg>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to transform your space?</h2>
          <p>Reach us instantly via WhatsApp, email or Instagram.</p>

          <div className="cta-actions">
            <a
              href={whatsapp}
              className="btn primary light-btn"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path
                  fill="#25D366"
                  d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.9.5 3.76 1.45 5.4L2 22l4.86-1.6c1.6.88 3.4 1.35 5.23 1.35h.01c5.46 0 9.91-4.44 9.91-9.9 0-5.47-4.45-9.91-9.91-9.91z"
                />
                <path
                  fill="#ffffff"
                  d="M17.5 14.4c-.2.6-1.2 1.1-1.6 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.2-1.2-.4-2.1-.9-3.5-3-3.6-3.1-.1-.1-.9-1.1-.9-2.1 0-1 .5-1.5.7-1.7.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .5.4.2.4.6 1.4.7 1.5.1.1.1.2 0 .4-.1.2-.1.2-.2.4-.1.1-.2.2-.3.3-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.4.7.6 1.4.8 1.6.9.2.1.3.1.4-.1.1-.1.5-.6.6-.8.1-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.3.2.4.3.1.1.1.6-.1 1.2z"
                />
              </svg>
            </a>

            <a
              href={`mailto:${email}`}
              className="btn primary light-btn"
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="#111"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="btn primary light-btn"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="#E1306C"
                strokeWidth="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="6" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="#E1306C" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-phone">
          <a href={`tel:${phonePrimary}`}>{displayPrimary}</a> |{" "}
          <a href={`tel:${phoneSecondary}`}>{displaySecondary}</a>
        </div>

        <p>{email}</p>

        <p>
          GST No: <strong>27AFZPC3738F1Z5</strong>
        </p>
        <p>
          UDYAM Reg: <strong>UDYAM-MH-18-0222380</strong>
        </p>

        <p>© {new Date().getFullYear()} C.P. Interior</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Chat"
      >
        <svg viewBox="0 0 32 32" width="28" height="28">
          <path
            fill="#25D366"
            d="M16 2C8.82 2 3 7.64 3 14.6c0 2.44.66 4.72 1.8 6.7L3 30l8.96-2.35c1.86 1.02 4 1.56 6.21 1.56h.01c7.18 0 13.01-5.64 13.01-12.6C31.19 7.64 23.36 2 16 2z"
          />
          <path
            fill="#ffffff"
            d="M22.44 18.64c-.28.8-1.64 1.55-2.26 1.64-.56.1-1.28.15-2.07-.13-.48-.16-1.1-.36-1.89-.7-3.32-1.43-5.49-4.79-5.65-5.01-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.32.67-.4.89-.4h.66c.22 0 .49-.08.77.6.28.68.97 2.35 1.05 2.53.09.18.14.37.03.59-.11.22-.17.37-.34.56-.17.19-.36.42-.52.57-.17.17-.34.35-.15.68.19.34.85 1.4 1.83 2.26 1.26 1.12 2.32 1.47 2.65 1.64.34.17.54.14.74-.09.2-.23.85-.99 1.08-1.32.23-.34.45-.28.77-.17.31.11 1.99.93 2.34 1.1.35.17.57.26.66.4.09.15.09.85-.19 1.64z"
          />
        </svg>
      </a>
    </div>
  );
}
