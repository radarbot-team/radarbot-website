import { RiArrowDownCircleLine } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll';
import Airplane from '../../../public/icons/airplane.svg';
import ArrowDown from '../../../public/icons/arrowDown.svg';
import styles from './MainPage.module.css';
import Link from 'next/link';
import { TransitionsModal } from '../TransitionsModal';
import { useState } from 'react';

export function MainPage() {
  const [open, setOpen] = useState(false);
  return (
    <div id="main" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.maincontent}>
          <p>👋 Hey, Welcome </p>
          <div className={styles.maintitle}>
            The <strong>Next Generation</strong> of Utilities for Flight Simmers
          </div>

          <p>
            A multi language advanced Discord bot Made by{' '}
            <strong>Flight Simmers</strong> for <strong>Flight Simmers</strong>
          </p>
          <div className={styles.invitecontainer}>
            <button className={styles.invitebutton} onClick={() => setOpen(true)}>
              <RiArrowDownCircleLine size="25" color="#FFF" />
              <p>
                <a>
                  Add to your Discord Server
                </a>
              </p>
            </button>
            <span className={styles.disclaimer}>
              Adding this you agree with our <Link href="/terms-privacy"><a>Terms and Privacy Policy</a></Link>
            </span>
          </div>
        </div>
        <div className={styles.airplane}>
          <Airplane />
        </div>
      </div>

      <ScrollLink spy={true} offset={-150} to="features" smooth={true}>
        <button className={styles.arrowdown}>
          <ArrowDown />
        </button>
      </ScrollLink>

      <TransitionsModal
        title="Adding RadarBot to you server you agree with [TermsAndConditions](/terms-privacy)"
        cancelTextButton="Cancel"
        okTextButton="Add"
        open={open}
        handleClose={() => setOpen((prev) => !prev)}
        handleOkButton={() => {
          window.open('https://bit.ly/RadarBotInvite', "_blank")
          setOpen(false);
        }}
      />
    </div>
  );
}
