import React, { Component } from "react";
import "./AboveGame.css";

export default class AboveGame extends Component {
  render() {
    return (
      <div className="above-game">
        <p className="game-intro">
          Join the tiles, get to <strong>2048!</strong>
          <br />
        </p>
        <a className="restart-button">New Game</a>
      </div>
    );
  }
}
