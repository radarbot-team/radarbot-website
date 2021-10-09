import hexRgb from 'hex-rgb';
import { useEffect, useState } from 'react';
import { IoCompassOutline, IoImageOutline, IoLanguageOutline } from 'react-icons/io5';
import { ArrowSvgComponent } from '../Icons/Arrow';
import styles from './ServerCard.module.css';
import Image from 'next/image';
import Router from 'next/router';

interface IColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export function ServerCard(props: {
  color: string;
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  canEdit: boolean;
}) {
  const [rgbColor, setRgbColor] = useState<IColor>({ red: 0, green: 0, blue: 0, alpha: 0 });
  const [arrowColor, setArrowColor] = useState<string>('#FFF');

  useEffect(() => {
    setRgbColor(hexRgb(props.color));
    setArrowColor(props.color);


  }, [props.color])
  function getIcon() {
    switch (props.icon) {
      case 'language':
        return <IoLanguageOutline className={styles.icon} style={{ backgroundColor: props.color }} />
      case 'screenshots':
        return <IoImageOutline className={styles.icon} style={{ backgroundColor: props.color }} />
      case 'flightutilities':
        return <IoCompassOutline className={styles.icon} style={{ backgroundColor: props.color }} />
    }
  }

  return (
    <div className={styles.container} style={
      {
        background: `linear-gradient(to bottom, ${props.color}, rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, 0.1))`,
      }}>
      <div className={styles.innercontainer}>
        <div className={styles.icon}>

          <Image
            className={styles.icon}
            width={80} height={80}
            src={`https://cdn.discordapp.com/icons/${props.id}/${props.icon}.jpg`}
            alt='icon'
          ></Image>
        </div>
        <div className={styles.title}>
          {props.name}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => Router.push(`/screenshots/${props.id}`)} className={styles.screenshotsbutton}>
            Screenshots Center
          </button>
          {
            props.canEdit && (
              <button className={styles.dashboardbutton}>
                Dashboard
              </button>
            )
          }
        </div>

      </div>
    </div>
  )
}