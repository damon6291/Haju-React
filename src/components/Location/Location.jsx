import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import styles from "./Location.module.scss";
import Hour from "./Hour";

const mapStyles = {
  width: "500px",
  height: "500px",
  margin: "3% 0",
  marginLeft: "10%",
};

export class Location extends Component {
  render() {
    return (
      <div className={styles.main}>
        <span className={styles.name}>Location & Hours</span>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <Map
              className={styles.map}
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={{
                lat: 42.34583,
                lng: -71.08737,
              }}>
              <Marker onClick={this.onMarkerClick} name={"Current location"} />
            </Map>
          </div>
          <div className={styles.hour}>
            <Hour />
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAp9frRcdtPqD07eCksyh28JFqeXimfJRs",
})(Location);
