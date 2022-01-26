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
            <Link passHref={true} href="/">
              <LogoRadarBot />
            </Link>
          </div>


          <div className={styles.copy}>
            <h3>RadarBot</h3>
            <p>
              A multi language advanced Discord bot for flight simmers.
            </p>
            copyright &copy; 2020

            <a
                className="flex justify-center"
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
        created with <FontAwesomeIcon pulse={true} icon={faHeart} /> by <Link href="https://andrebrito.vercel.app"><a target="_blank">andrebrito16</a></Link>
      </span>
    </div>
  )
}