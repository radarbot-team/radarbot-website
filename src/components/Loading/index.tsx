import styles from './Loading.module.css';
import { LogoRadarBot } from '../Icons/LogoRadarBot';
import { LoadingBackground } from '../Icons/LoadingBackground';

export function Loading() {
  return (
    <div className={styles.container}>
      <LoadingBackground className={styles.background} />
      <div className={styles.itens}>
        <LogoRadarBot className={styles.logo} />
        <span>
          SELF TEST IN PROGRESS
        </span>
        <p>(MAX 40 SECONDS)</p>

      </div>
    </div>
  )
}