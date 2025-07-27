const particleOptions = {
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
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      }
    }
  }
};

export default particleOptions;