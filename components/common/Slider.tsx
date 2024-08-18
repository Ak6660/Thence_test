'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Card3D from './Card3D';
import { Content } from './HeroSection';
import SliderButton from './SliderButton';

interface SliderProps {
  data: Content[];
}

function Slider({ data }: SliderProps) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderId = useRef<NodeJS.Timeout | undefined>(
    undefined
  );
  useEffect(() => {
    // let id = sliderId.current;
    // if (id) {
    //   clearInterval(id);
    // }
    // id = setInterval(() => {
    //   setSliderIndex((prev) =>
    //     prev === data.length - 1 ? 0 : prev + 1
    //   );
    // }, 3000);
    // return () => {
    //   clearInterval(id);
    // };
  }, [sliderIndex, data.length]);

  return (
    <div className="flex relative">
      {data.length &&
        data.map((content, idx) => (
          <div
            key={idx}
            style={{
              translate: `${-100 * sliderIndex}%`,
              transition: 'translate 600ms ease-in-out',
            }}
            className={`min-w-full grid grid-flow-col grid-cols-[2fr_1fr] relative justify-between h-[100vh] text-3xl mt-16`}
          >
            <div className="relative  flex justify-center ">
              <div className="relative h-[50rem] w-[50rem] m-10 rounded-[5rem] overflow-clip">
                <Image
                  src={content.mainImage}
                  alt="hero-slider-image"
                  fill
                />
              </div>
              <Card3D>
                <div
                  style={{
                    transform: 'translateZ(75px)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute top-56 left-14 bg-white w-[25rem] h-[22rem] rounded-3xl shadow-2xl p-12 flex justify-center gap-10 flex-col"
                >
                  <div
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                    className="relative"
                  >
                    <div
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="absolute w-32 h-36  top-[-55px] left-[-30px]"
                    >
                      {content.card1Design && (
                        <Image
                          style={{
                            transform: 'translateZ(75px)',
                          }}
                          src={content.card1Design}
                          alt="design"
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <h3
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="text-[5rem] font-semibold mt-5"
                    >
                      {content.card1Heading}
                    </h3>
                  </div>
                  <div
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                    className="mt-5 leading-10 text-gray-500 text-2xl"
                  >
                    <p
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                    >
                      {content.card1description}
                    </p>
                  </div>
                </div>
              </Card3D>
              <Card3D>
                <div
                  style={{
                    transform: 'translateZ(75px)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative top-[42rem] left-52 w-[20rem] h-[7rem] rounded-full bg-gray-50 flex justify-evenly items-center  shadow-2xl  "
                >
                  <div
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                    className="w-10 h-10 relative rounded-full bg-gray-200 p-8"
                  >
                    <Image
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      src={content.smallCardIcon}
                      alt="design-image"
                      fill
                      className="object-cover p-3"
                    />
                  </div>
                  <div
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                  >
                    <p
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="font-semibold"
                    >
                      {content.card2Heading}
                    </p>
                    <p
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="text-xl text-gray-500"
                    >
                      {content.card2Description}
                    </p>
                  </div>
                </div>
              </Card3D>
              <Card3D>
                <div
                  style={{
                    transform: 'translateZ(75px)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute px-10 top-[45rem] left-[50rem] flex flex-col justify-center  shadow-2xl bg-[#002E18] w-[28rem] h-[22rem] rounded-[3rem] "
                >
                  <div
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                    className="flex  items-baseline pt-5 justify-start gap-5  h-[8rem]  "
                  >
                    <p
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="text-white text-[5rem] font-semibold"
                    >
                      {content.card3Heading}
                    </p>
                    <p
                      style={{
                        transform: 'translateZ(75px)',
                      }}
                      className="text-gray-300"
                    >
                      {content.card3Subheading}
                    </p>
                  </div>
                  <p
                    style={{
                      transform: 'translateZ(75px)',
                    }}
                    className=" text-gray-300"
                  >
                    {content.card3Decription}
                  </p>
                </div>
              </Card3D>
            </div>
            <div className=" flex flex-col justify-start gap-16 py-20 items-start ">
              <p className="font-semibold text-[4rem] leading-[5rem]">
                Enhance fortune 50 company&apos;s insights
                teams research capacities
              </p>

              <div className="mt-36">
                <Button type="primary" classes="py-10 ">
                  <div className="relative flex items-center gap-5 text-3xl">
                    Explore More
                    <div className="relative w-6 h-6  ">
                      <Image
                        src={content.arrowIcon}
                        alt="arrow"
                        fill
                      />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ))}
      <SliderButton
        data={data}
        sliderIndex={sliderIndex}
        setSliderIndex={setSliderIndex}
      />
    </div>
  );
}

export default Slider;
