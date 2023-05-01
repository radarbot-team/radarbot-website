import NextLink from 'next/link';
import { Link } from 'next-scroll';
import { ScrollLink } from 'react-scroll';
import RadarLogo from '../../../public/icons/radarlogo.svg';
import styles from './Navbar.module.css';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [currentSection, setCurrentSection] = useState('main');

  // useEffect(() => {
  //   // Update current section when scrolling
  //   window.addEventListener('scroll', () => {
  //     const currentSection = document.querySelector('.active');
  //     console.log(currentSection)
  //     if (currentSection) {
  //       // setCurrentSection(currentSection.id);
  //     }
  //   });
  // }, [])


  return (
    <div className={styles.container}>
      <Image src={RadarLogo} alt='radarbot-logo' />
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

            <ScrollLink
              to="analytics"
              activeClass={styles.mobilenavbaractive}
              onClick={() => setModalIsOpen((prev) => !prev)}
              offset={-50}
              spy={true}
              smooth={true}>
              Analytics
            </ScrollLink>

            <ScrollLink
              to="testimonials"
              spy={true}
              onClick={() => setModalIsOpen((prev) => !prev)}
              offset={-150}
              activeClass={styles.mobilenavbaractive}
              smooth={true} >
              Testimonials
            </ScrollLink>

            <ScrollLink
              to="support"
              spy={true}
              onClick={() => setModalIsOpen((prev) => !prev)}
              offset={-150}
              activeClass={styles.mobilenavbaractive}
              smooth={true}>
              Support
            </ScrollLink>


            <Link href="https://docs.radarbot.xyz" passHref={true}>
              <button>Docs</button>
            </Link>


          </nav>
        ) : (
          <nav className={styles.navbar}>
            <Link className={currentSection == "main" ? styles.navbaractive : ""} to="main" offset={-150} >
              Home
            </Link>

            <Link to="features">
              Features
            </Link>

            <Link to="analytics">
              Analytics
            </Link>

            <Link to="testimonials">
              Testimonials
            </Link>

            <Link to="support">
              Support
            </Link>


            <NextLink className={styles.docs__button} href="https://docs.radarbot.xyz" passHref={true}>
              Docs
            </NextLink>

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
