import React, { Component } from "react";
import styles from "./backcard.module.css";

export default class backcard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.backcardcontainer}>
        <div className={styles.backcardtitle}>{this.props.title}</div>
        <p className={styles.backcarddescription}>{this.props.description}</p>
        <div className={styles.backcardfooter}>
          <span className={styles.backcardrating}>
            <span>
              ⭐ <span style={{ opacity: "0.7" }}>{this.props.rating}</span>
            </span>
            <span className={styles.backcardcalories}>
              <span style={{ opacity: "0.7" }}> Calories : {this.props.calories}</span>
            </span>
          </span>
          <button className={styles.orderbutton}>Order Now</button>
        </div>
      </div>
    );
  }
}
