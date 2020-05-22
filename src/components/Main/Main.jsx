import React, { useRef, useEffect } from "react";
import I1 from "../../assets/bibimbap.jpg";
import I2 from "../../assets/spicypork.jpg";
import I3 from "../../assets/chicken.jpg";
import Kfood from "../../assets/kfood.jpg";
import largeKfood from "../../assets/largeKfood.jpg";
import "react-awesome-slider/dist/styles.css";
import Nav from "./Nav";
import { Carousel } from "react-bootstrap";

import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./Main.module.scss";

const Main = () => {
  var controller = sceneController();
  let slider = useRef(null);
  let infoh = useRef(null);
  let info = useRef(null);
  let menu = useRef(null);
  let contact = useRef(null);

  const images = [I1, I2, I3];

  const navs = [
    {
      text1: "Bakery",
      text2:
        "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. ",
      buttonName: "Menu",
      reference: menu,
      img: Kfood,
    },
    {
      text1: "Large Order?",
      text2:
        "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. ",
      buttonName: "Contact",
      reference: contact,
      img: Kfood,
    },
  ];

  useEffect(() => {
    let sceneMenu = sceneConstructor(menu, 0, 60, 0.4);
    let sceneContact = sceneConstructor(contact, 0, 60, 0.4);
    let sceneInfoH = sceneConstructor(infoh, 0, 60, 0.4);
    let sceneInfo = sceneConstructor(info, 0, 60, 0.4);
    let sceneSlider = sceneConstructor(slider, 0, 60, 0.4);

    controller.addScene([sceneMenu, sceneContact, sceneInfo, sceneInfoH, sceneSlider]);
  });

  const imageSlider = () => (
    <Carousel interval={4000}>
      {images.map((i, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={i} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  return (
    <div className={styles.container}>
      <div ref={(e) => (slider = e)} className={styles.slide}>
        {imageSlider()}
      </div>
      <div className={styles.text}>
        <span ref={(e) => (infoh = e)} className={styles.infoh}>
          HSJ Bakery
        </span>
        <span ref={(e) => (info = e)} className={styles.info}>
          At HSJ, we believe there’s a lot more to being in the seafood business than just selling
          fish. We’re committed to providing the highest quality responsibly-sourced seafood
          available—and on a mission to change the way people think about and choose their seafood.
        </span>
      </div>
      <div className={styles.intro}>
        <div ref={(e) => (menu = e)} className={styles.menu}>
          <Nav
            className={styles.nav}
            text1={"Authentic Korean Food"}
            text2={
              "No time to cook? Fjord can make your meals easy with carry-out options available at all our locations. See what’s available at the closest Fjord near you. "
            }
            buttonName={"Menus"}
          />
          <img className={styles.image} src={Kfood} alt="" />
        </div>
        <div ref={(e) => (contact = e)} className={styles.menu}>
          <img className={styles.image} src={largeKfood} alt="" />
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
