import Topspace from "./components/topspace/Topspace";
import Intro from "./components/intro/Intro";
import Joining from "./components/joining/Joining";
import Domains from "./components/domains/Domains";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Topspace />
      <div className="sections">
        <Intro />
        <Joining />
        <Domains />
      </div>

    </div>
  );
}

export default App;
