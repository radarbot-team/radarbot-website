import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'
import RadarLogo from '../../public/icons/radarlogo.svg'
import { Features } from './Features'

export function Navbar() {
  return (
    <div className={styles.container}>
      <RadarLogo />
      <nav className={styles.navbar}>
        <ScrollLink activeClass={styles.navbaractive} offset={100} to="main" spy={true} smooth={true}>
          Home
        </ScrollLink>

        <ScrollLink activeClass={styles.navbaractive} offset={-200} spy={true} to="features" smooth={true}>
          Features
        </ScrollLink>

        <ScrollLink to="analytics">
          Analytics
        </ScrollLink>

        <Link href="https://docs.radarbot.xyz" passHref={true}>
          <button>Docs</button>
        </Link>

        <ScrollLink to="home">
          Testimonials
        </ScrollLink>

        <ScrollLink to="home">
          Contact
        </ScrollLink>
      </nav>
      <button disabled={true} className={styles.loginbutton}>
        Login
      </button>
    </div>
  )

}