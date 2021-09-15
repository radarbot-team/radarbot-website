import hexRgb from 'hex-rgb';
import { useEffect, useState } from 'react';
import { IoCompassOutline, IoImageOutline, IoLanguageOutline } from 'react-icons/io5';
import { ArrowSvgComponent } from '../Icons/Arrow';
import { Quotes } from '../Icons/Quotes';
import styles from './TestimonialCard.module.css';

interface IColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export function TestimonialCard(props: {
  color: string,
  icon: string,
  title: string,
  description: string,
  image?: string,
  name: string,
  position: string,
}) {
  const [rgbColor, setRgbColor] = useState<IColor>({ red: 0, green: 0, blue: 0, alpha: 0 });
  const [arrowColor, setArrowColor] = useState<string>('#FFF');

  useEffect(() => {
    setRgbColor(hexRgb(props.color));
    setArrowColor(props.color);


  }, [props.color])

  return (
    <div className={styles.container} style={
      {
        background: `linear-gradient(to bottom, ${props.color}, rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, 0.1))`,
      }}>
      <div className={styles.innercontainer}>
        <div>
          <Quotes style={{ color: "#E08537"}} />
        </div>

        <div className={styles.title}>
          {props.title}
        </div>

        <div className={styles.description}>
          {props.description}
        </div>


      </div>
    </div>
  )
}