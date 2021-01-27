import React, { Component } from "react";
import "./GameGrid.css";

export default class GameGrid extends Component {
  render() {
    return (
      <div className="game-container">
        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
        </div>
      </div>
    );
  }
}
