import React, { useRef, useEffect } from "react";

import Location from "./Location/Location";
import Hour from "./Hour/Hour";
import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./LocationHour.module.scss";

const LocationHour = () => {
  let controller = sceneController();
  let titleLocation = useRef(null);

  useEffect(() => {
    let sceneLocation = sceneConstructor(titleLocation, 0, 60, 0.4);

    controller.addScene([sceneLocation]);
  });

  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <span ref={(e) => (titleLocation = e)} className={styles.titleLocation}>
          Location
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.location}>
          <Location />
        </div>
      </div>
    </div>
  );
};

export default LocationHour;
