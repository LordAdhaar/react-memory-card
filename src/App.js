import './App.css';
import Header from "./components/Header";
import Description from "./components/Description";
import CurrentScore from "./components/game/CurrentScore";
import BestScore from "./components/game/BestScore";
import GameLogic from "./components/game/GameLogic"

function App() {

  return (
    <div className="App">
      <div className="container">
        
        <Header />
        <Description/>
        <GameLogic/>


      </div>
    </div>
  );
}

export default App;
