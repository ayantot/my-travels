import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Punta Cana"
          country="Dominican Republic"
          image="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRTkp1ZhV60Z9CtD5CBJ_MqiPMFSbaZDYQxo9NuFftys-Wt-miL&sp=8100957febe20bc72785ffa40f3406f0&anticache=795917"
	  distance="7.199.97km"
        />
        <Travel
          destination="Bruges"
          country="Belgium"
          image="https://s14-eu5.startpage.com/wikioimage/7c7bf5719428f91befce5bf368d8a310.jpg"
	  distance="269km"
        />
      </div>
    );
  }
}

export default App;
