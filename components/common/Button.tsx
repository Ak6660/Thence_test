import React from 'react';

interface ButtonProps {
  type: string;
  children: React.ReactNode;
  classes?: string;
  disabled?: boolean;
}

interface Variant {
  primary: string;
  secondary: string;
}

function Button({
  type,
  children,
  classes,
  disabled,
}: ButtonProps) {
  const variant = {
    primary: ` relative text-2xl p-8 bg-[#1C1C1C]  px-16 text-gray-50 border-gray-300 flex items-center justify-center border-[.1rem] my-3 rounded-full hover:bg-stone-700`,
    secondary: `relative text-2xl p-8  px-16 text-black border-gray-300 flex items-center justify-center border-[.1rem] my-3 rounded-full hover:bg-gray-200`,
  };

  const classname = variant[type as keyof Variant];
  return (
    <button
      className={`${classname} ${classes} disabled:bg-[#C9C9C9]`}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
}

export default Button;
