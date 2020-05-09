import React, { Component } from "react";
import styles from "./menucard.module.css";

const CardImage = (props) => {
  return (
    <div>
      <img className={styles.menucardimage}
        src={props.img}
        alt={props.alt}
      />
    </div>
  );
};

export default class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.stae = {};
  }
  render() {
    return (
      <div className={styles.meunucardcontainer}>
        <div className={styles.meunucardimagecontainer}>
            <CardImage img={this.props.img} alt={this.props.alt}/>
        </div>
        <div className={styles.menucardwordcontainer}>
            <span className={styles.menuname}>{this.props.name}</span>
            <span className={styles.menuprice}>{this.props.price}</span>
        </div>
      </div>
    );
  }
}
