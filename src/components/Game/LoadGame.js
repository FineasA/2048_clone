import React, { Component } from "react";
import GameGrid from "./GameGrid";
import { getRandomIntInclusive } from "../../utils/mathFunctions.js";

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

    let tile1 = {
      ...this.state.tile,
    };
    let tile2 = {
      ...this.state.tile,
    };

    tile1.position = this.state.initialPositions.tile1pos;
    tile2.position = this.state.initialPositions.tile2pos;

    this.state.gameGrid[tile1.position] = tile1;
    this.state.gameGrid[tile2.position] = tile2;

    console.log(this.state.gameGrid);
  }

  componentDidMount() {
    console.log(this.state.gameGrid.length);
  }

  render() {
    return (
      <div>
        <GameGrid gameGrid={this.state.gameGrid} />
      </div>
    );
  }
}
