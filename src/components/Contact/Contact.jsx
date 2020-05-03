import React from "react";
import cx from "classnames";
import styles from "./Contact.module.scss";

const Contact = () => {
  const error = () => {
    return "THIS FIELD IS REQUIRED.";
  };

  return (
    <div className={styles.container}>
      <span className={styles.contactUs}>Contact Us</span>
      <span className={styles.required}>*Required</span>
      <form className={styles.formContainer}>
        <span className={styles.placeHolder}>FullName*</span>
        <input className={styles.input} type="text" />
        <span className={styles.error}>{error()}</span>
        <span className={styles.placeHolder}>Email*</span>
        <input className={styles.input} type="email" />
        <span className={styles.error}>{error()}</span>
        <span className={styles.placeHolder}>Message*</span>
        <textarea className={cx(styles.input, styles.message)} type="text" />
        <span className={styles.error}>{error()}</span>
        <button className={styles.submitButton}>Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
