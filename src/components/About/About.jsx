import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <img className={styles.logo} src={Logo} />
      <div className={styles.paragraph}>
        <p>
          At Fjord Fish Market, premium, responsibly-sourced seafood is our
          specialty. Fjord makes it a priority to know where all our seafood
          comes from so that what we sell meets our strict standards. We choose
          to only work with seafood industry partners that care as much as we do
          about the quality of fish on your table. We value transparency and
          make sure that each fish in our case is properly labeled with maps and
          other important details so our customers know exactly what they are
          buying and eating.
        </p>
      </div>
    </div>
  );
}
