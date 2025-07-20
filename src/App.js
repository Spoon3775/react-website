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

      <div className = "Content">
        <h1>Testing Header</h1>
      </div>
    </div>
  );
}

export default App;