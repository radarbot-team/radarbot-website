"use client"
import { Fade, Bounce } from 'react-awesome-reveal';
import { BackgroundSupport } from '../Icons/background-support';
import { LogoRadarBot } from '../Icons/logo-radarbot';

export default function Support() {
  return (
    <Fade duration={3000} triggerOnce={true} className="max-h-[100vh] max-w-[100vw]  flex flex-col items-center justify-center relative z-1 h-[28rem] mt-16 p-2" >
      <div className="max-w-7xl h-full flex-col flex pt-12 pl-0 pr-0 pb-4 justify-between items-center box-border">
        <BackgroundSupport className="mt-8 absolute box-border -z-1"/>
        <LogoRadarBot />

        <h2 className='text-2xl font-semibold'>Questions or need help?</h2>
        <button className="bg-main-blue hover:bg-main-blue-hover flex items-center justify-center text-lg font-bold w-72 h-16 border-none rounded-[10px] cursor-pointer transition duration-300 ease-in-out ">
          <a href="https://discord.gg/DEtGv4wUNX" target="_blank" rel="noreferrer">Join Support Server</a>
        </button>
      </div>
    </Fade>
  )
}