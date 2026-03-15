import type { Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { createMediaQuery } from '@solid-primitives/media';

const Navbar: Component = () => {
  const location = useLocation();
  const isMobile = createMediaQuery("(max-width: 768px)");
  const activeLinkStyle = { color: "#111827", "font-weight": "600" };
  const inactiveLinkStyle = { color: "#6b7280", "text-decoration": "none", transition: "color 0.2s" };

  const linkStyle = (path: string) => {
    return location.pathname === path ? { ...inactiveLinkStyle, ...activeLinkStyle } : inactiveLinkStyle;
  };

  return (
    <nav style={{ display: "flex", "flex-direction": isMobile() ? "column" : "row", gap: isMobile() ? "1rem" : "0", "justify-content": "space-between", padding: isMobile() ? "1.5rem" : "1.5rem 3rem", "background-color": "rgba(255, 255, 255, 0.9)", color: "#111827", "align-items": "center", "border-bottom": "1px solid #f3f4f6", "backdrop-filter": "blur(12px)", position: "sticky", top: 0, "z-index": 50 }}>
      <div style={{ display: "flex", "align-items": "center", "font-size": "1.5rem", "font-weight": "800", "letter-spacing": "-0.025em" }}>
        <A href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none", color: "#111827", gap: "0.75rem" }}>
          <img src="/logo.png" alt="Auric Lapis Flooring Logo" style={{ width: "36px", height: "36px", display: "block" }} />
          <span>Auric Lapis</span>
        </A>
      </div>
      <ul style={{ display: "flex", "flex-wrap": "wrap", "justify-content": "center", gap: isMobile() ? "1.5rem" : "2.5rem", "list-style": "none", margin: 0, padding: 0, "align-items": "center", "font-size": "0.9375rem" }}>
        <li><A href="/" style={linkStyle('/')}>Home</A></li>
        <li><A href="/about" style={linkStyle('/about')}>About</A></li>
        <li><A href="/services" style={linkStyle('/services')}>Services</A></li>
        <li>
          <A 
            href="/quote" 
            style={{ 
              "background-color": "#111827", 
              padding: "0.5rem 1.25rem", 
              "border-radius": "4px", 
              color: "#ffffff", 
              "text-decoration": "none",
              "font-weight": "500",
              "font-size": "0.875rem",
              "letter-spacing": "0.05em",
              "text-transform": "uppercase",
              "box-shadow": location.pathname === '/quote' ? "0 0 0 2px #ffffff, 0 0 0 4px #111827" : "none",
              transition: "all 0.2s"
            }}
          >
            Get A Quote
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;