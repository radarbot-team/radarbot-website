import { useEffect, useRef, useState } from 'react';
import styles from './AnalyticsInfo.module.css'
import hexRgb from 'hex-rgb';
import { Fade } from 'react-awesome-reveal';
import { InView, useInView } from 'react-intersection-observer';

interface IColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export function AnalyticsInfo(props: {
  color: string,
  value: string,
  unit?: string,
  duration: string,
  description: string
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })
  const [rgbColor, setRgbColor] = useState<IColor>({ red: 0, green: 0, blue: 0, alpha: 0 });
  const [count, setCount] = useState("0")
  const [isVisible, setIsVisible ] = useState<boolean>(false)

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      // first three numbers from props
      const end = parseInt(props.value.substring(0, 3))
      // if zero, return
      if (start === end) return;

      // find duration per increment
      let totalMilSecDur = parseInt(props.duration);
      let incrementTime = (totalMilSecDur / end) * 1000;

      // timer increments start counter 
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + props.value.substring(3))
        if (start === end) clearInterval(timer)
      }, incrementTime);

      // dependency array
    }
  }, [props.value, props.duration, isVisible]);

  useEffect(() => {
    setRgbColor(hexRgb(props.color));
  }, [props.color])

  return (
    <Fade triggerOnce={true} duration={2000}>
      <InView
        triggerOnce={true} onChange={(entry) => {
          if (entry) {
            setIsVisible(true);
          }
        }}>
        <div ref={ref} className={styles.container} style={
          {
            background: `linear-gradient(to right, ${props.color}, rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, 0.1))`,
          }
        }>
          <div className={styles.innercontainer}>
            <div className={styles.title}>
              <h2><span style={{ color: props.color }}>+</span> {count} <span style={{ color: props.color }}>{props.unit}</span></h2>
            </div>
            <div className={styles.subtitle}>
              {props.description}
            </div>
          </div>
        </div>
      </InView>
    </Fade>
  )
}