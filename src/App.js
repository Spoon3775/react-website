import './App.css';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { loadFull } from "tsparticles";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
            await loadPolygonMaskPlugin(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
    () => ({
        
    }), []);



    if (init) {
        return (
            <div className="App">
            {/* Particle Component */}
                <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />

                <div className = "Content">
                    <h1>Testing Header</h1>
                </div>
            </div>
        );
    }
}

export default App;