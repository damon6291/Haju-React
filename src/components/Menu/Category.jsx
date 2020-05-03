import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styles from "./Menu.module.scss";

function Category() {
  return (
    <div>
      <ul className={styles.Category}>
        <li>
          <Link className={styles.link} to="">
            Entrees
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Soondubu
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Fried Chicken
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Shared Plate
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Sides
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
