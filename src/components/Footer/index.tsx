import Link from 'next/link';
import { LogoRadarBot } from '../Icons/LogoRadarBot';
import styles from './Footer.module.css';
import { BiArrowToTop } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <LogoRadarBot />
          </div>


          <div className={styles.copy}>
            <h3>RadarBot</h3>
            <p>
              A multi language advanced Discord bot for flight simmers.
            </p>
            copyright &copy; 2020

          </div>
        </div>

        <div className={styles.itens}>
          <Link passHref={true} href="https://bit.ly/RadarBotInvite">
            <a target="_blank">
              Invite RadarBot
            </a>
          </Link>

          <Link passHref={false} href="/terms-privacy">
            <a>
              Terms of use and privacy policy
            </a>
          </Link>

          <Link passHref={true} href="https://docs.radarbot.xyz">
            <a target="_blank">
              Docs
            </a>
          </Link>

          <Link passHref={true} href="https://discord.gg/DEtGv4wUNX">
            <a target="_blank">
              Support Server
            </a>
          </Link>

          <Link passHref={true} href="https://patreon.com/andrebrito16">
            <a target="_blank">
              Donate
            </a>
          </Link>
        </div>


        <ScrollLink className={styles.scrollToTop} spy={true} smooth={true} to="main">
          <BiArrowToTop className={styles.arrowTop} />
          <span>
            Scroll To Top
          </span>
        </ScrollLink>

      </div>

      <span>
      created with <FontAwesomeIcon pulse={true} icon={faHeart} /> by andrebrito16
      </span>
    </div>
  )
}