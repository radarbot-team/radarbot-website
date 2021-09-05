import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import RadarLogo from '../../../public/icons/radarlogo.svg';
import styles from './Navbar.module.css';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';


export function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className={styles.container}>
      <RadarLogo />
      {
        modalIsOpen ? (
          <nav className={styles.mobilenavbar}>
            <ScrollLink activeClass={styles.mobilenavbaractive} 
            onClick={() => setModalIsOpen((prev) => !prev)} 
            to="main" 
            offset={-150} 
            spy={true} 
            smooth={true}>
              Home
            </ScrollLink>

            <ScrollLink 
            activeClass={styles.mobilenavbaractive}
            onClick={() => setModalIsOpen((prev) => !prev)}  
            offset={-150} 
            spy={true} 
            to="features" 
            smooth={true}>
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
        ) : (
      <nav className={styles.navbar}>
        <ScrollLink activeClass={styles.navbaractive} to="main" offset={-150} spy={true} smooth={true}>
          Home
        </ScrollLink>

        <ScrollLink activeClass={styles.navbaractive} offset={-150} spy={true} to="features" smooth={true}>
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
      )
      }

      <button onClick={() => alert("Soon...")} className={styles.loginbutton}>
        Login
      </button>
      {
        modalIsOpen ? (
          <IoClose
            className={styles.close}
            onClick={() => setModalIsOpen((prev) => !prev)}
            size="2rem"
          />
        ) : (
          <HiOutlineMenuAlt1
            className={styles.mobilebutton}
            onClick={() => setModalIsOpen((prev) => !prev)}
            size="2rem" />

        )
      }

    </div>
  )

}