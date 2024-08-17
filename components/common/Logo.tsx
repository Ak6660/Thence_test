import React from 'react';
import LogoImage from '../../public/images/Frame 1261155216.png';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image className="ml-10" src={LogoImage} alt="logo" />
    </Link>
  );
}

export default Logo;
