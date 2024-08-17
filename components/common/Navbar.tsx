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
          console.log(entries[0]);
        } else {
          setSticky(true);
        }
      },
      { threshold: 1 }
    );

    // if (navRef) {
    //   observer.observe(navRef);
    // }

    // return () => {
    //   if (navRef) {
    //     observer.unobserve(navRef);
    //   }
    // };
  }, [navbarRef]);

  return (
    <div
      ref={navbarRef}
      className={`w-[96vw] bg-white mx-auto h-40 text-black gap-8 border-gray-300 flex items-center justify-between p-6 border-[.1rem] my-5 rounded-full ${
        sticky ? 'sticky top-0 left-0 z-50' : ''
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
  );
}

export default Navbar;
