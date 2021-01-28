import "./GameGrid.css";

export default function GameGrid(props) {
  let tiles = props.gameGrid.map((tile, index) => (
    <div className="grid-cell" key={index}>
      {tile !== null ? (
        <div className="tile-container">
          <div className="tile tile-2">2</div>
        </div>
      ) : (
        ""
      )}
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
