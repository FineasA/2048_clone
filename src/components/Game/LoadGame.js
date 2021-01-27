import React, { Component } from "react";
import GameGrid from "./GameGrid";
import { getRandomIntInclusive } from "../../HelperFunctions/mathFunctions.js";

export default class LoadGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameGrid: Array(16).fill(null),
      tile: {
        value: 2,
        position: 0,
      },
      initialPositions: getRandomIntInclusive(),
    };
  }

  componentDidMount() {
    let tile = {
      ...this.state.tile,
    };
    let gameGrid = [...this.state.gameGrid];
  }

  render() {
    return (
      <div>
        <GameGrid
          gameGrid={this.state.gameGrid}
          initialPositions={this.state.initialPositions}
        />
      </div>
    );
  }
}
