'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import Link from 'next/link';

function Navbar() {
  const navbarRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const navRef = navbarRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSticky(false);
        } else {
          setSticky(true);
        }
      },
      { threshold: 1, rootMargin: '50px' }
    );

    if (navRef) {
      observer.observe(navRef);
    }

    return () => {
      if (navRef) {
        observer.unobserve(navRef);
      }
    };
  }, [navbarRef]);

  return (
    <>
      <div
        style={{
          position: `${sticky ? 'sticky' : 'static'}`,
          top: '10px',
          left: '0px',
          transition: 'position 6000ms ease-in-out',
        }}
        className={`w-[96vw] bg-white mx-auto h-40 text-black gap-8 border-gray-300 flex items-center justify-between p-6 border-[.1rem] my-5 rounded-full ${
          sticky
            ? 'reveal z-50 backdrop-blur-md bg-white/85'
            : ''
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Logo />
          <div className="flex gap-8">
            <Link href="/get-projects">
              <Button type="secondary">Get Projects</Button>
            </Link>
            <Button type="primary">Onboard Talent</Button>
          </div>
        </div>
      </div>
      <div ref={navbarRef} className="bg-red-500 opacity-0">
        hidden
      </div>
    </>
  );
}

export default Navbar;
