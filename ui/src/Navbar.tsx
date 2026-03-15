import { Component, createSignal, Show } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { createMediaQuery } from '@solid-primitives/media';

const Navbar: Component = () => {
  const location = useLocation();
  const isMobile = createMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const activeLinkStyle = { color: "#111827", "font-weight": "600" };
  const inactiveLinkStyle = { color: "#6b7280", "text-decoration": "none", transition: "color 0.2s" };

  const linkStyle = (path: string) => {
    return location.pathname === path ? { ...inactiveLinkStyle, ...activeLinkStyle } : inactiveLinkStyle;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <nav style={{ 
      display: "flex", 
      "flex-direction": "column", 
      gap: isMobile() && isMenuOpen() ? "1.5rem" : "0", 
      padding: "1.5rem",
      "background-color": "rgba(255, 255, 255, 0.9)", 
      color: "#111827", 
      "border-bottom": "1px solid #f3f4f6", 
      "backdrop-filter": "blur(12px)", 
      position: "sticky", 
      top: 0, 
      "z-index": 50 
    }}>
      <div style={{ display: "flex", "justify-content": "space-between", "align-items": "center", width: "100%" }}>
        <div style={{ display: "flex", "align-items": "center", "font-size": "1.5rem", "font-weight": "800", "letter-spacing": "-0.025em" }}>
          <A href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none", color: "#111827", gap: "0.75rem" }}>
            <img src="/logo.png" alt="Auric Lapis Flooring Logo" style={{ width: "36px", height: "36px", display: "block" }} />
            <span>Auric Lapis</span>
          </A>
        </div>
        <Show when={isMobile()}>
          <button onClick={toggleMenu} style={{ "background-color": "transparent", border: "none", "cursor": "pointer", padding: "0.5rem" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </Show>
        <Show when={!isMobile()}>
          <ul style={{ display: "flex", "flex-wrap": "wrap", "justify-content": "center", gap: "2.5rem", "list-style": "none", margin: 0, padding: 0, "align-items": "center", "font-size": "0.9375rem" }}>
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
        </Show>
      </div>
      <Show when={isMobile() && isMenuOpen()}>
        <ul style={{ display: "flex", "flex-direction": "column", gap: "1.5rem", "list-style": "none", margin: "0", padding: "1rem 0 0 0", "align-items": "stretch", "font-size": "1.125rem", "border-top": "1px solid #f3f4f6", "margin-top": "1rem" }}>
          <li><A href="/" style={linkStyle('/')} onClick={toggleMenu}>Home</A></li>
          <li><A href="/about" style={linkStyle('/about')} onClick={toggleMenu}>About</A></li>
          <li><A href="/services" style={linkStyle('/services')} onClick={toggleMenu}>Services</A></li>
          <li>
            <A 
              href="/quote" 
              onClick={toggleMenu}
              style={{ 
                display: "block",
                "text-align": "center",
                "background-color": "#111827", 
                padding: "0.75rem 1.25rem", 
                "border-radius": "4px", 
                color: "#ffffff", 
                "text-decoration": "none",
                "font-weight": "500",
                "font-size": "0.875rem",
                "letter-spacing": "0.05em",
                "text-transform": "uppercase",
                transition: "all 0.2s"
              }}
            >
              Get A Quote
            </A>
          </li>
        </ul>
      </Show>
    </nav>
  );
};

export default Navbar;