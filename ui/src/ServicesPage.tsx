import type { Component } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import Services from './Services';

const ServicesPage: Component = () => {
  // The Services component has its own padding and background, so we can just render it directly.
  // We could add more content here if needed, like an introduction.
  return (
    <>
      <Title>Premium Flooring Services | Auric Lapis</Title>
      <Meta name="description" content="Explore our curated selection of top-tier flooring options: Hybrid, Engineered Hardwood, and classic Hardwood floors designed for longevity and style." />
      <Services />
    </>
  );
};

export default ServicesPage;