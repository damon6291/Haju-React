import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import styles from "./Location.module.scss";

const mapStyles = {
  width: "50%",
  height: "80%",
  margin: "3% 0",
  marginLeft: "7%",
};

export class Location extends Component {
  render() {
    return (
      <div className={styles.container}>
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAp9frRcdtPqD07eCksyh28JFqeXimfJRs",
})(Location);
