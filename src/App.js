import React from "react";
import "./App.css";
import Footer from "./containers/Footer";
import {MainContainer} from "./containers/MainContainer";
import Navbar from "./containers/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
