import { Component, For } from 'solid-js';

const Services: Component = () => {
  const services = [
    {
      title: "Hybrid Flooring",
      description: "Durable, 100% waterproof, and stylish. The perfect combination of resilience and aesthetics for high-traffic areas, offering the look of real wood without the intense maintenance.",
      image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Colorful abstract geometric pattern on a floor, representing hybrid flooring."
    },
    {
      title: "Engineered Hardwood",
      description: "Real wood beauty with enhanced structural stability. Ideal for areas with fluctuating humidity, providing a premium finish that resists warping and bowing.",
      image: "https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A modern living room with engineered hardwood flooring."
    },
    {
      title: "Hardwood Flooring",
      description: "Timeless elegance and unmatched longevity. Elevate your home with the classic appeal, warmth, and enduring value of solid hardwood floors.",
      image: "https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A close-up of a person's feet on a classic hardwood floor."
    }
  ];

  return (
    <section id="services" class="bg-gray-50 text-gray-900 px-6 py-16 md:px-12 md:py-32">
      <div class="max-w-6xl mx-auto">
        <div class="mb-16">
          <h2 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
            Our Premium Services
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl">
            We offer a curated selection of top-tier flooring options to meet the aesthetic and functional needs of any space.
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10">
          <For each={services}>
            {(service) => (
              <div class="flex flex-col gap-6">
                <img src={service.image} alt={service.alt} class="w-full h-80 object-cover rounded" />
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
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