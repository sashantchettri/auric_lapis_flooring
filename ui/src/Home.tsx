import type { Component } from 'solid-js';
import Hero from './Hero';
import Services from './Services';

const Home: Component = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default Home;