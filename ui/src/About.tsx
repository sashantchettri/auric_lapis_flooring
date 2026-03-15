import type { Component } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

const About: Component = () => {
  return (
    <>
      <Title>Our Philosophy | Auric Lapis Flooring</Title>
      <Meta name="description" content="Discover the Auric Lapis philosophy. We are a team of master craftsmen dedicated to minimalist design and exquisite flooring materials." />
      <div class="bg-white text-gray-900 px-6 py-16 md:px-12 md:py-32 min-h-[calc(100vh-81px)]">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h1 class="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight">
                Our<br/>Philosophy.
              </h1>
              <div class="text-base text-gray-600 leading-relaxed flex flex-col gap-6">
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
              <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Close up of premium wood flooring planks" class="w-full rounded-lg object-cover h-[400px] md:h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;