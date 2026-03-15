import { Component, createSignal } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { X, Menu } from 'lucide-solid';

const Navbar: Component = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const linkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900'}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <nav class="flex flex-col p-6 bg-white/90 text-gray-900 border-b border-gray-100 backdrop-blur-lg sticky top-0 z-50">
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center text-2xl font-extrabold tracking-tight">
          <A href="/" class="flex items-center no-underline text-gray-900 gap-3">
            <img src="/logo.png" alt="Auric Lapis Flooring Logo" class="w-9 h-9 block" />
            <span>Auric Lapis</span>
          </A>
        </div>
        
        <div class="md:hidden">
          <button onClick={toggleMenu} class="bg-transparent border-none cursor-pointer p-2">
            {isMenuOpen() ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <ul class="hidden md:flex flex-wrap justify-center gap-10 list-none m-0 p-0 items-center text-base">
          <li><A href="/" class={linkClass('/')}>Home</A></li>
          <li><A href="/about" class={linkClass('/about')}>About</A></li>
          <li><A href="/services" class={linkClass('/services')}>Services</A></li>
          <li>
            <A 
              href="/quote" 
              class={`bg-gray-900 py-2 px-5 rounded text-white no-underline font-medium text-sm tracking-widest uppercase transition-all ${location.pathname === '/quote' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''}`}
            >
              Get A Quote
            </A>
          </li>
        </ul>
      </div>
      
      <div class={`${isMenuOpen() ? 'block' : 'hidden'} md:hidden`}>
        <ul class="flex flex-col gap-6 list-none m-0 pt-4 items-stretch text-lg border-t border-gray-100 mt-4">
          <li><A href="/" class={linkClass('/')} onClick={toggleMenu}>Home</A></li>
          <li><A href="/about" class={linkClass('/about')} onClick={toggleMenu}>About</A></li>
          <li><A href="/services" class={linkClass('/services')} onClick={toggleMenu}>Services</A></li>
          <li>
            <A 
              href="/quote" 
              onClick={toggleMenu}
              class="block text-center bg-gray-900 py-3 px-5 rounded text-white no-underline font-medium text-sm tracking-widest uppercase transition-all"
            >
              Get A Quote
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;