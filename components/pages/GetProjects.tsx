import { coveredByYourGraceFont } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import closeIcon from '/public/images/Close.png';
import Form from '../common/Form';
import Logo from '../common/Logo';

function GetProjects() {
  return (
    <>
      <div
        className={`w-[96vw] mx-auto h-40 text-black gap-8 flex items-center justify-between p-4  `}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Logo />
          <div className="flex gap-8">
            <Link
              href="/"
              className="border-[.1rem] rounded-full p-4 hover:bg-gray-100 hover:shadow-md"
            >
              <Image src={closeIcon} alt="close-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-[60vh] text-3xl flex flex-col items-center justify-start mt-8">
        <h3
          className={`${coveredByYourGraceFont.className} text-green-500 text-[3rem]  `}
        >
          Registration Form
        </h3>
        <div className="flex flex-col items-center text-[4rem] mt-10 leading-[4rem] font-semibold justify-center">
          <p>Start your success</p>
          <p> Journey here!</p>
        </div>
        <Form />
      </div>
    </>
  );
}

export default GetProjects;
