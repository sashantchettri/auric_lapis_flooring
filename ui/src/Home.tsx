import type { Component } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import Hero from './Hero';
import Services from './Services';

const Home: Component = () => {
  return (
    <>
      <Title>Auric Lapis Flooring | Premium Minimalist Floors</Title>
      <Meta name="description" content="Elevate your space with premium materials and uncompromising craftsmanship. Specializing in luxury hybrid, engineered, and solid hardwood flooring." />
      <Hero />
      <Services />
    </>
  );
};

export default Home;