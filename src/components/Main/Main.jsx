import React from "react";
import I1 from "../../assets/image1.png";
import I2 from "../../assets/image2.jpg";
import I3 from "../../assets/image3.png";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Nav from "./Nav";

import styles from "./Main.module.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4000}
          bullets={false}>
          <div data-src={I1} />
          <div data-src={I2} />
          <div data-src={I3} />
        </AutoplaySlider>
      </div>
      <div className={styles.text}>
        <span className={styles.infoh}>Haju Kitchen</span>
        <span className={styles.info}>
          At Fjord, we believe there’s a lot more to being in the seafood business than just selling
          fish. We’re committed to providing the highest quality responsibly-sourced seafood
          available—and on a mission to change the way people think about and choose their seafood.
        </span>
      </div>
      <div className={styles.intro}>
        <div className={styles.menu}>
          <Nav
            text1={"Authentic Korean Food"}
            text2={
              "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. "
            }
            buttonName={"Menus"}
          />
          <img className={styles.image} src={I2} alt="" />
        </div>
        <div className={styles.menu}>
          <img className={styles.image} src={I2} alt="" />
          <Nav
            text1={"Large Order?"}
            text2={
              "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. "
            }
            buttonName={"Contact"}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
