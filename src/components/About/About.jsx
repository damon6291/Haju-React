import React from 'react';
import Logo from '../../assets/logo.jpeg';
import styles from './About.module.scss';
export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <img className={styles.logo} src={Logo} />
      <div className={styles.paragraph}>
        <p>
          At HajuKitchen, we sell premiun, responsibly-sourced, authenthic korean food. We have been
          making Korean food for 40+ years and with this knowledge, we chose to only work with best
          korean dishes. We value the taste of each dishes and value how customer thinks about out
          dishes. We are proud of our dishes and we hpe you feel the same.
        </p>
      </div>
    </div>
  );
}
