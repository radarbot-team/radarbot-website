'use client'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const list = document.querySelector('ul');
    if (list) {
      if (menuOpen) {
        list.classList.remove('hidden')
        list.classList.add('top-[80px]', 'opacity-100');
        list.classList.remove('opacity-0');
      } else {
        list.classList.add('hidden')
        list.classList.remove('top-[80px]', 'opacity-100');
        list.classList.add('opacity-0');
      }
    }
  }, [menuOpen]);


  return (
    <div>
      <nav className="p-5 shadow md:flex  md:items-center md:justify-between">
        {/*  <div className=" flex items-center justify-between p-4 border-solid border-b-[1px] border-[#10afba]"> */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer ">
            <Image
              className="h-10 inline"
              src="/images/icons/radarlogo.svg"
              width={47}
              height={47}
              alt="radar logo" />
          </span>
          <span className="text-3xl text-main-blue cursor-pointer mx-2 md:hidden block">
            <AiOutlineMenu name="menu" onClick={Menu} />
          </span>
        </div>

        <ul className="flex flex-col items-center md:flex md:flex-row md:items-center md:justify-between z-[-1] md:z-auto md:static absolute'
        left-0 md:w-auto py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500">

          <li className="mx-4 my-6 md:my-0 ">
            <Link href="" className="text-main-font-color text-xl hover:text-main-blue-hover duration-500">home</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href="" className="text-main-font-color hover:text-main-blue-hover duration-500 ">Features</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href="" className="text-main-font-color text-xl hover:text-main-blue-hover duration-500">Analytics</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href="" className="text-main-font-color text-xl hover:text-main-blue-hover duration-500">Testimonials</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href="" className="text-main-font-color text-xl hover:text-main-blue-hover duration-500">Support</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href="" className="text-main-font-color text-xl hover:text-main-blue-hover duration-500">Docs</Link>
          </li>
          <Link href="" className="  bg-main-blue hover:bg-main-blue-hover duration-500 px-6 py-2 mx-4 rounded-xl text-xl  text-white shadow ">Login</Link>

        </ul>
      </nav>
    </div>
  );
}
