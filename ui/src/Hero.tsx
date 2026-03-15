import type { Component } from 'solid-js';

const Hero: Component = () => {
  return (
    <section class="bg-white text-gray-900 px-6 py-16 md:px-12 md:py-24 min-h-[85vh] flex items-center">
      <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-5xl md:text-8xl leading-none font-extrabold mb-6 tracking-tighter">
            Refined.<br/>Minimal.<br/>Flooring.
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-md">
            Elevate your space with premium materials and uncompromising craftsmanship. Designed for the modern interior.
          </p>
          <a
            href="/quote"
            class="inline-block bg-gray-900 py-4 px-10 rounded text-white no-underline font-medium text-sm tracking-widest uppercase"
          >
            Get an Estimate
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A minimalist living room with light wood flooring and modern furniture."
          class="w-full h-[400px] md:h-[700px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;