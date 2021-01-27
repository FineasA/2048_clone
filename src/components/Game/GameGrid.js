import "./GameGrid.css";

export default function GameGrid(props) {
  let tiles = props.gameGrid.map((tile, index) => (
    <div className="grid-cell" key={index}>
      {tile}
    </div>
  ));
  console.log(tiles);

  return (
    <div className="game-container">
      <div className="grid-container">
        <div className="grid-row">{tiles}</div>
      </div>
      <div className="tile-container">
        <div className="tile tile-2">
          <div className="tile-inner">2</div>
        </div>
        <div className="tile tile-2">
          <div className="tile-inner">2</div>
        </div>
      </div>
    </div>
  );
}
