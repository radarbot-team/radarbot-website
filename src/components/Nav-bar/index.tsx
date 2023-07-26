'use client'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  function generateButtonClassName(path: string): string {
    const inactiveSectionButton = "text-main-grey text-xl hover:text-main-blue-hover duration-500"
    const activeSectionButton = "text-white text-xl hover:text-main-blue-hover border-b-[2px] border-main-blue box-border duration-500"
    return pathName.includes(path) ? activeSectionButton : inactiveSectionButton;
  }

  useEffect(() => {
    router.replace(pathName, {
      scroll: false,
    });
  }, [pathName, router]);

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
    <div className="fixed w-full z-20  bg-main-bg">
      <nav className="p-1 shadow md:flex md:items-center md:justify-between border-b border-blue-dark">
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
        left-0 md:w-auto py-2 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500">

          <li className="mx-4 my-6 md:my-0 h-full">
            <Link href={"/home#home"} className={generateButtonClassName('home')}>Home</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link scroll href="/features#features" className={generateButtonClassName('features')}>Features</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link scroll href="/analytics#analytics" className={generateButtonClassName('analytics')}>Analytics</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link scroll href="/testimonials#testimonials" className={generateButtonClassName('testimonials')}>Testimonials</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link scroll href="/support#support" className={generateButtonClassName('support')}>Support</Link>
          </li>
          <li className="mx-4 my-6 md:my-2 ">
            <Link href={"https://docs.radarbot.xyz"} target="__blank" className="text-main-grey text-xl hover:text-main-blue-hover duration-500">Docs</Link>
          </li>
          <Link href="" className="md:hidden block bg-main-blue hover:bg-main-blue-hover duration-500 px-6 py-2 mx-4 rounded-xl text-xl  text-white shadow ">Login</Link>
        </ul>
        <Link href="" className="hidden md:block bg-main-blue hover:bg-main-blue-hover duration-500 px-6 py-2 mx-4 rounded-xl text-xl  text-white shadow ">Login</Link>
      </nav>
    </div>
  );
}
