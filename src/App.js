import React from "react";
// import { render } from "react-dom";
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import "./styles.css";

export default function App() {
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}
