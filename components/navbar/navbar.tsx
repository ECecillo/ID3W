'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const useHideOnScroll = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return show;
};

const Navbar = () => {
  const show = useHideOnScroll();

  const navbarClasses = show
    ? 'fixed top-0 left-0 w-full bg-white z-10 transition-all duration-300 ease-in-out'
    : 'fixed top-0 left-0 w-full bg-white z-10 transition-all duration-300 ease-in-out transform translate-y-[-100%]';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <span className="font-semibold text-xl tracking-tight text-[#426B1F]">Éco Complot</span>
        <div className="flex space-x-4 items-center">
          <Link
            href="/"
            className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-black duration-500"
          >
            Accueil
          </Link>
          <Link
            href="/about-us"
            className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-black duration-500"
          >
            Qui sommes-nous?
          </Link>
          <a className="bg-[#426B1F] inline-block p-4 rounded-lg relative">
            <span className="flex h-2 w-8 items-center justify-center">
              <a href='#'>
                <Image
                  src="/game.png"
                  width={25}
                  height={25}
                  alt="Game controller"
                  className="align-middle"
                />
              </a>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
