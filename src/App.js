import "./App.css";
import Heading from "./components/Heading/Heading";
import AboveGame from "./components/AboveGame/AboveGame";
import LoadGame from "./components/Game/LoadGame";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <AboveGame />
        <LoadGame />
      </div>
    </div>
  );
}

export default App;
