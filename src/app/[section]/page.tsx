import Analytics from '@/components/Analytics';
import { ReactDOM } from 'react';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Support from '@/components/Suppot';
import Testimonials from '@/components/Testimonials';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDownCircle } from 'react-icons/bs';

interface Props {
  params: {
    section: string;
  }
}

export default function Home({ params }: Props) {
  return (
    <div className="p-0">
      <div className="flex justify-between h-screen max-w-screen">
        <div className="w-full">
          <div className="flex justify-center text-lg mb-8 lg:justify-start lg:pl-20 pt-20 mt-0 lg:mb-0 ">  👋 Hey, Welcome</div>

          <div className="text-7xl pl-7 mr-40 mb-28 lg:pl-20 lg:mb-1 lg:text-7xl font-semibold">
            The <span className="text-main-blue">Next Generation</span> of Utilities for Flight Simmers
          </div>

          <div className="mt-8 pl-7 font-bold lg:pl-20 ">
            A multi language advanced Discord bot Made by <span className="text-main-blue" >Flight Simmers</span> for  <span className="text-main-blue">Flight Simmers</span>
          </div>

          <div className="flex items-center p-12 lg:p-20">
            <Link href=""
              className=" flex flex-row bg-main-blue w-72 h-14 hover:bg-main-blue-hover 
              items-center justify-center text-base mt-8 mb-2 lg:mt-[-60px] 
               rounded-[10px] font-bold text-white shadow ease-in-out duration-500">
              <span >
                <BsArrowDownCircle size={25} className="pr-2" />
              </span> Add to your Discord Server</Link>
          </div>

        </div>

          <Image
            className="translate-y-[-10rem] h-full hidden 2xl:block"
            alt="foto_do_avião_em_branco"
            src="/images/icons/airplane.svg"
            width={700}
            height={900}></Image>

      </div>
       <Features /> 
       <Analytics/>
       <Testimonials/>
       <Support/>

      <Footer/>

    </div>
  )
}
