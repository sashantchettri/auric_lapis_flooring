import type { Component } from 'solid-js';
import { createMediaQuery } from '@solid-primitives/media';

const About: Component = () => {
  const isMobile = createMediaQuery("(max-width: 768px)");
  return (
    <div style={{ "background-color": "#ffffff", color: "#111827", padding: isMobile() ? "4rem 1.5rem" : "8rem 3rem", "min-height": "calc(100vh - 81px)" }}>
      <div style={{ "max-width": "80rem", margin: "0 auto" }}>
        <div style={{ display: "grid", "grid-template-columns": isMobile() ? "1fr" : "1fr 1fr", gap: isMobile() ? "3rem" : "6rem", "align-items": "center" }}>
          <div>
            <h1 style={{ "font-size": isMobile() ? "2.5rem" : "4rem", "font-weight": "800", "margin-bottom": "2rem", "letter-spacing": "-0.04em", "line-height": "1.1" }}>
              Our<br/>Philosophy.
            </h1>
            <div style={{ "font-size": "1.0625rem", color: "#4b5563", "line-height": "1.7", display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
              <p>
                Founded on the principles of essentialism, integrity, and artistry, Auric Lapis Flooring has been redefining spaces for over a decade. We believe that true luxury lies in simplicity and the flawless execution of foundational elements.
              </p>
              <p>
                Our team is composed of master craftsmen who share a passion for minimalist design and exquisite materials. We specialize in a curated selection of premium flooring, treating every project as a canvas for quiet elegance. 
              </p>
              <p>
                From consultation to final installation, we focus on clean lines, perfect symmetry, and materials that speak for themselves. At Auric Lapis, we craft the groundwork for a beautifully simple life.
              </p>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Close up of premium wood flooring planks" style={{ width: "100%", "border-radius": "8px", "object-fit": "cover", height: isMobile() ? "400px" : "600px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;