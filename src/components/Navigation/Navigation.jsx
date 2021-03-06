import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Main, Menu, About, Contact, Location } from "../index.js";
import styles from "./Navigation.module.scss";
import cx from "classnames";
import logo from "../../assets/haju-logo.png";
import { sceneConstructor, sceneController } from "../Animation/Animation";

const Navigation = () => {
  var controller = sceneController();
  let container = useRef(null);

  useEffect(() => {
    let sceneContainer = sceneConstructor(container, 0, 60, 0.5);

    controller.addScene(sceneContainer);
  });
  return (
    <Router>
      <div ref={(e) => (container = e)} className={styles.container}>
        <Link className={cx(styles.link, styles.head)} to="/Haju-React">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <Link className={styles.link} to="/About">
          About
        </Link>
        <Link className={styles.link} to="/Location">
          Location
        </Link>
        <Link className={styles.link} to="/Menu">
          Menu
        </Link>
        <Link className={styles.link} to="/Contact">
          Contact
        </Link>
        <a
          className={cx(styles.link, styles.order)}
          href="https://www.grubhub.com/restaurant/haju-kitchen-175-massachusetts-ave-boston/852895?gclid=Cj0KCQjwhZr1BRCLARIsALjRVQOV0LoclwF4Ia0Z7QAvEe27gSSxhE7CmGu6eAvEEdxjDr-loTq2F9EaAobDEALw_wcB&gclsrc=aw.ds">
          Order Now
        </a>
      </div>
      <Switch>
        <Route path="/Haju-React" exact component={Main}></Route>
        <Route path="/Menu" exact component={Menu}></Route>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Contact" exact component={Contact}></Route>
        <Route path="/Location" exact component={Location}></Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
