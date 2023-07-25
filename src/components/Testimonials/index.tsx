import { TestimonialsCard } from "./TestimonialCard";
import PernaDoVentoLogo from '../../../public/images/pernaDoVentoLogo.png';
import AtcSimulationLogo from '../../../public/images/atcSimulationLogo.jpg';
export default function Testimonials() {
  return (
    <div className="p-2 lg:p-20 mt-28 flex flex-col  ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-5xl max-w-2xl font-bold mb-4 p-2" >
          <p>🌏 Loved by people across the globe</p>
        </div>
        <div className="lg:border-t-2 p-2 border-main-blue max-w-[15.8125rem]">
          <p>Our RadarBot passion extended to other people around the world.</p>
        </div>
      </div>
      <div className="flex flex-col h-full p-8 items-center justify-center md:flex-row">
        <TestimonialsCard
          colorQuotes="text-main-blue"
          color="bg-main-blue"
          color2="from-main-blue"
          title="Using **RadarBot** on my server was the right choice."
          description="All the tools used for the flight simulation are available in it, as well as some other amazing features like polls for best simulator screenshots that help to integrate more with the server community."
          name="Flávio Oliveira"
          position="Perna do Vento channel Founder"
          image={PernaDoVentoLogo}
          link="https://youtube.com/pernadovento"
        />
        <TestimonialsCard
          colorQuotes="text-main-teste1"
          color2="from-main-teste1"
          color="bg-main-teste1"
          title="RadarBot is the best tool you can have on your server"
          description="What I like most about RadarBot is the support that the developers give. It's a BOT made by Brazilians who follow the daily life of the community! So they can see the demands of users. Developing and improving every day this amazing BOT! RadarBot is the best tool you can have on your server! I recommend!"
          name="Juvenal Gomes"
          position="ATC Simulation Founder"
          image={AtcSimulationLogo}
          link="https://www.youtube.com/channel/UC6jMeH0QevoSe2VcJAB-H5g"
        />

      </div>
    </div>
  )
}