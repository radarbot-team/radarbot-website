import { signIn, useSession } from 'next-auth/client';
import Image from 'next/image';
import { useState } from 'react';
import RadarLogo from '../../../public/icons/radarlogo.svg';
import styles from './NavbarDashboard.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
export function NavbarDasboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [session, loading] = useSession();

  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <Link href='/' passHref>
        <RadarLogo className={styles.logo} />
      </Link>
      {
        (isAuthenticated && user?.avatar) ? (

          <Image className={styles.avatar} src={user?.avatar ? user.avatar : RadarLogo} alt='avatar' width={55} height={55} />
        ) : (
          <button onClick={() => signIn('discord')} className={styles.loginbutton}>
            Login
          </button>
        )
      }
    </div>
  )

}