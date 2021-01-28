import "./App.css";
import Heading from "./components/Heading/Heading";
import AboveGame from "./components/AboveGame/AboveGame";
import Game from "./components/Game/Game.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <AboveGame />
        <Game />
      </div>
    </div>
  );
}

export default App;
