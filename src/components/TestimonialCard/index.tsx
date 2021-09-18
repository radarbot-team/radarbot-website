import hexRgb from 'hex-rgb';
import Image from 'next/dist/client/image';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PernaDoVentoLogo from '../../../public/images/pernaDoVentoLogo.png';
import { Quotes } from '../Icons/Quotes';
import styles from './TestimonialCard.module.css';
import Link from 'next/link';
interface IColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export function TestimonialCard(props: {
  color: string,
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
          <Quotes style={{ color: "#E08537" }} />
        </div>

        <div className={styles.title}>
          <ReactMarkdown>
            {props.title}
          </ReactMarkdown>
        </div>

        <div className={styles.description}>
          {props.description}
        </div>

        <footer>
          <div className={styles.footer}>
            <Link href="https://youtube.com/pernadovento" passHref={true}>
              <Image className={styles.footerImage} width="48px" height="47px" src={PernaDoVentoLogo} alt="pernadoventologo" />
            </Link>
            <div className={styles.footerText}>

              <div className={styles.name} style={{
                color: "#E08537"
              }}>
                <span>Flávio Oliveira</span>
              </div>
              <div className={styles.footerDescription}>
                Fundador Canal Perna do Vento
              </div>

            </div>
          </div>
        </footer>


      </div>
    </div>
  )
}