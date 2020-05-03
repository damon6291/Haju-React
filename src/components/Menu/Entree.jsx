import React from "react";
import styles from "./Menu.module.scss";

const Entree = () => {
  return (
    <div>
      <ul className={styles.menus}>
        <li>Food1</li>
        <li>Food2</li>
        <li>Food3</li>
        <li>Food4</li>
        <li>Food5</li>
        <li>Food6</li>
      </ul>
    </div>
  );
};

export default Entree;
