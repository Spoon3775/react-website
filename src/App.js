import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

function App() {
  const particlesInit = (main) => {
    loadSeaAnemonePreset(main);
  };

  const options = {
    preset: "seaAnemone",
  };

  return (
    
    <div className="App">
      {/* Particle Component */}
      <Particles id="tsparticles" options={options} init={particlesInit} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;