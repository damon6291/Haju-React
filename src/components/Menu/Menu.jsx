import React from "react";
import Category from "./Category";
import styles from "./Menu.module.scss";
import Entree from "./Entree";
import Price from "./Price";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1>Menu</h1>
      <h3>Category</h3>
      <div className={styles.menuSearch}>
        <Category />
        <Entree />
        <Price />
      </div>
    </div>
  );
};

export default Menu;
