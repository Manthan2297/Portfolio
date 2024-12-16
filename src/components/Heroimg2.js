import "./Heroimg2.css";
import React, { Component } from "react";

class Heroimg2 extends Component {
  render() {
    return (
      <div>
        <div className="hero2">
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Heroimg2;
