import React from "react";
import "./App.scss";
import { About, Contact, Main, Navigation, Menu, Bottom } from "./components";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Bottom />
    </div>
  );
}

export default App;
