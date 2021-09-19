
import styles from './Testimonials.module.css';
import { TestimonialCard } from '../TestimonialCard';

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
          image="Sample.jpg"
        />
      </div>
    </div>
  );
}