import FeaturesCard from "./FeaturesCard";


export default function Features() {
  return (

    <div className="mt-[8rem] flex flex-col justify-center">
      <div className="p-8 mt-8 ml-8 mb-6 flex flex-col justify-center lg:justify-between lg:flex-row">
        <div className="text-[3.125rem] max-w-[720px]  lg:max-w-3xl lg:max-h-full">
          <strong>The ecosystem behind RadarBot</strong>
        </div>
        <div className="max-w-[16rem] text-base mt-4 ml-20 lg:border-t-2 border-t-main-blue ">
          <p>Meet some of the many features available in the Bot.</p>
        </div>
      </div>
      <div className="flex flex-col p-24 md:p-1 md:flex-row justify-between">
        <FeaturesCard
          color="#33CC4A"
          icon="language"
          title="Multi-Language Support"
          description="Radar Bot is constantly updated and currently supports 3 languages"
          features={[
            "English",
            "Portuguese",
            "Spanish",
            "French"]}
          footer="Soon Italian will be added to the list!"
        />

        <FeaturesCard
          color="#DC52E5"
          icon="flightutilities"
          title="light Utilities"
          description="The best tools for virtual flights!"
          features={[
            "Metar & TAF",
            "Charts",
            "Flight Briefing",
            "Real Flights information"
          ]}
          footer="We constantly add new features, stay tunned!"
        />

        <FeaturesCard
          color="#F09242"
          icon="screenshots"
          title="Screenshot System"
          description="Members can post screenshots on channel and others can vote on it. Best screenshots go to top-screenshots channel"
          features={[
            "Vote on Screenshots",
            "Top screenshots channel",
            "Only text messages filter"
          ]}
          footer="We constantly add new features, stay tunned!"
        />
      </div>
    </div>
  )
}