import Link from 'next/link';
import { LogoRadarBot } from '../Icons/LogoRadarBot';
import styles from './Footer.module.css';
import { BiArrowToTop } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Link href="/">
              <LogoRadarBot />
            </Link>
          </div>


          <div className={styles.copy}>
            <h3>RadarBot</h3>
            <p>
              A multi language advanced Discord bot for flight simmers.
            </p>
            copyright &copy; {new Date().getFullYear()} RadarBot

            <a
                className={styles.sponsor}
                href="https://vercel.com/?utm_source=radarbot-team&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
            >
                Powered by
                <span className="mx-2">
                    <Image src="/icons/vercel.svg" alt="Vercel" width={60} height={20} />
                </span>
            </a>

          </div>
        </div>

        <div className={styles.itens}>
          <Link href="/terms-privacy">
            Terms of use and privacy policy
          </Link>

          <Link href="https://docs.radarbot.xyz" target="_blank" rel="noreferrer">
            Docs
          </Link>

          <Link href="https://discord.gg/DEtGv4wUNX" target="_blank" rel="noreferrer">
            Support Server
          </Link>

          <Link href="https://patreon.com/andrebrito16" target="_blank" rel="noreferrer">
            Donate
          </Link>
        </div>

        <div className={styles.rightSide}>
          <ScrollLink className={styles.scrollToTop} spy={true} smooth={true} to="main">
            <BiArrowToTop className={styles.arrowTop} />
            <span>
              Scroll To Top
            </span>
          </ScrollLink>
          <div className={styles.credits}>
            <span>
              UI By: Carolina Eguchi and Ruy Monteiro
            </span>
          </div>
        </div>

      </div>

      <span className={styles.createdBy}>
        created with <FontAwesomeIcon pulse={true} icon={faHeart} /> by <Link href="https://andrebrito.vercel.app" target="_blank" rel="noreferrer">andrebrito16</Link>
      </span>
    </div>
  )
}