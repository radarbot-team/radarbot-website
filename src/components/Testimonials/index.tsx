
import styles from './Testimonials.module.css';
import { TestimonialCard } from '../TestimonialCard';

export function Testimonials() {

  return (
    <div className={styles.container}>
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
          icon="language"
          title="Usar o RadarBot no meu servidor foi a escolha certa."
          description="Todas as ferramentas usadas para a simulação de voo estão disponíveis nele, além de features incríveis como os votos nas capturas de tela do simulador que ajuda a integrar mais a comunidade do servidor."
          name="Flávio Oliveira"
          position="Fundador Canal Perna do Vento"
          image="Sample.jpg"
        />
      </div>
    </div>
  );
}