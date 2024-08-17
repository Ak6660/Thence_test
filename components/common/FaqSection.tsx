import union from '../../public/images/Union (1).png';
import Image from 'next/image';
import Accordian, { Items } from './Accordian';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Covered_By_Your_Grace } from 'next/font/google';

const coveredByYourGraceFont = Covered_By_Your_Grace({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
}) as NextFont;

const FaqSection = () => {
  return (
    <div className="h-screen flex justify-center items-center mt-80 ">
      <div className="bg-[#E8EEE7] w-[94vw] h-[95vh] rounded-[4rem] overflow-clip flex justify-center items-center">
        <div className="flex-1">
          <div className="flex flex-col pl-44">
            <h3
              className={`${coveredByYourGraceFont.className} font-semibold text-[2rem] tracking-wider  text-gray-500`}
            >
              What&apos;s on your mind
            </h3>
            <p className="text-[4rem] font-semibold text-gray-950">
              Ask Questions
            </p>
          </div>
          <div className="relative w-[35rem] h-[35rem]">
            <Image
              src={union}
              alt="design"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <Accordian>
            <Items
              items={[
                {
                  heading: 'Do you offer freelancers?',
                  description:
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ipsa totam! Id ex, aliquam fugiat aut sequi voluptatibus suscipit accusamus esse nisi sapiente facere, assumenda, magnam beatae at magni.',
                },
                {
                  heading:
                    'What’s the guarantee that I will be satisfied with the hired talent?',
                  description:
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ipsa totam! Id ex, aliquam fugiat aut sequi voluptatibus suscipit accusamus esse nisi sapiente facere, assumenda, magnam beatae at magni.',
                },
                {
                  heading:
                    'Can I hire multiple talents at once?',
                  description:
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ipsa totam! Id ex, aliquam fugiat aut sequi voluptatibus suscipit accusamus esse nisi sapiente facere, assumenda, magnam beatae at magni.',
                },
                {
                  heading:
                    'Why should I not go to an agency directly?',
                  description:
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ipsa totam! Id ex, aliquam fugiat aut sequi voluptatibus suscipit accusamus esse nisi sapiente facere, assumenda, magnam beatae at magni.',
                },
                {
                  heading:
                    'Who can help me pick a right skillset and duration for me?',
                  description:
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis ipsa totam! Id ex, aliquam fugiat aut sequi voluptatibus suscipit accusamus esse nisi sapiente facere, assumenda, magnam beatae at magni.',
                },
              ]}
            />
          </Accordian>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
