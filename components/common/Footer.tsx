import React from 'react';

function Footer() {
  return (
    <div className="bg-[#F5F5F5] w-[94vw] h-[10rem] rounded-[2rem] mx-auto overflow-clip flex justify-between px-16 items-center mb-10">
      <p className="text-2xl cursor-pointer">
        &#169; Talup 2023. All rights reserved
      </p>
      <div className="flex gap-10 text-2xl">
        <p className="cursor-pointer underline">
          Terms & Conditions
        </p>
        <p className="cursor-pointer underline">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
