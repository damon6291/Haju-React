import React from "react";

import Logo from "../../assets/haju-logo.png";

import styles from "./Bottom.module.scss";

const Bottom = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo}></img>
      <span className={styles.text}>Site Design & Development</span>
      <span className={styles.text}>Damon Joung & Junho Park</span>
    </div>
  );
};

export default Bottom;
