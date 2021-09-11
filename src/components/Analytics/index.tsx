import styles from './Analytics.module.css';

export function Analytics() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <p>We have numbers and more numbers... All around the world. </p>
        </div>
        <span className={styles.title}>
          Numbers can prove that people love <span>RadarBot</span> ❤
        </span>
      </div>
    </div>
  )
}