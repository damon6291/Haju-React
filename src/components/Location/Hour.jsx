import React from "react";

import styles from "./Hour.module.scss";

const Hour = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Address</span>
      <a
        className={styles.number}
        href="https://www.google.com/maps/place/175+Massachusetts+Ave,+Boston,+MA+02115/@42.345841,-71.0895826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a1af116dcb1:0x6dc390ceb979b690!8m2!3d42.3458371!4d-71.0873939">
        175 Massachusetts Ave, Boston, MA 02115
      </a>
      <span className={styles.title}>Number</span>
      <a className={styles.number} href="tel:617-982-7118">
        (617) 982-7118
      </a>
      <span className={styles.title}>Hours</span>
      <span className={styles.date}>Monday - Saturday</span>
      <span className={styles.time}>11:30 am - 10:15 pm</span>
      <span className={styles.date}>Sunday</span>
      <span className={styles.time}>12:00 am - 11:00 pm</span>
    </div>
  );
};

export default Hour;
