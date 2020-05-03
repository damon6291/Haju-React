import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = ({ text1, text2, buttonName }) => {
  const link = () => {
    if (buttonName === "Menus") return "/Menu";
    if (buttonName === "Contact") return "/Contact";
  };

  return (
    <div className={styles.container}>
      <span className={styles.texta}>{text1}</span>
      <span className={styles.textb}>{text2}</span>
      <Link to={link()}>
        <button className={styles.button}>{buttonName}</button>
      </Link>
    </div>
  );
};

export default Nav;
