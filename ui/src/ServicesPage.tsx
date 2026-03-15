import type { Component } from 'solid-js';
import Services from './Services';

const ServicesPage: Component = () => {
  // The Services component has its own padding and background, so we can just render it directly.
  // We could add more content here if needed, like an introduction.
  return (
    <Services />
  );
};

export default ServicesPage;