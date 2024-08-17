import { coveredByYourGraceFont } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import HeroImage from '/public/images/image 32618.png';
import crown from '/public/images/spark, sparkle, 26.png';
import Button from './Button';
import arrow from '/public/images/Vector.png';
import rocketImage from '/public/images/Frame (1).png';

function HeroSection() {
  return (
    <div className=" max-w-[95vw] mx-auto">
      <div
        className={`${coveredByYourGraceFont.className} text-[3rem] font-medium text-green-500 text-center pt-16 `}
      >
        Success Stories
      </div>
      <div className="flex flex-col justify-center items-center text-[5rem]">
        <p>Every success journey</p>
        <p>we&apos;ve encountered.</p>
      </div>

      {/* Slider */}
      <div className="flex justify-between h-[100vh] text-3xl mt-16">
        <div className="flex-[2] relative  flex justify-center ">
          <div className="relative h-[50rem] w-[50rem] m-10 rounded-[5rem] overflow-clip">
            <Image
              src={HeroImage}
              alt="hero-slider-image"
              fill
            />
          </div>
          <div className="absolute top-56 left-14 bg-white w-[25rem] h-[22rem] rounded-3xl shadow-2xl p-12 flex justify-center gap-10 flex-col hover:animate-bouncy">
            <div className="relative">
              <div className="absolute w-32 h-36  top-[-55px] left-[-30px]">
                <Image
                  src={crown}
                  alt="design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[5rem] font-semibold mt-5">
                40%
              </h3>
            </div>
            <div className="mt-5 leading-10 text-gray-500 text-2xl">
              <p>
                Achieved reduction in project execution time
                by optimising team availability
              </p>
            </div>
          </div>
          <div className="absolute bottom-44 w-[20rem] h-[7rem] rounded-full bg-gray-50 flex justify-evenly items-center left-52 shadow-2xl hover:animate-bouncy ">
            <div className="w-10 h-10 relative rounded-full bg-gray-200 p-8">
              <Image
                src={rocketImage}
                alt="design-image"
                fill
                className="object-cover p-3"
              />
            </div>
            <div>
              <p className="font-semibold">10 Days</p>
              <p className="text-xl text-gray-500">
                Staff deployment
              </p>
            </div>
          </div>
          <div className="absolute px-10 bottom-10 right-40 flex flex-col justify-center  shadow-2xl bg-[#002E18] w-[28rem] h-[22rem] rounded-[3rem] hover:animate-bouncy ">
            <div className="flex  items-baseline pt-5 justify-start gap-5  h-[8rem]  ">
              <p className="text-white text-[5rem] font-semibold">
                $0.5
              </p>
              <p className="text-gray-300">MILLION</p>
            </div>
            <p className=" text-gray-300">
              Reduced client expenses by saving on hiring
              and employee costs.
            </p>
          </div>
        </div>
        <div className="flex-1  flex flex-col justify-start gap-16 py-20 items-start ">
          <p className="font-semibold text-[4rem] leading-[5rem]">
            Enhance fortune 50 company&apos;s insights teams
            research capacities
          </p>
          <div className="flex  w-full gap-5">
            <div
              className={`h-4 w-4 cursor-pointer ${
                true
                  ? 'bg-green-500 '
                  : 'bg-gray-200 hover:bg-gray-300'
              }  rounded-full `}
            ></div>
            <div className="h-4 w-4 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full"></div>
          </div>
          <div className="mt-36">
            <Button type="primary" classes="py-10 ">
              <div className="relative flex items-center gap-5 text-3xl">
                Explore More
                <div className="relative w-6 h-6  ">
                  <Image src={arrow} alt="arrow" fill />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Slider-end */}
    </div>
  );
}

export default HeroSection;
