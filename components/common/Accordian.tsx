'use client';
import Image from 'next/image';
import openIcon from '/public/images/Frame.png';
import closeIcon from '/public/images/closeframe.png';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface AccordianProps {
  children: ReactNode;
}

interface Item {
  heading: string;
  description: string;
}

interface HeaderProps {
  children: ReactNode;
  heading: string;
}

interface DescriptionProps {
  children: ReactNode;
  heading: string;
}

interface AccordianContextType {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
}

const AccordianContext =
  createContext<AccordianContextType>({
    open: '',
    setOpen: () => {},
  });

function Accordian({ children }: AccordianProps) {
  const [open, setOpen] = useState('');
  return (
    <AccordianContext.Provider value={{ open, setOpen }}>
      {children}
    </AccordianContext.Provider>
  );
}

function Items({ items }: { items: Item[] }) {
  const { open, setOpen } = useContext(AccordianContext);
  return items.map((item: Item, idx: number) => (
    <div
      key={idx}
      className={` mx-14 py-10 ${
        idx !== items.length - 1 || items.length === 1
          ? 'border-b-[.1rem] border-gray-300 '
          : ''
      }`}
    >
      <Header heading={item.heading}>{item.heading}</Header>
      <Description heading={item.heading}>
        {item.description}
      </Description>
    </div>
  ));
}

function Header({ children, heading }: HeaderProps) {
  const { open, setOpen } = useContext(AccordianContext);
  const handleClick = () => {
    heading === open ? setOpen('') : setOpen(heading);
  };
  return (
    <div className="flex justify-between text-3xl font-medium w-full items-start">
      <div className="w-[38rem]">{children}</div>
      <button
        className="relative w-10 h-10 "
        onClick={handleClick}
      >
        <Image
          src={heading === open ? closeIcon : openIcon}
          alt="design-icon"
          fill
          className="object-cover"
        />
      </button>
    </div>
  );
}

function Description({
  children,
  heading,
}: DescriptionProps) {
  const { open } = useContext(AccordianContext);
  return (
    open === heading && (
      <div className=" w-full pt-10 text-xl text-gray-600">
        {children}
      </div>
    )
  );
}

export default Accordian;
export { Items };
