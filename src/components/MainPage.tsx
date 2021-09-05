import styles from '../styles/components/MainPage.module.css';
import { RiArrowDownCircleLine } from 'react-icons/ri';
import Airplane from '../../public/icons/airplane.svg'
import ArrowDown from '../../public/icons/arrowDown.svg'
import { Link as ScrollLink } from 'react-scroll';

export function MainPage() {
  return (
    <div id="main" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.maincontent}>
          <p>👋 Hey, Welcome </p>
          <div className={styles.maintitle}>

            The <strong>Next Generation</strong>  of Utilities for Flight Simmers
          </div>

          <p>A multi language advanced Discord bot
            Made by <strong>Flight Simmers</strong> for <strong>Flight Simmers</strong>
          </p>

          <button className={styles.invitebutton}>
            <RiArrowDownCircleLine size="25" color="#FFF" />
            <p>
              <a href="https://bit.ly/RadarBotInvite">
                Add to your Discord Server
              </a>
            </p>
          </button>

        </div>
        <div className={styles.airplane}>
          <Airplane />
        </div>
      </div>

      <ScrollLink spy={true} to="features" smooth={true}>
        <button className={styles.arrowdown}>
          <ArrowDown />
        </button>
      </ScrollLink>
    </div>
  )
}