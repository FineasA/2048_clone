import "./GameGrid.css";
import React from "react";

export default function GameGrid({ gameGrid }) {
  console.log("Props: ", gameGrid);
  let tiles = gameGrid.map((column, index) => (
    <div key={index}>
      {column.map((row, index) => (
        <div className="grid-cell" key={index}>
          {row !== 0 ? (
            <div className="tile-container">
              <div className="tile tile-2">{row.value}</div>
            </div>
          ) : null}
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
