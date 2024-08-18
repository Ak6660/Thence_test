import { NextFont } from 'next/dist/compiled/@next/font';
import { Covered_By_Your_Grace } from 'next/font/google';
import { StaticImageData } from 'next/image';
import rocketImage from '/public/images/Frame (1).png';
import HeroImage from '/public/images/image 32618.png';
import crown from '/public/images/spark, sparkle, 26.png';
import arrow from '/public/images/Vector.png';
import Slider from './Slider';

const coveredByYourGraceFont = Covered_By_Your_Grace({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
}) as NextFont;

export interface Content {
  mainImage: StaticImageData;
  card1Design?: StaticImageData;
  arrowIcon: StaticImageData;
  smallCardIcon: StaticImageData;
  card1Heading: string;
  card1description: string;
  card2Heading: string;
  card2Description: string;
  card3Heading: string;
  card3Subheading: string;
  card3Decription: string;
}

const contentArr: Content[] = [
  {
    mainImage: HeroImage,
    card1Design: crown,
    arrowIcon: arrow,
    smallCardIcon: rocketImage,
    card1Heading: '40%',
    card1description:
      'Achieved reduction in project execution time by optimising team availability',
    card2Heading: '10 Days',
    card2Description: 'Staff Deployment',
    card3Heading: '$0.5',
    card3Subheading: 'Million',
    card3Decription:
      'Reduced client expenses by saving on hiring and employee costs.',
  },
  {
    mainImage: HeroImage,
    card1Design: crown,
    arrowIcon: arrow,
    smallCardIcon: rocketImage,
    card1Heading: '40%',
    card1description:
      'Achieved reduction in project execution time by optimising team availability',
    card2Heading: '10 Days',
    card2Description: 'Staff Deployment',
    card3Heading: '$0.5',
    card3Subheading: 'Million',
    card3Decription:
      'Reduced client expenses by saving on hiring and employee costs.',
  },
  {
    mainImage: HeroImage,
    card1Design: crown,
    arrowIcon: arrow,
    smallCardIcon: rocketImage,
    card1Heading: '40%',
    card1description:
      'Achieved reduction in project execution time by optimising team availability',
    card2Heading: '10 Days',
    card2Description: 'Staff Deployment',
    card3Heading: '$0.5',
    card3Subheading: 'Million',
    card3Decription:
      'Reduced client expenses by saving on hiring and employee costs.',
  },
];

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
      <Slider data={contentArr} />

      {/* Slider-end */}
    </div>
  );
}

export default HeroSection;
