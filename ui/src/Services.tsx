import { Component, For } from 'solid-js';
import { createMediaQuery } from '@solid-primitives/media';

const Services: Component = () => {
  const isMobile = createMediaQuery("(max-width: 768px)");
  const services = [
    {
      title: "Hybrid Flooring",
      description: "Durable, 100% waterproof, and stylish. The perfect combination of resilience and aesthetics for high-traffic areas, offering the look of real wood without the intense maintenance.",
      image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Engineered Hardwood",
      description: "Real wood beauty with enhanced structural stability. Ideal for areas with fluctuating humidity, providing a premium finish that resists warping and bowing.",
      image: "https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Hardwood Flooring",
      description: "Timeless elegance and unmatched longevity. Elevate your home with the classic appeal, warmth, and enduring value of solid hardwood floors.",
      image: "https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="services" style={{ "background-color": "#f9fafb", color: "#111827", padding: isMobile() ? "4rem 1.5rem" : "8rem 3rem" }}>
      <div style={{ "max-width": "72rem", margin: "0 auto" }}>
        <div style={{ "margin-bottom": "4rem" }}>
          <h2 style={{ "font-size": isMobile() ? "2.25rem" : "3.5rem", "font-weight": "800", "margin-bottom": "1rem", "letter-spacing": "-0.04em" }}>
            Our Premium Services
          </h2>
          <p style={{ color: "#4b5563", "font-size": "1.125rem", "max-width": "36rem" }}>
            We offer a curated selection of top-tier flooring options to meet the aesthetic and functional needs of any space.
          </p>
        </div>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          <For each={services}>
            {(service) => (
              <div style={{ 
                display: "flex",
                "flex-direction": "column",
                gap: "1.5rem"
              }}>
                <img src={service.image} alt={service.title} style={{ width: "100%", height: "320px", "object-fit": "cover", "border-radius": "4px" }} />
                <div>
                  <h3 style={{ "font-size": "1.25rem", "font-weight": "700", "margin-bottom": "0.5rem", color: "#111827", "letter-spacing": "-0.02em" }}>
                    {service.title}
                  </h3>
                  <p style={{ "font-size": "1rem", color: "#4b5563", "line-height": "1.6" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Services;