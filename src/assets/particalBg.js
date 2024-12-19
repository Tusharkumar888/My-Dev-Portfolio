export const particalBg ={
  "fpsLimit": 60,
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffffff", "#ff0077", "#00ff99", "#0077ff", "#ffcc00", "#ff00ff", "#00ccff", "#9900ff"],
      "animation": {
        "enable": true,
        "speed": 20,
        "sync": false
      }
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.8,
      "random": true
    },
    "size": {
      "value": 8,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#000000",
      "opacity": 0.6,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 800,
        "rotateY": 1600
      }
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["bubble","grab"]  
      },
      "onclick": {
        "enable": true,
        "mode": ["push","repulse"]  
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 4 
      },
      "bubble": {
        "distance": 200,    
        "size": 20,         
        "duration": 2       
      },
      "attract": {
        "distance": 200,
        "duration": 1
      }
    }
  },
  "retina_detect": true,
  "background": {
    "color": "#ffff",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "style": {
    "z-index": -1,
    "position": "absolute",
    
  }
}
