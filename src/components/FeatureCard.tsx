import styles from '../styles/components/FeatureCard.module.css'
import { IoLanguageOutline, IoImageOutline, IoCompassOutline } from 'react-icons/io5';
import Arrow from '../../public/icons/arrow.svg';


export function FeatureCard(props: {
  color: string,
  icon: string,
  title: string,
  description: string,
  features: string[],
  footer: string
}) {

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
    <div className={styles.container} style={{ border: `2px solid ${props.color}` }}>
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
          <div key={index} className={styles.feature}>
            <Arrow className={styles.arrow} />{feature}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        {props.footer}
      </div>
    </div>
  )
}