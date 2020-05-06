import React, { useRef, useEffect } from "react";
import I1 from "../../assets/image1.png";
import I2 from "../../assets/image2.jpg";
import I3 from "../../assets/image3.png";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Nav from "./Nav";

import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./Main.module.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main = () => {
  var controller = sceneController();
  let slider = useRef(null);
  let infoh = useRef(null);
  let info = useRef(null);
  let menu = useRef(null);
  let contact = useRef(null);

  useEffect(() => {
    let sceneMenu = sceneConstructor(menu, 0, 60, 0.4);
    let sceneContact = sceneConstructor(contact, 0, 60, 0.4);
    let sceneInfoH = sceneConstructor(infoh, 0, 60, 0.4);
    let sceneInfo = sceneConstructor(info, 0, 60, 0.4);
    let sceneSlider = sceneConstructor(slider, 0, 60, 0.4);

    controller.addScene([sceneMenu, sceneContact, sceneInfo, sceneInfoH, sceneSlider]);
  });

  return (
    <div className={styles.container}>
      <div ref={(e) => (slider = e)} className={styles.slide}>
        <AutoplaySlider
          className={styles.autoslider}
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
        <span ref={(e) => (infoh = e)} className={styles.infoh}>
          Haju Kitchen
        </span>
        <span ref={(e) => (info = e)} className={styles.info}>
          At Fjord, we believe there’s a lot more to being in the seafood business than just selling
          fish. We’re committed to providing the highest quality responsibly-sourced seafood
          available—and on a mission to change the way people think about and choose their seafood.
        </span>
      </div>
      <div className={styles.intro}>
        <div ref={(e) => (menu = e)} className={styles.menu}>
          <Nav
            text1={"Authentic Korean Food"}
            text2={
              "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. "
            }
            buttonName={"Menus"}
          />
          <img className={styles.image} src={I2} alt="" />
        </div>
        <div ref={(e) => (contact = e)} className={styles.menu}>
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
