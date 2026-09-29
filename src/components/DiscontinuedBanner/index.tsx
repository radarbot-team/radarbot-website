import styles from './DiscontinuedBanner.module.css';

export function DiscontinuedBanner() {
  return (
    <div role="status" className={styles.banner}>
      RadarBot is a discontinued project. This website is kept only as an archive. Thanks for having used RadarBot!
    </div>
  );
}
