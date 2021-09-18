
import styles from './Support.module.css';
import { LogoRadarBot } from '../Icons/LogoRadarBot';
import { BackgroundSupport } from '../Icons/BackgroundSupport';
import { Fade, Bounce } from 'react-awesome-reveal';

export function Support() {
  return (
    <Fade duration={3000} triggerOnce={true} className={styles.container}>
      <div id="support" className={styles.items}>
        <BackgroundSupport className={styles.background} />
        <LogoRadarBot />
        <h2>Questions or need help?</h2>
        <button className={styles.invitebutton}>
          <a href="https://discord.gg/DEtGv4wUNX" target="_blank" rel="noreferrer">Join Support Server</a>
        </button>

      </div>
      {/* </div> */}
    </Fade>
  )
}