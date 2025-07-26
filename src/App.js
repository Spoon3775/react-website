import './App.css';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadPolygonShape } from "@tsparticles/shape-polygon";
import { loadFull } from "tsparticles";

function App() {
    const [init, setInit] = useState(false); // State to track if particles are initialized

    useEffect(() => { // Effect to initialize the particles engine

        initParticlesEngine(async (engine) => { // Initialize the particles engine
            await loadFull(engine)
            await loadPolygonShape(engine);
        }).then(() => { // Once the engine is initialized, set the init state to true
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
    () => ({
        FullScreen: {
            enable: true,
        },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
            },
            links: {
                color: "random",
                distance: 200,
                enable: true,
                opacity: 0.6,
                width: 1,
            },
            collisions: {
                enabled: true,
            },
            number: {
                value: 150,
                density: {
                    enable: true,
                    area: 700,
                },
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
            },
            shape: {
                type: "circle"
            },
            size: {
                random: true,
                value: 5,
            },
            opacity: {
                value: 0.5,
            },
            
        },
        interactivity: {
            // Add interactivity options here
        }
        
    }), []);



    if (init) {
        return (
            <div className="App">
            {/* Particle Component */}
                <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />

                <div className = "Content">
                    <h1>Testing Header</h1>
                </div>

                <container className = "wrapper"> {/* Main Content */}
                    <div className = "about-tab"> 
                        <h1 class = "about-title">About Me</h1>
                        <p class = "about-text">I'm Spoon, I'm a 19 year old software dev from the UK</p>

                        <ul class = "about-list">
                            <li><i className="langs"></i>I program in a variety of different langages, such as: Python, C#, JS, Lua, PostgreSQL</li>
                        </ul>
                
                    </div>
                </container>
            </div>
        );
    }
}

export default App;