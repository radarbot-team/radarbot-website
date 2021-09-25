
import styles from './Testimonials.module.css';
import { TestimonialCard } from '../TestimonialCard';
import PernaDoVentoLogo from '../../../public/images/pernaDoVentoLogo.png';
import AtcSimulationLogo from '../../../public/images/atcSimulationLogo.jpg';

export function Testimonials() {

  return (
    <div id="testimonials" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>
            🌏 Loved by people across the globe
          </p>
        </div>
        <div className={styles.description}>
          <p>
            Our RadarBot passion extended to other people around the world.
          </p>
        </div>
      </div>
      <div className={styles.testimonials}>
        <TestimonialCard
          color="#E08537"
          title="Using **RadarBot** on my server was the right choice."
          description="All the tools used for the flight simulation are available in it, as well as some other amazing features like polls for best simulator screenshots that help to integrate more with the server community."
          name="Flávio Oliveira"
          position="Perna do Vento channel Founder"
          image={PernaDoVentoLogo}
          link="https://youtube.com/pernadovento"
        />
        <TestimonialCard 
          color="#00D1DE"
          title="RadarBot is the best tool you can have on your server"
          description="What I like most about RadarBot is the support that the developers give. It's a BOT made by Brazilians who follow the daily life of the community! So they can see the demands of users. Developing and improving every day this amazing BOT! RadarBot is the best tool you can have on your server! I recommend!"
          name="Juvenal Gomes"
          position="ATC Simulation Founder"
          image={AtcSimulationLogo}
          link="https://www.youtube.com/channel/UC6jMeH0QevoSe2VcJAB-H5g"
        />
      </div>
    </div>
  );
}