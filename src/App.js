import "./App.css";
import Heading from "./components/Heading/Heading";
import AboveGame from "./components/AboveGame/AboveGame";
import GameGrid from "./components/Game/GameGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <AboveGame />
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
