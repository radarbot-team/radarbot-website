import { useState } from 'react';
import RadarLogo from '../../../public/icons/radarlogo.svg';
import styles from './Navbar.module.css';
import Link from 'next/link';


export function ShorterNavbar() {


  return (
    <div className={styles.container}>
      <Link href="/" passHref={true}>
        <RadarLogo />
      </Link>

      <button onClick={() => alert("Soon...")} className={styles.loginbutton}>
        Login
      </button>
    </div>
  )

}