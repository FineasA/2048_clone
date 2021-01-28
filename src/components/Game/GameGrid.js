import "./GameGrid.css";
import React from "react";

export default function GameGrid(props) {
  let tiles = props.gameGrid.map((column, index) => (
    <div key={index}>
      {column.map((row, index) => (
        <div className="grid-cell" key={index}>
          {row != null ? "X" : null}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="game-container">
      <div className="grid-container">
        <div className="grid-row">{tiles}</div>
      </div>
    </div>
  );
}
