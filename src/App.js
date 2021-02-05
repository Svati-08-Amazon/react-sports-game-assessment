import "./App.css";
import Team from "./Components/team/Team";
import Game from "./Components/game/Game";
import ScoreBoard from "./Components/scoreboard/ScoreBoard";
import raccoon from "./Components/images/raccoon.png";
import squirrel from "./Components/images/squirrel.png";
import bunny from "./Components/images/bunny.png";
import hound from "./Components/images/hound.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: hound,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
