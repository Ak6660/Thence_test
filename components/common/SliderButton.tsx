'use client';
import React, { Dispatch } from 'react';
import { Content } from './HeroSection';

function SliderButton({
  data,
  sliderIndex,
  setSliderIndex,
}: {
  data: Content[];
  sliderIndex: number;
  setSliderIndex: Dispatch<React.SetStateAction<number>>;
}) {
  const handleClick = (id: number) => {
    setSliderIndex(id);
  };
  return (
    <div className="flex absolute left-[67%] top-[50%]   w-full gap-5">
      {data.length &&
        data.map((_, idx) => (
          <div
            onClick={() => handleClick(idx)}
            key={idx}
            className={`h-4 w-4 cursor-pointer ${
              sliderIndex === idx
                ? 'bg-green-500 '
                : 'bg-gray-200 hover:bg-gray-300'
            }  rounded-full `}
          ></div>
        ))}
    </div>
  );
}

export default SliderButton;
