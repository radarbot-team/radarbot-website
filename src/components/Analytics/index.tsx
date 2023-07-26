import { AnalyticsInfo } from "./AnalyticsInfo";

export default function Analytics() {
  return (
    <div id="analytics" className="flex flex-col lg:p-20">
      <div className="p-2 flex flex-col xl:flex-row-reverse xl:justify-between  items-center justify-start">
        <h2 className="max-w-2xl font-bold max-h-screen text-4xl font text-main-font-color">Numbers can prove that people loves <span className="text-main-blue">RadarBot</span>❤</h2>
        <p className="mt-2 max-w-md lg:max-w-[16rem] lg:border-t-2 lg:border-main-blue w-">We have numbers and more numbers... All around the world.</p>
      </div>
      <div className="flex m-auto flex-col items-center lg:flex-row">
        <AnalyticsInfo
        
          colorFrom="from-[#00d1de]"
          color="#00d1de"
          description="Users using RadarBot"
          unit="K"
          value="55"
          duration="5"

        />
        <AnalyticsInfo
          colorFrom="from-[#DC52E5]"
        
          color="#DC52E5"
          description="Runned Commands"
          unit="K"
          value="202"
          duration="3"
        />
        <AnalyticsInfo
          colorFrom="from-[#33CC4C]"
        
          color="#33CC4C"
          description="Countries used"
          value="17"
          duration="3"
        />

        <AnalyticsInfo
          colorFrom="from-[#F09241]"
          
          color="#F09241"
          description="Servers"
          value="200"
          duration="5"
        />
      </div>
    </div>
  )

}
