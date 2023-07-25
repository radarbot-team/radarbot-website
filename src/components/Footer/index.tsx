
import { LogoRadarBot } from "../Icons/logo-radarbot";
import Image from "next/image";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll'
import Link from "next/link";
import { BiArrowToTop } from 'react-icons/bi';

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center md:py-12 md:px-40 mt-20  ">
      <div className="w-full flex ml-8 flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row ">
            <Link passHref={true} target="_blank" href="/">
              <LogoRadarBot className="hidden lg:block" />
            </Link>

          </div>
          <div className="relative ml-4 flex flex-col text-sm max-w-[12rem]">
            <h3 className="font-bold text-main-blue text-xl mb-6">RadarBot</h3>
            <p className="mb-4 text-lg">
              A multi language advanced Discord bot for flight simmers.
            </p>
            <p  className="text-lg">
              copyright &copy; {new Date().getFullYear()} RadarBot
            </p>

            <a
              className="flex flex-row items-center t-4 text-lg text-main-font-color  no-underline"
              href="https://vercel.com/?utm_source=radarbot-team&utm_campaign=oss"
              target="_blank"
              rel="noreferrer"
            >
              Powered by
              <span className="mx-2 m5-4  text-xl">
                <Image src="/images/icons/vercel.svg" alt="Vercel" width={60} height={20} />
              </span>
            </a>

          </div>
        </div>
        {/* 2/3 */}
        <div className="flex flex-col justify-between mb-4 text-lg ">
          <Link passHref={true}  className="hover:text-main-blue-hover" href="https://bit.ly/RadarBotInvite">

            Invite RadarBot

          </Link>


          <Link passHref={false} href="/" className="hover:text-main-blue-hover">
            Terms of use and privacy policy
          </Link>

          <Link passHref={true} href="https://docs.radarbot.xyz" className="hover:text-main-blue-hover">

            Docs

          </Link>

          <Link passHref={true} href="https://discord.gg/DEtGv4wUNX" className="hover:text-main-blue-hover">

            Support Server

          </Link>

          <Link passHref={true} href="https://patreon.com/andrebrito16" className="hover:text-main-blue-hover">

            Donate

          </Link>
        </div>
        <div>
        <div className="flex flex-col  text-main-blue hover:main-blue-hover" >
            <BiArrowToTop className="w-20 h-20"/>
            <span>
              Scroll To Top
            </span>
          </div>
          <div className="font-extralight mt-4 max-w-[10rem]">
            <span className="text-base font-normal font-serif roboto">
              UI By: Carolina Eguchi and Ruy Monteiro
            </span>
          </div>
        </div>
      </div>
      <span className="flex flex-row justify-between text-xl font-extrabold  ">
      created with 
        {/* <FontAwesomeIcon pulse={true} icon={faHeart} /> */} by 
        <Link target="_blank" className="text-main-blue ml-1 hover:text-main-blue-hover "href="https://andrebrito.vercel.app ">  andrebrito16</Link>
      </span>
    </div>
  )
}