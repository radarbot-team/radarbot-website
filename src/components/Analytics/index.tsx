import styles from './Analytics.module.css';
import { AnalyticsInfo } from '../AnalyticsInfo';


export function Analytics() {
  return (
    <div id="analytics" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <p>We have numbers and more numbers... All around the world. </p>
        </div>
        <span className={styles.title}>
          Numbers can prove that people loves <span>RadarBot</span> ❤
        </span>
      </div>
      <div className={styles.analytics}>

        <AnalyticsInfo
          color="#00d1de"
          description="Users using RadarBot"
          unit="K"
          value="50"
          duration="5"
        />

        <AnalyticsInfo
          color="#DC52E5"
          description="Runned Commands"
          unit="K"
          value="100"
          duration="2"
        />


        <AnalyticsInfo
          color="#33CC4C"
          description="Countries used"
          value="16"
          duration="3"
        />

        <AnalyticsInfo
          color="#F09241"
          description="Servers"
          value="150"
          duration="5"
        />
      </div>
    </div>
  )
}