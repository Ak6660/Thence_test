import Logo from '../common/Logo';
import Timer from '../common/Timer';
import CheckIcon from '/public/images/Tick + round.png';
import Image from 'next/image';
import { Covered_By_Your_Grace } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

const coveredByYourGraceFont = Covered_By_Your_Grace({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
}) as NextFont;

function ConfirmMailPage() {
  return (
    <div
      className={`w-[96vw] mx-auto h-40 text-black gap-8 flex flex-col items-center justify-between p-4  `}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
      </div>
      <div className="flex flex-col items-center ">
        <div className="relative w-24 h-24 mb-10">
          <Image
            src={CheckIcon}
            alt="check-design"
            fill
            className="object-cover"
          />
        </div>
        <p
          className={`${coveredByYourGraceFont.className} text-[3rem] text-green-500`}
        >
          Success Submitted
        </p>
        <p className="text-[5rem] font-semibold">
          Congratulations
        </p>
        <p className=" py-10 text-3xl w-[48rem] text-center mx-auto">
          Your request has been successfully submitted to
          us. We will validate your information and reach
          out to your shortly with updates
        </p>
      </div>
      <Timer />
    </div>
  );
}

export default ConfirmMailPage;
