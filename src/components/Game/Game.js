import React, { Component } from "react";
import GameGrid from "./GameGrid";
import {
  getInitialTilePositions,
  createGameGridArray,
  randomNewTileValue,
} from "../../utils/mathFunctions.js";
import {
  swipeLeft,
  swipeUp,
  swipeDown,
  swipeRight,
} from "../../utils/movement.js";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameGrid: createGameGridArray(),
      tile: {
        value: 2,
        position: {
          x: 0,
          y: 0,
        },
        tileIsFilled: true,
      },
      initialPositions: getInitialTilePositions(),
    };

    let tile1 = {
      ...this.state.tile,
    };
    //setup of tile 2 has random chance to have value 2 | 4
    let tile2 = {
      ...this.state.tile,
    };
    tile2.value = randomNewTileValue();

    //setup intitial tile positions
    tile1.position = this.state.initialPositions.tile1pos;
    tile2.position = this.state.initialPositions.tile2pos;

    //add initial tiles to game grid for rendering...
    this.state.gameGrid[tile1.position.y][tile1.position.x] = tile1;
    this.state.gameGrid[tile2.position.y][tile2.position.x] = tile2;

    //initial game grid state
    console.log("initial: ", this.state.gameGrid);
  }

  componentDidMount() {
    //listen for key presses
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    //handle keydown event for each event
    //create function swipeLeft, swipeRight, swipeUp, swipeDown
    let gameGrid = [...this.state.gameGrid];
    switch (event.key) {
      case "w":
        //run swipeUp function
        this.setState({ gameGrid: swipeUp(gameGrid) });
        break;
      case "a":
        //run swipeLeft fxn
        this.setState({ gameGrid: swipeLeft(gameGrid) });
        break;
      case "s":
        //run swipeDown fxn
        this.setState({ gameGrid: swipeDown(gameGrid) });
        break;
      case "d":
        //run swipeRight fxn
        this.setState({ gameGrid: swipeRight(gameGrid) });
        break;
    }
  };

  render() {
    return (
      <div>
        <GameGrid gameGrid={this.state.gameGrid} />
      </div>
    );
  }
}
