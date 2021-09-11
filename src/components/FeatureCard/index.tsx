import styles from './FeatureCard.module.css'
import { IoLanguageOutline, IoImageOutline, IoCompassOutline } from 'react-icons/io5';
import Arrow from '../../../public/icons/arrow.svg';
import hexRgb from 'hex-rgb';
import { ArrowSvgComponent } from '../Arrow'
import { useEffect, useState } from 'react';

interface IColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export function FeatureCard(props: {
  color: string,
  icon: string,
  title: string,
  description: string,
  features: string[],
  footer: string
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
        <div>
          {getIcon()}
        </div>

        <div className={styles.title}>
          {props.title}
        </div>

        <div className={styles.description}>
          {props.description}
        </div>

        <div className={styles.features}>
          {props.features.map((feature, index) => (
            <div key={feature} className={styles.feature}>
              <ArrowSvgComponent className={styles.arrow} style={{ color: props.color }}/>{feature}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          {props.footer}
        </div>
      </div>
    </div>
  )
}