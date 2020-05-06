import React, { useRef, useEffect } from "react";

import Location from "./Location/Location";
import Hour from "./Hour/Hour";
import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./LocationHour.module.scss";

const LocationHour = () => {
  let controller = sceneController();
  let titleLocation = useRef(null);
  let titleAnd = useRef(null);
  let titleHours = useRef(null);

  useEffect(() => {
    let sceneLocation = sceneConstructor(titleLocation, -60, 0, 0.4);
    let sceneAnd = sceneConstructor(titleAnd, 0, 0, 0.4);
    let sceneHours = sceneConstructor(titleHours, 60, 0, 0.4);

    controller.addScene([sceneLocation, sceneAnd, sceneHours]);
  });

  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <span ref={(e) => (titleLocation = e)} className={styles.titleLocation}>
          Location
        </span>
        <span ref={(e) => (titleAnd = e)}>&</span>
        <span ref={(e) => (titleHours = e)} className={styles.titleHours}>
          Hours
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.location}>
          <Location />
        </div>
        <div className={styles.hour}>
          <Hour />
        </div>
      </div>
    </div>
  );
};

export default LocationHour;
