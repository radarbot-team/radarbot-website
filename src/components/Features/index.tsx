import styles from './Features.module.css'
import { FeatureCard } from '../FeatureCard'

export function Features() {
  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <strong>The ecosystem behind RadarBot</strong>
        </div>
        <div className={styles.description}>
          <p>
            Meet some of the many
            features available in the Bot.
          </p>
        </div>
      </div>
      <div className={styles.features}>
        <FeatureCard
          color="#33CC4A"
          icon="language"
          title="Multi-Language Support"
          description="Radar Bot is constantly updated and currently supports 3 languages"
          features={[
            "English",
            "Portuguese",
            "Spanish"
          ]}
          footer="Soon French will be added to the list!"
        />

        <FeatureCard
          color="#DC52E5"
          icon="flightutilities"
          title="Flight Utilities"
          description="Radar Bot is constantly updated and currently supports 3 languages"
          features={[
            "Matear & TAF",
            "Charts",
            "Flight Briefing"
          ]}
          footer="We constantly add new features, stay tunned!"
        />

        <FeatureCard
          color="#F09242"
          icon="screenshots"
          title="Screenshot System"
          description="Radar Bot is constantly updated and currently supports 3 languages"
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