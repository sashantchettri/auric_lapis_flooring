import type { Component } from 'solid-js';
import { createMediaQuery } from '@solid-primitives/media';

const Hero: Component = () => {
  const isMobile = createMediaQuery("(max-width: 768px)");
  return (
    <section style={{ 
      "background-color": "#ffffff", 
      color: "#111827", 
      padding: isMobile() ? "4rem 1.5rem" : "6rem 3rem", 
      "min-height": "85vh",
      display: "flex",
      "align-items": "center"
    }}>
      <div style={{ "max-width": "80rem", width: "100%", margin: "0 auto", display: "grid", "grid-template-columns": isMobile() ? "1fr" : "1fr 1fr", gap: "4rem", "align-items": "center" }}>
        <div>
          <h1 style={{ "font-size": isMobile() ? "3rem" : "5.5rem", "line-height": "1", "font-weight": "800", "margin-bottom": "1.5rem", "letter-spacing": "-0.04em" }}>
            Refined.<br/>Minimal.<br/>Flooring.
          </h1>
          <p style={{ "font-size": isMobile() ? "1.125rem" : "1.25rem", color: "#4b5563", "margin-bottom": "3rem", "line-height": "1.6", "max-width": "30rem" }}>
            Elevate your space with premium materials and uncompromising craftsmanship. Designed for the modern interior.
          </p>
          <a 
            href="/quote" 
            style={{ 
              display: "inline-block",
              "background-color": "#111827", 
              padding: "1rem 2.5rem", 
              "border-radius": "4px", 
              color: "#ffffff", 
              "text-decoration": "none",
              "font-weight": "500",
              "font-size": "0.875rem",
              "letter-spacing": "0.05em",
              "text-transform": "uppercase"
            }}
          >
            Get an Estimate
          </a>
        </div>
        <div style={{ width: "100%", height: isMobile() ? "400px" : "700px", "background-image": "url('https://images.pexels.com/photos/2215088/pexels-photo-2215088.jpeg?auto=compress&cs=tinysrgb&w=1200')", "background-size": "cover", "background-position": "center", "border-radius": "8px" }}></div>
      </div>
    </section>
  );
};

export default Hero;