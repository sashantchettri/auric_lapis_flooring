import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { createMediaQuery } from '@solid-primitives/media';
import { Title, Meta } from '@solidjs/meta';

const Quote: Component = () => {
  const [submitted, setSubmitted] = createSignal(false);
  const isMobile = createMediaQuery("(max-width: 768px)");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    fetch("https://formsubmit.co/ajax/services@auriclapis.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    })
      .then(response => response.json())
      .then(() => setSubmitted(true))
      .catch(error => console.error("Error submitting form:", error));
  };

  const inputStyle = {
    padding: "0.875rem 1rem", 
    "border-radius": "4px", 
    border: "1px solid #d1d5db", 
    "background-color": "#ffffff", 
    color: "#111827",
    "font-size": "1rem",
    width: "100%",
    "box-sizing": "border-box",
    "font-family": "inherit"
  };

  const labelStyle = {
    "font-weight": "500",
    "font-size": "0.875rem",
    color: "#4b5563",
    "margin-bottom": "0.5rem",
    display: "block"
  };

  return (
    <>
      <Title>Get an Estimate | Auric Lapis Flooring</Title>
      <Meta name="description" content="Start your project with Auric Lapis. Share your vision with us and request a free, no-obligation premium flooring estimate today." />
      <div style={{ "background-color": "#f9fafb", color: "#111827", padding: isMobile() ? "4rem 1.5rem" : "6rem 2rem", "min-height": "calc(100vh - 81px)", display: "flex", "align-items": "center", "justify-content": "center", "box-sizing": "border-box" }}>
      <div style={{ "max-width": "32rem", width: "100%", "background-color": "#ffffff", padding: isMobile() ? "2rem 1.5rem" : "3rem", "border-radius": "8px", "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)", border: "1px solid #f3f4f6", "box-sizing": "border-box" }}>
        <h1 style={{ "font-size": isMobile() ? "2rem" : "2.5rem", "font-weight": "800", "margin-bottom": "0.5rem", "text-align": "center", "letter-spacing": "-0.04em" }}>
          Start a Project
        </h1>
        <p style={{ "text-align": "center", color: "#6b7280", "margin-bottom": "2.5rem" }}>
          Share your vision, and we will provide an estimate.
        </p>
        {submitted() ? (
          <div style={{ "background-color": "#f9fafb", padding: "3rem 2rem", "border-radius": "4px", "text-align": "center", border: "1px solid #e5e7eb" }}>
            <div style={{ color: "#111827", "margin-bottom": "1.5rem", display: "flex", "justify-content": "center" }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "0.5rem", color: "#111827", "letter-spacing": "-0.02em" }}>Received</h2>
            <p style={{ color: "#4b5563", "line-height": "1.6" }}>Thank you. Our team will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
            <div>
              <label for="name" style={labelStyle}>Full Name</label>
              <input type="text" id="name" name="name" required style={inputStyle} />
            </div>
            <div>
              <label for="email" style={labelStyle}>Email Address</label>
              <input type="email" id="email" name="email" required style={inputStyle} />
            </div>
            <div>
              <label for="service" style={labelStyle}>Service of Interest</label>
              <select id="service" name="service" required style={{...inputStyle, appearance: "none"}}>
                <option value="" disabled selected>Select</option>
                <option value="hybrid">Hybrid Flooring</option>
                <option value="engineered">Engineered Hardwood</option>
                <option value="hardwood">Hardwood Flooring</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label for="message" style={labelStyle}>Project Details</label>
              <textarea id="message" name="message" rows="4" required style={{...inputStyle, resize: "vertical"}}></textarea>
            </div>
            <button type="submit" style={{ 
              "background-color": "#111827", 
              padding: "1rem", 
              "border-radius": "4px", 
              color: "#ffffff", 
              "font-weight": "500", 
              "font-size": "0.875rem",
              "letter-spacing": "0.05em",
              "text-transform": "uppercase", 
              border: "none", 
              cursor: "pointer", 
              "margin-top": "1rem"
            }}>
              Submit Request
            </button>
          </form>
        )}
        </div>
      </div>
    </>
  );
};

export default Quote;